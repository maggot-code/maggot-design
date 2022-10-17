/*
 * @FilePath: \maggot-design\src\pages\design\component\Radio\index.js
 * @Author: maggot-code
 * @Date: 2022-10-13 16:30:50
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 17:37:19
 * @Description:
 */
import { defineDescribe } from '../../hook/defineDescribe';

const label = '单选框';
export default defineDescribe({
    label,
    componentName: 'mg-radio',
    uiSchema: {
        label,
        placeholder: '请选择选项',
        col: 24,
    },
    dataSchema: {
        valueField: 'id',
        textField: 'text',
        enums: [
            {
                id: 1,
                text: '选项1',
            },
            {
                id: 2,
                text: '选项2',
            },
        ],
    },
});
