/*
 * @FilePath: \maggot-design\src\pages\design\store\matter\slider.js
 * @Author: maggot-code
 * @Date: 2022-10-21 14:47:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-21 14:50:26
 * @Description:
 */
import { defineDescribe } from '../../hooks/matter/defineDescribe';
import { defineStruct } from '../../shared/defineStruct';

const uiSchemaStruct = defineStruct([
    'min',
    'max',
    'step',
    'showTooltip',
    'showStops',
    'showInputControls',
    'showInput',
    'disabled',
]);

const MoldDefault = {
    label: '滑块',
    mold: 'default',
    uiSchema: uiSchemaStruct.setup([
        ['col'],
        ['label', '滑块'],
        ['tips'],
        ['disabled', false],
        ['min', 0],
        ['max', 10],
        ['step', 1],
        ['showInput', false],
        ['showStops', false],
        ['showInputControls', false],
        ['showTooltip', true],
    ]),
};

export default defineDescribe(
    {
        namespace: 'mg-slider',
        label: '滑块',
        mold: MoldDefault.mold,
    },
    {
        [MoldDefault.mold]: MoldDefault,
    }
);
