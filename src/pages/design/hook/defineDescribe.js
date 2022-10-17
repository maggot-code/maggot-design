/*
 * @FilePath: \maggot-design\src\pages\design\hook\defineDescribe.js
 * @Author: maggot-code
 * @Date: 2022-10-13 16:06:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-17 11:03:00
 * @Description:
 */
const Describe_Kind = '__describe__';

function map(target, func) {
    const data = [];

    for (const key in target) {
        data.push(func(target[key], key, target));
    }

    return data;
}

function setupMold({ mold, uiSchema }) {
    const { label } = uiSchema;

    return { label, value: mold };
}

export function isDescribe(target) {
    return target?.kind && target.kind === Describe_Kind;
}

export function defineDescribe(label, schema, mold) {
    const setterMold = map(mold, setupMold);

    function bindMold(value) {
        return mold[value] ?? schema;
    }

    return {
        kind: Describe_Kind,
        schema,
        label,
        setterMold,
        bindMold,
    };
}

export default defineDescribe;
