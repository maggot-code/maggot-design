/*
 * @FilePath: \maggot-design\src\pages\design\hooks\setter\defineSetter.js
 * @Author: maggot-code
 * @Date: 2022-10-19 17:39:08
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-20 13:53:04
 * @Description:
 */
import { unref, computed } from 'vue';
import { useMold } from './useMold';
import { useUISchema } from './useUISchema';
import { UnknowNamespace } from '../../shared/context';

export function defineSetter(control) {
    const mold = useMold(control);
    const ui = useUISchema(control, mold);
    const unusable = computed(() => {
        if (unref(control.active.unusable)) return false;

        const { namespace } = control.matter.store.findMatter(
            unref(control.active.componentName)
        );
        const state = namespace === UnknowNamespace;
        return unref(control.preview.schema.cell.usable) && state;
    });
    const usable = computed(() => !unref(unusable));

    return { control, mold, ui, unusable, usable };
}

export default defineSetter;
