/*
 * @FilePath: \maggot-design\src\pages\design\hook\useStore.js
 * @Author: maggot-code
 * @Date: 2022-10-13 10:44:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 11:37:09
 * @Description:
 */
import { inject } from 'vue';
import { StoreSymbolName } from '../shared/context';
export function useStore() {
    const store = inject(StoreSymbolName);

    return { store };
}

export default useStore;
