/*
 * @FilePath: \maggot-design\src\pages\design\matter\Input\text.js
 * @Author: maggot-code
 * @Date: 2022-10-14 17:05:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-18 16:24:20
 * @Description:
 */
export default {
    componentName: 'mg-input',
    mold: 'text',
    uiSchema: {
        col: 24,
        label: '文本输入框',
        tips: '',
        placeholder: '请输入文本内容',
        prepend: '',
        append: '',
        readonly: false,
        disabled: false,
        clearable: false,
        autofocus: false,
    },
    ruleSchema: [],
    dataSchema: {},
    leaderTag: {},
    workerTag: [],
};
