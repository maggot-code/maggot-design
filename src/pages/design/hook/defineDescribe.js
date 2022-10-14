/*
 * @FilePath: \maggot-design\src\pages\design\hook\defineDescribe.js
 * @Author: maggot-code
 * @Date: 2022-10-13 16:06:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-14 17:37:02
 * @Description:
 */
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

export function defineDescribe(label, config, mold) {
    const setterMold = map(mold, setupMold);

    function bindMold(value) {
        return mold[value] ?? config;
    }

    return Object.assign({}, config ?? {}, { label, setterMold, bindMold });
}

export default defineDescribe;
