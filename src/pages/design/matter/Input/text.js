/*
 * @FilePath: \maggot-design\src\pages\design\component\Input\text.js
 * @Author: maggot-code
 * @Date: 2022-10-14 17:05:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-14 17:20:06
 * @Description:
 */
export default {
    mold: 'text',
    componentName: 'mg-input',
    value: '',
    uiSchema: {
        col: 24,
        label: '文本输入框',
        tips: '请输入内容',
        placeholder: '请输入内容',
        prefixIcon: 'el-icon-edit',
        suffixIcon: '',
        prepend: '',
        append: '',
        autofocus: false,
        readonly: false,
        disabled: false,
        clearable: false,
        showPassword: true,
    },
    ruleSchema: [],
    dataSchema: {},
    leaderTag: {},
    workerTag: [],
};
