/*
 * @FilePath: \maggot-design\src\pages\design\store\matter\input.js
 * @Author: maggot-code
 * @Date: 2022-10-19 09:59:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-19 17:11:46
 * @Description:
 */
import { defineDescribe } from '../../hooks/matter/defineDescribe';

const MoldText = {
    label: '文本输入框',
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
};

const MoldNumber = {
    label: '数字输入框',
    mold: 'number',
    uiSchema: [
        ['col'],
        ['tips'],
        ['prepend'],
        ['append'],
        ['placeholder'],
        ['label', '数字输入框'],
        ['controlsPosition', 'right'],
        ['step', 1],
        ['minus', false],
        ['controls', true],
        ['readonly', false],
        ['disabled', false],
        ['clearable', false],
        ['autofocus', false],
        ['stepStrictly', false],
    ],
};

export default defineDescribe(
    {
        namespace: 'mg-input',
        label: '输入框',
        mold: MoldText.mold,
    },
    {
        [MoldText.mold]: MoldText,
        [MoldNumber.mold]: MoldNumber,
    }
);
