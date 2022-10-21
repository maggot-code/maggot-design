/*
 * @FilePath: \maggot-design\src\pages\design\store\matter\unknow.js
 * @Author: maggot-code
 * @Date: 2022-10-20 13:15:06
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-21 14:52:05
 * @Description:
 */
import { defineDescribe } from '../../hooks/matter/defineDescribe';
import { defineStruct } from '../../shared/defineStruct';
import { UnknowNamespace } from '../../shared/context';

const uiSchemaStruct = defineStruct([]);

const MoldDefault = {
    label: '未知控件',
    mold: 'default',
    uiSchema: uiSchemaStruct.setup([]),
};

export default defineDescribe(
    {
        namespace: UnknowNamespace,
        label: '未知控件',
        mold: MoldDefault.mold,
    },
    {
        [MoldDefault.mold]: MoldDefault,
    }
);
