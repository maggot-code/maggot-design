/*
 * @FilePath: \maggot-design\src\pages\design\hooks\matter\defineDescribe.js
 * @Author: maggot-code
 * @Date: 2022-10-19 10:01:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-19 14:34:06
 * @Description:
 */
import { toArrayEmpty } from '@/shared/transform';
import { mapObject } from '@/shared/utils';

function setupUISchema({ uiSchema }) {
    const [unusable, data] = toArrayEmpty(uiSchema);
    if (unusable) return {};

    return mapObject(data, (item) => {
        const [key, value] = item;
        return [key, value, item.length === 2];
    });
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

export function defineDescribe(props, molds) {
    const { namespace, mold } = props;
    const schema = Object.assign(
        {},
        {
            mold,
            componentName: namespace,
        },
        setupMold(molds[mold])
    );

    return Object.assign({}, props, { schema });
}

export default defineDescribe;
