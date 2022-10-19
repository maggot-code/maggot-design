/*
 * @FilePath: \maggot-design\src\pages\design\hooks\matter\defineDescribe.js
 * @Author: maggot-code
 * @Date: 2022-10-19 10:01:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-19 10:35:39
 * @Description:
 */
import UiSetter from '../../store/setter/ui';

function toArrayEmpty(target) {
    const unusable = !Array.isArray(target);
    const value = unusable ? [] : target;
    return [unusable, value];
}

function setupUISchema({ uiSchema }) {
    const [unusable, schema] = toArrayEmpty(uiSchema);
    if (unusable) return {};

    const setter = {};
    schema.forEach((item) => {});
    console.log(UiSetter);

    // return Object.assign({}, UiSetter, setter);
    return setter;
}
function setupRuleSchema() {
    return [];
}
function setupDataSchema() {
    return {};
}
function setupLeader() {
    return {};
}
function setupWorker() {
    return [];
}

export function setupMold(schema) {
    return Object.assign({}, schema, {
        uiSchema: setupUISchema(schema),
        ruleSchema: setupRuleSchema(schema),
        dataSchema: setupDataSchema(schema),
        leaderTag: setupLeader(schema),
        workerTag: setupWorker(schema),
    });
}

export function defineDescribe(props) {
    console.log(props);

    return {};
}

export default defineDescribe;
