/*
 * @FilePath: \maggot-design\src\pages\design\hooks\control\useAction.js
 * @Author: maggot-code
 * @Date: 2022-10-19 14:21:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-19 15:12:08
 * @Description:
 */
import { unref } from 'vue';
import { enhanceForm } from './enhanceForm';

export function useAction(control, indexes) {
    const preview = enhanceForm(control.preview);

    function createMatter() {
        const { schema } = control.matter.store.findMatter(
            unref(control.matter.select.value)
        );
        const [index] = preview.append(schema);
        indexes.setup(index);
    }

    function deleteMatter(schema) {
        preview.remove(schema);
        indexes.setup(0);
    }

    return {
        createMatter,
        deleteMatter,
    };
}

export default useAction;
