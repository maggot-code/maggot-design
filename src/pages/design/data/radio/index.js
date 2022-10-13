/*
 * @FilePath: \maggot-design\src\pages\design\data\radio\index.js
 * @Author: maggot-code
 * @Date: 2022-10-13 14:04:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 14:49:38
 * @Description:
 */
import { v4 as uuid } from 'uuid';
import { setupDescribe } from '../../shared/describe';

function toSchema() {
    return {
        dataSchema: {
            enums: [
                {
                    code: '01',
                    description: '男',
                    pptr: 'FM',
                },
                {
                    code: '02',
                    description: '女',
                    pptr: 'FM',
                },
            ],
            lib: {
                codeid: 'FM',
            },
            api: '/SystemManage/SM_CodeItem/GetCode.do',
            valueField: 'code',
            textField: 'description',
        },
        field: uuid(),
        uiSchema: {
            col: 12,
            clearable: true,
            label: '性别',
        },
        ruleSchema: [
            {
                message: '性别为必填，请填写。',
                required: true,
            },
        ],
        mold: 'radio',
        componentName: 'mg-radio',
        leaderTag: {},
        value: '01',
        workerTag: [],
    };
}
export default setupDescribe({
    label: '单选框',
    toSchema,
});
