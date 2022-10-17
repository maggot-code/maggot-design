/*
 * @FilePath: \maggot-design\src\pages\design\component\Input\number.js
 * @Author: maggot-code
 * @Date: 2022-10-14 17:05:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-14 17:19:19
 * @Description:
 */
export default {
    mold: 'number',
    componentName: 'mg-input',
    value: '',
    uiSchema: {
        col: 24,
        label: '数字输入框',
        tips: '请输入数字',
        prefixIcon: '',
        suffixIcon: '',
        prepend: '',
        append: '',
        controlsPosition: 'right',
        controls: true,
        step: 1,
        stepStrictly: false,
        precision: 0,
        minus: false,
        min: 0,
        max: 10,
        readonly: false,
        disabled: false,
        clearable: false,
    },
    ruleSchema: [],
    dataSchema: {},
    leaderTag: {},
    workerTag: [],
};
