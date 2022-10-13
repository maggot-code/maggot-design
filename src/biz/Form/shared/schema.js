/*
 * @FilePath: \maggot-design\src\biz\Form\shared\schema.js
 * @Author: maggot-code
 * @Date: 2022-10-13 10:13:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 10:13:50
 * @Description:
 */
import { unref, shallowRef, computed } from 'vue';

export function SchemaFactory(parts) {
    const data = shallowRef(parts ?? {});
    const len = computed(() => {
        return Array.isArray(unref(data))
            ? unref(data).length
            : Object.keys(unref(data)).length;
    });
    const usable = computed(() => unref(len) > 0);
    const unusable = computed(() => !unref(usable));
    function setup(value) {
        data.value = value ?? {};
    }

    return {
        data,
        len,
        usable,
        unusable,
        setup,
    };
}

export default SchemaFactory;
