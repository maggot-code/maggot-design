/*
 * @FilePath: \maggot-design\src\pages\design\store\matter\input.js
 * @Author: maggot-code
 * @Date: 2022-10-19 09:59:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-21 13:33:04
 * @Description:
 */
import { defineDescribe } from '../../hooks/matter/defineDescribe';
import { defineStruct } from '../../shared/defineStruct';

const uiSchemaStruct = defineStruct([
    'placeholder',
    'prepend',
    'append',
    'prefixIcon',
    'suffixIcon',
    'resize',
    'step',
    'precision',
    'rows',
    'maxlength',
    'minlength',
    'minus',
    'showWordLimit',
    'clearable',
    'controls',
    'stepStrictly',
    'showPassword',
    'readonly',
    'disabled',
    'autofocus',
    'max',
    'min',
]);

const MoldText = {
    label: '文本输入框',
    mold: 'text',
    uiSchema: uiSchemaStruct.setup([
        ['col'],
        ['label', '文本输入框'],
        ['tips'],
        ['placeholder', '请输入文本内容'],
        ['prefixIcon', 'el-icon-edit'],
        ['suffixIcon'],
        ['prepend'],
        ['append'],
        ['readonly', false],
        ['disabled', false],
        ['clearable', true],
        ['autofocus', false],
    ]),
};

const MoldTextarea = {
    label: '内容输入框',
    mold: 'textarea',
    uiSchema: uiSchemaStruct.setup([
        ['col'],
        ['label', '内容输入框'],
        ['tips'],
        ['placeholder', '请输入文本内容'],
        ['maxlength', 200],
        ['minlength', 0],
        ['rows', 3],
        ['resize'],
        ['readonly', false],
        ['disabled', false],
        ['clearable', true],
        ['autofocus', false],
        ['showWordLimit', true],
    ]),
};

const MoldPassword = {
    label: '密码输入框',
    mold: 'password',
    uiSchema: uiSchemaStruct.setup([
        ['col'],
        ['label', '密码输入框'],
        ['tips'],
        ['placeholder', '请输入密码'],
        ['readonly', false],
        ['disabled', false],
        ['clearable', true],
        ['autofocus', false],
        ['showPassword', true],
    ]),
};

const MoldNumber = {
    label: '数字输入框',
    mold: 'number',
    uiSchema: uiSchemaStruct.setup([
        ['col'],
        ['label', '数字输入框'],
        ['tips'],
        ['readonly', false],
        ['disabled', false],
        ['controls', true],
        ['step', 1],
        ['stepStrictly', false],
        ['minus'],
        // ['min'],
        // ['max'],
    ]),
};

const MoldInteger = {
    label: '整数输入框',
    mold: 'integer',
    uiSchema: uiSchemaStruct.setup([
        ['col'],
        ['label', '整数输入框'],
        ['tips'],
        ['readonly', false],
        ['disabled', false],
        ['controls', true],
        ['step', 1],
        ['stepStrictly', true],
        ['minus'],
    ]),
};

// const MoldFloat = {
//     label: '浮点数输入框',
//     mold: 'float',
//     uiSchema: uiSchemaStruct.setup([
//         ['col'],
//         ['label', '浮点数输入框'],
//         ['tips'],
//         ['readonly', false],
//         ['disabled', false],
//         ['controls', true],
//         ['step', 0.01],
//         ['stepStrictly', true],
//         ['minus'],
//         ['precision', 2],
//     ]),
// };

export default defineDescribe(
    {
        namespace: 'mg-input',
        label: '输入框',
        mold: MoldText.mold,
    },
    {
        [MoldText.mold]: MoldText,
        [MoldTextarea.mold]: MoldTextarea,
        [MoldPassword.mold]: MoldPassword,
        [MoldNumber.mold]: MoldNumber,
        [MoldInteger.mold]: MoldInteger,
        // [MoldFloat.mold]: MoldFloat,
    }
);
