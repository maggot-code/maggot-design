/*
 * @FilePath: \maggot-design\src\pages\design\store\matter\time.js
 * @Author: maggot-code
 * @Date: 2022-10-21 13:57:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-21 14:12:04
 * @Description:
 */
import { defineDescribe } from '../../hooks/matter/defineDescribe';
import { defineStruct } from '../../shared/defineStruct';

const uiSchemaStruct = defineStruct([
    'placeholder',
    'startPlaceholder',
    'endPlaceholder',
    'prefixIcon',
    'rangeSeparator',
    'format',
    'align',
    'clearable',
    'timeArrowControl',
    'readonly',
    'disabled',
    'unlinkPanels',
]);

const MoldDate = {
    label: '日期选择框',
    mold: 'date',
    uiSchema: uiSchemaStruct.setup([
        ['col'],
        ['label', '日期选择框'],
        ['tips'],
        ['placeholder', '请选择日期'],
        ['disabled', false],
        ['clearable', false],
        ['readonly', false],
        ['format', 'yyyy-MM-dd'],
        ['align'],
        ['prefixIcon', 'el-icon-date'],
    ]),
};

const MoldDaterange = {
    label: '日期范围选择框',
    mold: 'daterange',
    uiSchema: uiSchemaStruct.setup([
        ['col'],
        ['label', '日期范围选择框'],
        ['tips'],
        ['startPlaceholder', '开始日期'],
        ['endPlaceholder', '结束日期'],
        ['disabled', false],
        ['clearable', false],
        ['readonly', false],
        ['format', 'yyyy-MM-dd'],
        ['align'],
        ['prefixIcon', 'el-icon-date'],
        ['timeArrowControl'],
        ['rangeSeparator', '至'],
        ['unlinkPanels'],
    ]),
};

const MoldDatetime = {
    label: '日期时间选择框',
    mold: 'datetime',
    uiSchema: uiSchemaStruct.setup([
        ['col'],
        ['label', '日期时间选择框'],
        ['tips'],
        ['placeholder', '请选择日期时间'],
        ['disabled', false],
        ['clearable', false],
        ['readonly', false],
        ['format', 'yyyy-MM-dd HH:mm:ss'],
        ['align'],
        ['prefixIcon', 'el-icon-date'],
    ]),
};

const MoldDatetimerange = {
    label: '日期时间范围选择框',
    mold: 'datetimerange',
    uiSchema: uiSchemaStruct.setup([
        ['col'],
        ['label', '日期时间范围选择框'],
        ['tips'],
        ['startPlaceholder', '开始日期时间'],
        ['endPlaceholder', '结束日期时间'],
        ['disabled', false],
        ['clearable', false],
        ['readonly', false],
        ['format', 'yyyy-MM-dd HH:mm:ss'],
        ['align'],
        ['prefixIcon', 'el-icon-date'],
        ['timeArrowControl'],
        ['rangeSeparator', '至'],
        ['unlinkPanels'],
    ]),
};

const MoldMonth = {
    label: '月份选择框',
    mold: 'month',
    uiSchema: uiSchemaStruct.setup([
        ['col'],
        ['label', '月份选择框'],
        ['tips'],
        ['placeholder', '请选择月份'],
        ['disabled', false],
        ['clearable', false],
        ['readonly', false],
        ['align'],
        ['prefixIcon', 'el-icon-date'],
    ]),
};

const MoldYear = {
    label: '年份选择框',
    mold: 'year',
    uiSchema: uiSchemaStruct.setup([
        ['col'],
        ['label', '年份选择框'],
        ['tips'],
        ['placeholder', '请选择年份'],
        ['disabled', false],
        ['clearable', false],
        ['readonly', false],
        ['align'],
        ['prefixIcon', 'el-icon-date'],
    ]),
};

export default defineDescribe(
    {
        namespace: 'mg-time',
        label: '日期框',
        mold: MoldDate.mold,
    },
    {
        [MoldDate.mold]: MoldDate,
        [MoldDaterange.mold]: MoldDaterange,
        [MoldDatetime.mold]: MoldDatetime,
        [MoldDatetimerange.mold]: MoldDatetimerange,
        [MoldMonth.mold]: MoldMonth,
        [MoldYear.mold]: MoldYear,
    }
);
