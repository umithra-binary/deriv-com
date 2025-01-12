import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Text } from './typography'
import { Flex } from 'components/containers'
import { useTabState } from 'components/hooks/use-tab-state'
import device from 'themes/device'

const TabContent = styled.div`
    flex: 1;
    width: 100%;
`

const TabButton = styled.button`
    z-index: 2;
    height: auto;
    padding: 8px 24px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: transparent;
    outline: none;
    transition: border-color 0.2s ease-in;
    border: none;
    border-bottom: 2px solid var(--color-grey-2);
    white-space: nowrap;
    ${(props) =>
        props.selected &&
        css`
            border-color: var(--color-red);
            ${Text} {
                font-weight: bold;
            }
        `}

    &:hover,
    &:focus,
    &:active {
        border-bottom: 2px solid
            ${(props) => (props.selected ? 'var(--color-red)' : 'var(--color-red-2)')};
    }
`

const TabList = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    position: relative;
    overflow: auto;

    ::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    @media ${device.mobileL} {
        justify-content: space-between;
    }
`

const LineDivider = styled.div`
    bottom: 0;
    position: absolute;
    height: 2px;
    width: 100%;
    background: var(--color-grey-2);
    z-index: 1;
`

const Content = styled.div`
    flex: 1;
    width: 100%;
`

const TextWrapper = styled(Text)`
    text-align: center;
    font-size: var(--text-size-m);
    color: var(--color-black);

    @media ${device.tabletS} {
        font-size: ${({ font_size }) => font_size ?? 'var(--text-size-sm)'};
    }
    @media ${device.mobileM} {
        font-size: ${({ font_size }) => font_size ?? 'var(--text-size-s)'};
    }
`

const TabPanel = ({ children }) => (
    <TabContent role="tabpanel" tabindex="0">
        {children}
    </TabContent>
)

TabPanel.propTypes = {
    children: PropTypes.node,
}

const Tabs = ({ children, route_from, tab_list }) => {
    const [selected_tab, setSelectedTab] = useState(0)
    const [active_tab, setActiveTab] = useTabState(tab_list)

    useEffect(() => {
        setSelectedTab(tab_list.indexOf(active_tab))
    }, [active_tab])

    return (
        <Flex direction="column">
            <TabList role="tablist">
                {React.Children.map(children, ({ props: { label } }, index) => (
                    <TabButton
                        role="tab"
                        selected={selected_tab === index}
                        aria-selected={selected_tab === index ? 'true' : 'false'}
                        onClick={() => setActiveTab(tab_list[index])}
                    >
                        <TextWrapper font_size={route_from === 'markets' ? '24px' : undefined}>
                            {label}
                        </TextWrapper>
                    </TabButton>
                ))}
                <LineDivider />
            </TabList>

            <Content>
                {React.Children.map(children, (el, index) =>
                    selected_tab === index ? el : undefined,
                )}
            </Content>
        </Flex>
    )
}

Tabs.Panel = TabPanel

Tabs.propTypes = {
    children: PropTypes.node,
    route_from: PropTypes.string,
    tab_list: PropTypes.array,
}

export default Tabs
