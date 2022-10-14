/*
 * @FilePath: \maggot-design\src\pages\design\component\Input\password.js
 * @Author: maggot-code
 * @Date: 2022-10-14 17:05:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-14 17:17:10
 * @Description:
 */
export default {
    mold: 'password',
    componentName: 'mg-input',
    value: '',
    uiSchema: {
        col: 24,
        label: '密码输入框',
        tips: '请输入密码',
        placeholder: '请输入密码',
        prefixIcon: 'el-icon-lock',
        suffixIcon: '',
        prepend: '',
        append: '',
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
