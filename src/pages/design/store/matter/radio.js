/*
 * @FilePath: \maggot-design\src\pages\design\store\matter\radio.js
 * @Author: maggot-code
 * @Date: 2022-10-21 13:35:14
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-21 13:41:50
 * @Description:
 */
import { defineDescribe } from '../../hooks/matter/defineDescribe';
import { defineStruct } from '../../shared/defineStruct';

const uiSchemaStruct = defineStruct([
    'textColor',
    'fill',
    'border',
    'disabled',
]);
const enums = [
    { id: 1, text: '选项一' },
    { id: 2, text: '选项二' },
    { id: 3, text: '选项三' },
];

const MoldDefault = {
    label: '单选框',
    mold: 'default',
    uiSchema: uiSchemaStruct.setup([
        ['col'],
        ['label', '单选框'],
        ['tips'],
        ['border', false],
        ['disabled', false],
        ['textColor'],
        ['fill'],
    ]),
    dataSchema: { enums },
};

const MoldButton = {
    label: '按钮单选框',
    mold: 'button',
    uiSchema: uiSchemaStruct.setup([
        ['col'],
        ['label', '按钮单选框'],
        ['tips'],
        ['border', false],
        ['disabled', false],
        ['textColor'],
        ['fill'],
    ]),
    dataSchema: { enums },
};

export default defineDescribe(
    {
        namespace: 'mg-radio',
        label: '单选框',
        mold: MoldDefault.mold,
    },
    {
        [MoldDefault.mold]: MoldDefault,
        [MoldButton.mold]: MoldButton,
    }
);
