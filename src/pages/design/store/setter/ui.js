/*
 * @FilePath: \maggot-design\src\pages\design\store\setter\ui.js
 * @Author: maggot-code
 * @Date: 2022-10-19 10:23:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-20 14:12:47
 * @Description:
 */
// 栅格布局
export const col = {
    componentName: 'mg-slider',
    field: 'col',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '栅格布局',
        max: 24,
    },
    value: 24,
};

// 表单项标题
export const label = {
    componentName: 'mg-input',
    field: 'label',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '表单项标题',
        placeholder: '请输入表单项标题',
    },
    value: '',
};

// 占位内容
export const placeholder = {
    componentName: 'mg-input',
    field: 'placeholder',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '占位文本内容',
        placeholder: '请输入占位文本内容',
    },
    value: '',
};

// 表单项提示
export const tips = {
    componentName: 'mg-input',
    field: 'tips',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '提示说明',
        placeholder: '请输入提示说明',
    },
    value: '',
};

// 前置内容
export const prepend = {
    componentName: 'mg-input',
    field: 'prepend',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '前置内容',
        placeholder: '请输入前置内容',
    },
    value: '',
};

// 后置内容
export const append = {
    componentName: 'mg-input',
    field: 'append',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '后置内容',
        placeholder: '请输入后置内容',
    },
    value: '',
};

// 空数据提示内容
export const noDataText = {
    componentName: 'mg-input',
    field: 'noDataText',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '空数据文本',
        tips: '没有数据时显示的文本提示内容',
        placeholder: '请输入空数据文本',
    },
    value: '',
};

// 是否被禁用
export const disabled = {
    componentName: 'mg-switch',
    field: 'disabled',
    mold: 'default',
    dataSchema: {
        valueType: 'Boolean',
    },
    uiSchema: {
        col: 12,
        label: '是否禁用',
    },
    value: false,
};

// 是否只读
export const readonly = {
    componentName: 'mg-switch',
    field: 'readonly',
    mold: 'default',
    dataSchema: {
        valueType: 'Boolean',
    },
    uiSchema: {
        col: 12,
        label: '是否只读',
    },
    value: false,
};

// 是否允许清空
export const clearable = {
    componentName: 'mg-switch',
    field: 'clearable',
    mold: 'default',
    dataSchema: {
        valueType: 'Boolean',
    },
    uiSchema: {
        col: 12,
        label: '是否可清空',
    },
    value: false,
};

// 是否自动获取焦点
export const autofocus = {
    componentName: 'mg-switch',
    field: 'autofocus',
    mold: 'default',
    dataSchema: {
        valueType: 'Boolean',
    },
    uiSchema: {
        col: 12,
        label: '自动获取焦点',
    },
    value: false,
};

export default {
    col,
    label,
    placeholder,
    tips,
    prepend,
    append,
    noDataText,
    disabled,
    readonly,
    clearable,
    autofocus,
};
