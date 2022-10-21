/*
 * @FilePath: \maggot-design\src\pages\design\store\setter\enums.js
 * @Author: maggot-code
 * @Date: 2022-10-21 10:54:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-21 11:30:14
 * @Description:
 */
// 时间选择器 - 格式化方式
export const formatEnums = [
    {
        id: 'yyyy-MM-dd HH:mm:ss',
        label: '年月日时分秒',
    },
    {
        id: 'yyyy-MM-dd HH:mm',
        label: '年月日时分',
    },
    {
        id: 'yyyy-MM-dd HH',
        label: '年月日时',
    },
    {
        id: 'yyyy-MM-dd',
        label: '年月日',
    },
    {
        id: 'yyyy-MM',
        label: '年月',
    },
    {
        id: 'yyyy',
        label: '年',
    },
    {
        id: 'HH:mm:ss',
        label: '时分秒',
    },
    {
        id: 'HH:mm',
        label: '时分',
    },
    {
        id: 'HH',
        label: '时',
    },
    {
        id: 'mm:ss',
        label: '分秒',
    },
    {
        id: 'mm',
        label: '分',
    },
    {
        id: 'ss',
        label: '秒',
    },
];

// 用户缩放方式选择
export const resizeEnums = [
    {
        id: 'none',
        label: '禁止缩放',
    },
    {
        id: 'both',
        label: '水平垂直缩放',
    },
    {
        id: 'horizontal',
        label: '水平缩放',
    },
    {
        id: 'vertical',
        label: '垂直缩放',
    },
];

// 对齐方式选择
export const alignEnums = [
    {
        id: 'center',
        label: '居中',
    },
    {
        id: 'left',
        label: '左侧',
    },
    {
        id: 'right',
        label: '右侧',
    },
];

// 触发方式选择
export const triggerEnums = [
    {
        id: 'hover',
        label: '移入',
    },
    {
        id: 'click',
        label: '点击',
    },
];
