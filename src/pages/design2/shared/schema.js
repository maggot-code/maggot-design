/*
 * @FilePath: \maggot-design\src\pages\design\shared\schema.js
 * @Author: maggot-code
 * @Date: 2022-10-18 14:25:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-18 16:25:37
 * @Description:
 */
// 样式属性
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

// 表单项提示
export const tips = {
    componentName: 'mg-input',
    field: 'tips',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '表单项提示',
        placeholder: '请输入表单项提示',
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

// 开始日期占位内容
export const startPlaceholder = {};

// 结束日期占位内容
export const endPlaceholder = {};

// 是否下载
export const download = {};

// 是否显示进度条
export const percentage = {};

// 是否显示文件总大小
export const total = {};

// 是否显示文件已上传大小
export const current = {};

// 是否显示文件上传进度条
export const speed = {};

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

// 是否显示完整路径
export const showAllLevels = {};

// 是否折叠标签
export const collapseTags = {};

// 是否父子级关联
export const checkStrictly = {};

// 是否显示输入框
export const showInput = {};

// 是否显示输入框控件
export const showInputControls = {};

// 是否显示间隔断点
export const showStops = {};

// 是否显示数值提示
export const showTooltip = {};

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

// 是否显示统计数字
export const showWordLimit = {};

// 是否显示密码切换
export const showPassword = {};

// 是否显示控制按钮
export const controls = {};

// 是否只能输入步长倍数
export const stepStrictly = {};

// 是否允许负数
export const minus = {};

// 是否显示边框
export const border = {};

// 全选是否可用
export const indeterminate = {};

// 是否允许多选
export const multiple = {};

// 选择展开触发方式
export const expandTrigger = {};

// 选择缩放规则
export const resize = {};

// 选择格式化规则
export const format = {};

export default {
    col,
    label,
    tips,
    prepend,
    append,
    placeholder,
    noDataText,
    startPlaceholder,
    endPlaceholder,
    download,
    percentage,
    total,
    current,
    speed,
    disabled,
    showAllLevels,
    collapseTags,
    checkStrictly,
    showInput,
    showInputControls,
    showStops,
    showTooltip,
    readonly,
    clearable,
    autofocus,
    showWordLimit,
    showPassword,
    controls,
    stepStrictly,
    minus,
    border,
    indeterminate,
    multiple,
    expandTrigger,
    resize,
    format,
};
