/*
 * @FilePath: \maggot-design\src\pages\design\store\setter\ui.js
 * @Author: maggot-code
 * @Date: 2022-10-19 10:23:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-21 13:17:27
 * @Description:
 */
import { formatEnums, resizeEnums, alignEnums, triggerEnums } from './enums';

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

// 提示说明
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

// 占位文本内容
export const placeholder = {
    componentName: 'mg-input',
    field: 'placeholder',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '占位文本',
        placeholder: '请输入占位文本',
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
        label: '前置文本',
        placeholder: '请输入前置文本',
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
        label: '后置文本',
        placeholder: '请输入后置文本',
    },
    value: '',
};

// 没有数据时的文本内容
export const noDataText = {
    componentName: 'mg-input',
    field: 'noDataText',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '空数据文本',
        placeholder: '请输入空数据文本',
    },
    value: '暂无数据',
};

// 时间范围选择器 - 开始日期的占位内容
export const startPlaceholder = {
    componentName: 'mg-input',
    field: 'startPlaceholder',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '开始日期占位文本',
        placeholder: '请输入开始日期占位文本',
    },
    value: '开始日期',
};

// 时间范围选择器 - 结束日期的占位内容
export const endPlaceholder = {
    componentName: 'mg-input',
    field: 'endPlaceholder',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '结束日期占位文本',
        placeholder: '请输入结束日期占位文本',
    },
    value: '结束日期',
};

// 时间选择器 - 分隔符内容
export const rangeSeparator = {
    componentName: 'mg-input',
    field: 'rangeSeparator',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '分隔符',
        placeholder: '请输入分隔符',
    },
    value: '',
};

// 开关控件 - 开启时的文本内容
export const activeText = {
    componentName: 'mg-input',
    field: 'activeText',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '开启时文本',
        placeholder: '请输入开启时文本',
    },
    value: '',
};

// 开关控件 - 关闭时的文本内容
export const inactiveText = {
    componentName: 'mg-input',
    field: 'inactiveText',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '关闭时文本',
        placeholder: '请输入关闭时文本',
    },
    value: '',
};

// 头部图标
export const prefixIcon = {
    componentName: 'mg-input',
    field: 'prefixIcon',
    mold: 'default',
    uiSchema: {
        col: 24,
        label: '头部图标',
        placeholder: '请输入头部图标',
    },
    value: '',
};

// 尾部图标
export const suffixIcon = {
    componentName: 'mg-input',
    field: 'suffixIcon',
    mold: 'default',
    uiSchema: {
        col: 24,
        label: '尾部图标',
        placeholder: '请输入尾部图标',
    },
};

// 开关选择器 - 激活时背景色
export const activeColor = {
    componentName: 'mg-input',
    field: 'activeColor',
    mold: 'default',
    uiSchema: {
        col: 24,
        label: '激活颜色',
        placeholder: '请输入激活颜色',
    },
    value: '#409EFF',
};

// 开关选择器 - 禁用时背景色
export const inactiveColor = {
    componentName: 'mg-input',
    field: 'inactiveColor',
    mold: 'default',
    uiSchema: {
        col: 24,
        label: '禁用颜色',
        placeholder: '请输入禁用颜色',
    },
    value: '#C0CCDA',
};

// 激活状态文本颜色
export const textColor = {
    componentName: 'mg-input',
    field: 'textColor',
    mold: 'default',
    uiSchema: {
        col: 24,
        label: '文本颜色',
        placeholder: '请输入文本颜色',
    },
    value: '#ffffff',
};

// 激活状态填充颜色
export const fill = {
    componentName: 'mg-input',
    field: 'fill',
    mold: 'default',
    uiSchema: {
        col: 24,
        label: '填充颜色',
        placeholder: '请输入填充颜色',
    },
    value: '#409EFF',
};

// 输入框默认行数
export const rows = {
    componentName: 'mg-input',
    field: 'rows',
    mold: 'number',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '输入行数',
    },
    value: 2,
};

// 最大输入长度
export const maxlength = {
    componentName: 'mg-input',
    field: 'maxlength',
    mold: 'number',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '最大长度',
    },
    value: 200,
};

// 最小输入长度
export const minlength = {
    componentName: 'mg-input',
    field: 'minlength',
    mold: 'number',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '最小长度',
    },
    value: 0,
};

// 计数器步长
export const step = {
    componentName: 'mg-input',
    field: 'step',
    mold: 'float',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '计数器步长',
    },
    value: 1,
};

// 数值精度
export const precision = {
    componentName: 'mg-input',
    field: 'precision',
    mold: 'number',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '数值精度',
    },
    value: 1,
};

// 最小值范围
export const min = {
    componentName: 'mg-input',
    field: 'min',
    mold: 'number',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '最小值',
    },
};

// 最大值范围
export const max = {
    componentName: 'mg-input',
    field: 'max',
    mold: 'number',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '最大值',
    },
};

// 多选时允许选择的最大数量
export const multipleLimit = {
    componentName: 'mg-input',
    field: 'multipleLimit',
    mold: 'number',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '勾选最大数量',
    },
    value: 0,
};

// 一次性选择文件最大数量
export const limit = {
    componentName: 'mg-input',
    field: 'limit',
    mold: 'number',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '选择数量',
    },
    value: 0,
};

// 文件大小限制
export const size = {
    componentName: 'mg-input',
    field: 'limit',
    mold: 'number',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '大小限制',
        minus: true,
    },
    value: -1,
};

// 开关选择器宽度
export const width = {
    componentName: 'mg-input',
    field: 'width',
    mold: 'number',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '宽度限制',
    },
    value: 40,
};

// 是否禁用
export const disabled = {
    componentName: 'mg-switch',
    field: 'disabled',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '是否禁用',
    },
};

// 是否只读
export const readonly = {
    componentName: 'mg-switch',
    field: 'readonly',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '是否只读',
    },
};

// 允许清空
export const clearable = {
    componentName: 'mg-switch',
    field: 'clearable',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '允许清空',
        activeText: '允许',
        inactiveText: '不允许',
    },
};

// 自动获取焦点
export const autofocus = {
    componentName: 'mg-switch',
    field: 'autofocus',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '自动聚焦',
    },
};

// 是否显示字数统计
export const showWordLimit = {
    componentName: 'mg-switch',
    field: 'showWordLimit',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '字数统计',
        activeText: '开启',
        inactiveText: '关闭',
    },
    value: true,
};

// 是否显示密码明文切换按钮
export const showPassword = {
    componentName: 'mg-switch',
    field: 'showPassword',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '密码切换',
        activeText: '开启',
        inactiveText: '关闭',
    },
    value: true,
};

// 是否显示控制按钮
export const controls = {
    componentName: 'mg-switch',
    field: 'controls',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '控制按钮',
    },
    value: true,
};

// 是否只允许输入步长的倍数
export const stepStrictly = {
    componentName: 'mg-switch',
    field: 'stepStrictly',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '关联步长',
    },
};

// 是否允许负数
export const minus = {
    componentName: 'mg-switch',
    field: 'minus',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '允许负数',
        activeText: '允许',
        inactiveText: '不允许',
    },
};

// 是否显示边框
export const border = {
    componentName: 'mg-switch',
    field: 'border',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '显示边框',
        activeText: '显示',
        inactiveText: '隐藏',
    },
};

// 是否显示边框
export const indeterminate = {
    componentName: 'mg-switch',
    field: 'indeterminate',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '启用全选',
        activeText: '开启',
        inactiveText: '关闭',
    },
};

// 是否多选
export const multiple = {
    componentName: 'mg-switch',
    field: 'multiple',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '是否多选',
    },
};

// 是否折叠标签
export const collapseTags = {
    componentName: 'mg-switch',
    field: 'collapseTags',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '折叠标签',
        activeText: '折叠',
        inactiveText: '展开',
    },
};

// 时间选择器 - 是否使用箭头进行时间选择
export const timeArrowControl = {
    componentName: 'mg-switch',
    field: 'timeArrowControl',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '使用箭头',
    },
};

// 时间选择器 - 取消两个面板之间的联动
export const unlinkPanels = {
    componentName: 'mg-switch',
    field: 'unlinkPanels',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '取消联动',
    },
};

// 是否点击下载
export const download = {
    componentName: 'mg-switch',
    field: 'download',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '点击下载',
        activeText: '开启',
        inactiveText: '关闭',
    },
};

// 是否显示上传进度条
export const percentage = {
    componentName: 'mg-switch',
    field: 'percentage',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '进度条',
        activeText: '显示',
        inactiveText: '隐藏',
    },
};

// 是否显示上传文件总大小
export const total = {
    componentName: 'mg-switch',
    field: 'total',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '文件总大小',
    },
};

// 是否显示已上传文件大小
export const current = {
    componentName: 'mg-switch',
    field: 'current',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '上传大小',
    },
};

// 是否显示已上传文件大小
export const speed = {
    componentName: 'mg-switch',
    field: 'speed',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '上传进度',
    },
};

// 是否显示选中数值的完整路径
export const showAllLevels = {
    componentName: 'mg-switch',
    field: 'showAllLevels',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '完整路径',
    },
};

// 是否关联父节点
export const checkStrictly = {
    componentName: 'mg-switch',
    field: 'checkStrictly',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '关联节点',
    },
};

// 显示输入框框
export const showInput = {
    componentName: 'mg-switch',
    field: 'showInput',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '显示输入框',
    },
};

// 是否显示输入框控件
export const showInputControls = {
    componentName: 'mg-switch',
    field: 'showInputControls',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '输入框控件',
        activeText: '显示',
        inactiveText: '隐藏',
    },
};

// 是否显示间隔断点
export const showStops = {
    componentName: 'mg-switch',
    field: 'showStops',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '间隔断点',
        activeText: '显示',
        inactiveText: '隐藏',
    },
};

// 是否显示提示
export const showTooltip = {
    componentName: 'mg-switch',
    field: 'showTooltip',
    mold: 'default',
    dataSchema: {},
    uiSchema: {
        col: 24,
        label: '节点提示',
        activeText: '开启',
        inactiveText: '关闭',
    },
};

// 用户缩放方式
export const resize = {
    componentName: 'mg-select',
    field: 'resize',
    mold: 'default',
    dataSchema: {
        enums: resizeEnums,
    },
    uiSchema: {
        col: 24,
        label: '缩放方式',
        clearable: false,
    },
    value: 'vertical',
};

// 时间选择器 - 格式化方式
export const format = {
    componentName: 'mg-select',
    field: 'format',
    mold: 'default',
    dataSchema: {
        enums: formatEnums,
    },
    uiSchema: {
        col: 24,
        label: '格式化规则',
        clearable: false,
    },
    value: 'yyyy-MM-dd HH:mm:ss',
};

// 对齐方式
export const align = {
    componentName: 'mg-select',
    field: 'align',
    mold: 'default',
    dataSchema: {
        enums: alignEnums,
    },
    uiSchema: {
        col: 24,
        label: '对齐方式',
        clearable: false,
    },
    value: 'center',
};

// 菜单展开方式
export const expandTrigger = {
    componentName: 'mg-select',
    field: 'expandTrigger',
    mold: 'default',
    dataSchema: {
        enums: triggerEnums,
    },
    uiSchema: {
        col: 24,
        label: '展开方式',
        clearable: false,
    },
    value: 'hover',
};

export default {
    col,
    // input 渲染器
    label,
    tips,
    placeholder,
    prepend,
    append,
    noDataText,
    startPlaceholder,
    endPlaceholder,
    rangeSeparator,
    activeText,
    inactiveText,
    prefixIcon,
    suffixIcon,
    activeColor,
    inactiveColor,
    textColor,
    fill,
    // number 渲染器
    rows,
    maxlength,
    minlength,
    step,
    precision,
    min,
    max,
    multipleLimit,
    limit,
    size,
    width,
    // switch 渲染器
    disabled,
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
    collapseTags,
    timeArrowControl,
    unlinkPanels,
    download,
    percentage,
    total,
    current,
    speed,
    showAllLevels,
    checkStrictly,
    showInput,
    showInputControls,
    showStops,
    showTooltip,
    // select 渲染器
    resize,
    format,
    align,
    expandTrigger,
};
