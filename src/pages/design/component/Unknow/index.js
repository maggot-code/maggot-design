/*
 * @FilePath: \maggot-design\src\pages\design\component\Unknow\index.js
 * @Author: maggot-code
 * @Date: 2022-10-17 10:45:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-17 10:48:24
 * @Description:
 */
import { defineDescribe } from '../../hook/defineDescribe';

const MoldDefault = {
    mold: 'default',
    componentName: 'mg-unknow',
    value: '',
    uiSchema: {
        col: 24,
        label: '未知组件',
    },
    ruleSchema: [],
    dataSchema: {},
    leaderTag: {},
    workerTag: [],
};

export default defineDescribe('未知组件', MoldDefault, {});
