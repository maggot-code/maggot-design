/*
 * @FilePath: \maggot-design\src\pages\design\store\matter\switch.js
 * @Author: maggot-code
 * @Date: 2022-10-21 14:44:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-21 14:47:54
 * @Description:
 */
import { defineDescribe } from '../../hooks/matter/defineDescribe';
import { defineStruct } from '../../shared/defineStruct';

const uiSchemaStruct = defineStruct([
    'activeColor',
    'inactiveColor',
    'activeText',
    'inactiveText',
    'width',
    'disabled',
]);

const MoldDefault = {
    label: '开关',
    mold: 'default',
    uiSchema: uiSchemaStruct.setup([
        ['col'],
        ['label', '开关'],
        ['tips'],
        ['disabled', false],
        ['width'],
        ['activeText'],
        ['inactiveText'],
        ['activeColor', '#409EFF'],
        ['inactiveColor', '#C0CCDA'],
    ]),
};

export default defineDescribe(
    {
        namespace: 'mg-switch',
        label: '开关',
        mold: MoldDefault.mold,
    },
    {
        [MoldDefault.mold]: MoldDefault,
    }
);
