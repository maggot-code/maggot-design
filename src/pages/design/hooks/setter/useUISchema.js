/*
 * @FilePath: \maggot-design\src\pages\design\hooks\setter\useUISchema.js
 * @Author: maggot-code
 * @Date: 2022-10-20 09:32:40
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-20 14:08:36
 * @Description:
 */
import { watchEffect, unref, computed } from 'vue';
import { isStringEmpty } from '@/shared/transform';
import { mapObject, mapArray } from '@/shared/utils';
import UISetter from '../../store/setter/ui';

function toDatasource(item) {
    return [item.uiSchema];
}

// function toMerge() {}

export function useUISchema(control) {
    const { findMatter } = control.matter.store;
    const { template, componentName, mold: activeMold } = control.active;

    const dataSource = computed(() => {
        return mapObject(
            findMatter(unref(componentName)).bindMold(unref(activeMold)),
            toDatasource
        );
    });
    function toDrive(item) {
        const [key, structValue] = item;
        const activeValue = unref(template).uiSchema[key];
        const setterValue = UISetter[key]?.value;

        const value = activeValue ?? structValue ?? setterValue;
        const cell = Object.assign({}, UISetter[key], { value });
        return [cell];
    }
    async function handlerMonitor() {
        const [_, data] = await control.basic.setupData(false);
        const schema = mapObject(data, (value) => {
            return [value, !isStringEmpty(value)];
        });
        control.action.uiMatter(schema);
    }

    watchEffect(() => {
        if (unref(control.active.unusable)) return;

        const { struct } = unref(dataSource);
        control.basic.schema.cell.setup(mapArray(struct, toDrive));
    });

    return { handlerMonitor };
}

export default useUISchema;
