/*
 * @FilePath: \maggot-design\src\pages\design\store\matter\input.js
 * @Author: maggot-code
 * @Date: 2022-10-19 09:59:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-21 11:33:30
 * @Description:
 */
import { defineDescribe } from '../../hooks/matter/defineDescribe';
import { defineStruct } from '../../shared/defineStruct';

const uiSchemaStruct = defineStruct([]);

const MoldText = {
    label: '文本输入框',
    mold: 'text',
    uiSchema: uiSchemaStruct.setup([]),
};

export default defineDescribe(
    {
        namespace: 'mg-input',
        label: '输入框',
        mold: MoldText.mold,
    },
    {
        [MoldText.mold]: MoldText,
    }
);
