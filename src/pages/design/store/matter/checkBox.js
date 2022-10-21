/*
 * @FilePath: \maggot-design\src\pages\design\store\matter\checkBox.js
 * @Author: maggot-code
 * @Date: 2022-10-21 13:44:19
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-21 13:50:51
 * @Description:
 */
import { defineDescribe } from '../../hooks/matter/defineDescribe';
import { defineStruct } from '../../shared/defineStruct';

const uiSchemaStruct = defineStruct([
    'textColor',
    'fill',
    'min',
    'max',
    'indeterminate',
    'border',
    'disabled',
]);
const enums = [
    { id: 1, text: '选项一' },
    { id: 2, text: '选项二' },
    { id: 3, text: '选项三' },
];

const MoldDefault = {
    label: '多选框',
    mold: 'default',
    uiSchema: uiSchemaStruct.setup([
        ['col'],
        ['label', '多选框'],
        ['tips'],
        ['indeterminate', true],
        ['border', false],
        ['disabled', false],
        ['min'],
        ['max'],
        ['textColor'],
        ['fill'],
    ]),
    dataSchema: { enums },
};

const MoldButton = {
    label: '按钮多选框',
    mold: 'button',
    uiSchema: uiSchemaStruct.setup([
        ['col'],
        ['label', '按钮多选框'],
        ['tips'],
        ['indeterminate', true],
        ['border', false],
        ['disabled', false],
        ['min'],
        ['max'],
        ['textColor'],
        ['fill'],
    ]),
    dataSchema: { enums },
};

export default defineDescribe(
    {
        namespace: 'mg-check-box',
        label: '多选框',
        mold: MoldDefault.mold,
    },
    {
        [MoldDefault.mold]: MoldDefault,
        [MoldButton.mold]: MoldButton,
    }
);
