/*
 * @FilePath: \maggot-design\src\pages\design\component\Input\index.js
 * @Author: maggot-code
 * @Date: 2022-10-13 15:43:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 17:37:39
 * @Description:
 */
import { defineDescribe } from '../../hook/defineDescribe';

const label = '输入框';
export default defineDescribe({
    label,
    componentName: 'mg-input',
    uiSchema: {
        label,
        placeholder: '请填写内容',
        col: 24,
    },
});
