/*
 * @FilePath: \maggot-design\src\pages\design\hooks\control\useAction.js
 * @Author: maggot-code
 * @Date: 2022-10-19 14:21:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-20 14:26:37
 * @Description:
 */
import { unref } from 'vue';
import { enhanceForm } from '../../shared/enhanceForm';

export function useAction(control, indexes, active) {
    const preview = enhanceForm(control.preview);

    function moldMatter(mold) {
        const { bindMold } = control.matter.store.findMatter(
            unref(active.componentName)
        );
        const { schema: moldSchema } = bindMold(mold);
        const schema = Object.assign({}, unref(active.template), moldSchema);

        preview.insert(schema);
    }
    function uiMatter(uiSchema) {
        preview.update(Object.assign({}, unref(active.template), { uiSchema }));
    }

    function createMatter() {
        const { schema } = control.matter.store.findMatter(
            unref(control.matter.select.value)
        );
        const [index] = preview.append(schema);
        indexes.setup(index);
        control.matter.container.toBottom();
    }

    function deleteMatter(schema) {
        preview.remove(schema);
        indexes.setup(0);
        control.matter.container.toTop();
    }

    return {
        moldMatter,
        uiMatter,
        createMatter,
        deleteMatter,
    };
}

export default useAction;
