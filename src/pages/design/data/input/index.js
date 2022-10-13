/*
 * @FilePath: \maggot-design\src\pages\design\data\input\index.js
 * @Author: maggot-code
 * @Date: 2022-10-13 14:00:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 14:49:24
 * @Description:
 */
import { v4 as uuid } from 'uuid';
import { setupDescribe } from '../../shared/describe';

function toSchema() {
    return {
        field: uuid(),
        uiSchema: {
            col: 12,
            clearable: true,
            label: '账号',
        },
        ruleSchema: [
            {
                message: '账号为必填，请填写。',
                required: true,
            },
            {
                max: 50,
                message: '账号长度必须小于50字节，请修改。',
            },
        ],
        mold: 'text',
        componentName: 'mg-input',
        value: '',
    };
}
export default setupDescribe({
    label: '输入框',
    toSchema,
});
