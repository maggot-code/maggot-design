/*
 * @FilePath: \maggot-design\src\pages\design\hook\defineActive.js
 * @Author: maggot-code
 * @Date: 2022-10-14 10:39:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-17 13:22:29
 * @Description:
 */
import { unref, ref, computed } from 'vue';
import { isNil } from 'lodash';
import { isDescribe } from '../hook/defineDescribe';
import { matterHouse } from '../shared/warehouse';
import { defaultComponent } from '../matter';

export function defineActive(form) {
    const { cellSchema } = form.template;
    const index = ref(0);
    const target = computed(() => {
        const schema = unref(cellSchema).at(unref(index));

        if (isNil(schema) || !matterHouse.has(schema.componentName)) {
            return defaultComponent;
        }

        if (isDescribe(schema)) return schema;

        return Object.assign({}, matterHouse.get(schema.componentName), {
            schema,
        });
    });

    function setup(value) {
        if (unref(index) === value) return;

        index.value = value;
    }

    return {
        index,
        target,
        setup,
    };
}

export default defineActive;
