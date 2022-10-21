/*
 * @FilePath: \maggot-design\src\pages\design\store\matter\upload.js
 * @Author: maggot-code
 * @Date: 2022-10-21 14:26:56
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-21 14:33:20
 * @Description:
 */
import { defineDescribe } from '../../hooks/matter/defineDescribe';
import { defineStruct } from '../../shared/defineStruct';

const uiSchemaStruct = defineStruct([
    'limit',
    'size',
    'download',
    'percentage',
    'multiple',
    'total',
    'current',
    'speed',
]);

const MoldDefault = {
    label: '上传框',
    mold: 'default',
    uiSchema: uiSchemaStruct.setup([
        ['col'],
        ['label', '上传框'],
        ['tips'],
        ['multiple', true],
        ['limit', 0],
        ['size', -1],
        ['download', false],
        ['percentage', true],
        ['total', true],
        ['current', true],
        ['speed', true],
    ]),
};

export default defineDescribe(
    {
        namespace: 'mg-upload',
        label: '上传框',
        mold: MoldDefault.mold,
    },
    {
        [MoldDefault.mold]: MoldDefault,
    }
);
