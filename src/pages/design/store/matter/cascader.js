/*
 * @FilePath: \maggot-design\src\pages\design\store\matter\cascader.js
 * @Author: maggot-code
 * @Date: 2022-10-21 14:34:14
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-21 14:42:00
 * @Description:
 */
import { defineDescribe } from '../../hooks/matter/defineDescribe';
import { defineStruct } from '../../shared/defineStruct';

const uiSchemaStruct = defineStruct([
    'separator',
    'expandTrigger',
    'clearable',
    'collapseTags',
    'disabled',
    'multiple',
    'showAllLevels',
    'checkStrictly',
]);

const MoldDefault = {
    label: '级联选择框',
    mold: 'default',
    uiSchema: uiSchemaStruct.setup([
        ['col'],
        ['label', '级联选择框'],
        ['tips'],
        ['disabled', false],
        ['clearable', false],
        ['showAllLevels', true],
        ['collapseTags', false],
        ['separator', '/'],
        ['expandTrigger', 'hover'],
        ['multiple', false],
        ['checkStrictly', true],
    ]),
};

export default defineDescribe(
    {
        namespace: 'mg-cascader',
        label: '级联选择框',
        mold: MoldDefault.mold,
    },
    {
        [MoldDefault.mold]: MoldDefault,
    }
);
