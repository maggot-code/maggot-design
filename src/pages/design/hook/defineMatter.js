/*
 * @FilePath: \maggot-design\src\pages\design\hook\defineMatter.js
 * @Author: maggot-code
 * @Date: 2022-10-13 09:58:08
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 14:35:59
 * @Description:
 */
import { provide } from 'vue';
import { MatterSymbolName } from '../shared/context';
import MatterData from '../data';

const MatterHouse = new WeakMap();
const MatterSelect = MatterData.map((item) => {
    const bind = { id: item.id, label: item.label };

    MatterHouse.set(bind, item);

    return bind;
});

export function defineMatter() {
    function get(bind) {
        return [MatterHouse.get(bind), MatterHouse.has(bind)];
    }

    const props = {
        select: MatterSelect,
        get,
    };
    provide(MatterSymbolName, props);
    return props;
}

export default defineMatter;
