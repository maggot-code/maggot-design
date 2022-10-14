/*
 * @FilePath: \maggot-design\src\pages\design\component\Input\index.js
 * @Author: maggot-code
 * @Date: 2022-10-13 15:43:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-14 11:09:38
 * @Description:
 */
import { defineDescribe } from '../../hook/defineDescribe';

const label = '输入框';
function defineSchema() {
    return {};
}
export default defineDescribe({
    label,
    defineSchema,
    componentName: 'mg-input',
    uiSchema: {
        label,
        placeholder: '请填写内容',
        col: 24,
    },
});
