import { unref, computed } from 'vue';
import { mapArray } from '@/shared/utils';

export function useMold(control) {
    const options = computed(() => {
        const { molds } = control.matter.store.findMatter(
            unref(control.active.template).componentName
        );

        return mapArray(molds, (item) => [
            { value: item.mold, label: item.label },
        ]);
    });

    function setup(mold) {
        control.action.moldMatter(mold);
    }

    return {
        options,
        setup,
    };
}

export default useMold;
