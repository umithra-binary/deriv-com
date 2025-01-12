import React from 'react'
import {
    ContinuousIndices,
    CrashBoom,
    MajorPairs,
    StepIndices,
    CryptocurrenciesMultipliers,
    SmartFX,
} from '../../instruments/_submarkets'
import {
    ContinuousIndicesDetails,
    CrashBoomDetails,
    StepIndicesDetails,
    CryptocurrenciesDetails,
    SmartFXDetails,
} from './_details'
import { Localize } from 'components/localization'

export const forex_multiplier = {
    markets_list: {
        col: 4,
        tablet_col: 3,
        mobile_col: 2,
    },
    content: [
        {
            title: <Localize translate_text="Major pairs" />,
            component: <MajorPairs />,
        },
        {
            title: <Localize translate_text="SmartFX" />,
            component: <SmartFX />,
            details: SmartFXDetails,
        },
    ],
}

export const synthetic_multiplier = {
    has_global_accordion: true,
    content: [
        {
            title: <Localize translate_text="Continuous indices" />,
            component: <ContinuousIndices />,
            details: ContinuousIndicesDetails,
        },
        {
            title: <Localize translate_text="Crash/Boom" />,
            component: <CrashBoom />,
            details: CrashBoomDetails,
        },
        {
            title: <Localize translate_text="Step indices" />,
            component: <StepIndices />,
            details: StepIndicesDetails,
        },
    ],
    eu_content: [
        <Localize
            key={0}
            translate_text="Return to player for mulitplier options is in the range of 95.0-99.9% for all indices on an average. Using a different multiplier or duration may affect the RTP."
        />,
    ],
}

export const crypto_multiplier = {
    markets_list: {
        col: 4,
        tablet_col: 4,
        mobile_col: 2,
    },
    has_global_accordion: true,
    content: [
        {
            title: <Localize translate_text="Cryptocurrencies" />,
            component: <CryptocurrenciesMultipliers />,
            details: CryptocurrenciesDetails,
        },
    ],
}
