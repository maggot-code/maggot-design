/*
 * @FilePath: \maggot-design\src\pages\design\store\matter\input.js
 * @Author: maggot-code
 * @Date: 2022-10-19 09:59:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-19 10:22:34
 * @Description:
 */
import { defineDescribe, setupMold } from '../../hooks/matter';

const MoldText = setupMold({
    mold: 'text',
    uiSchema: [
        ['col'],
        ['tips'],
        ['prepend'],
        ['append'],
        ['label', '文本输入框'],
        ['placeholder', '请输入文本内容'],
        ['readonly', false],
        ['disabled', false],
        ['clearable', false],
        ['autofocus', false],
    ],
});

export default defineDescribe({
    namespace: 'mg-input',
    label: '输入框',
    mold: {
        [MoldText.mold]: MoldText,
    },
});
