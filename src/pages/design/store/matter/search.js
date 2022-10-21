/*
 * @FilePath: \maggot-design\src\pages\design\store\matter\search.js
 * @Author: maggot-code
 * @Date: 2022-10-21 14:42:42
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-21 14:43:58
 * @Description:
 */
import { defineDescribe } from '../../hooks/matter/defineDescribe';
import { defineStruct } from '../../shared/defineStruct';

const uiSchemaStruct = defineStruct([
    'placeholder',
    'noDataText',
    'multipleLimit',
    'clearable',
    'collapseTags',
    'multiple',
    'disabled',
]);

const MoldDefault = {
    label: '搜索框',
    mold: 'default',
    uiSchema: uiSchemaStruct.setup([
        ['col'],
        ['label', '搜索框'],
        ['tips'],
        ['placeholder', '请选择'],
        ['noDataText', '暂无数据'],
        ['multiple', false],
        ['disabled', false],
        ['clearable', false],
        ['collapseTags', false],
        ['multipleLimit', 0],
    ]),
};

export default defineDescribe(
    {
        namespace: 'mg-search',
        label: '搜索框',
        mold: MoldDefault.mold,
    },
    {
        [MoldDefault.mold]: MoldDefault,
    }
);
