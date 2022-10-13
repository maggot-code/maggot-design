/*
 * @FilePath: \maggot-design\src\pages\design\hook\defineStore.js
 * @Author: maggot-code
 * @Date: 2022-10-13 10:44:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 14:39:51
 * @Description:
 */
import { provide, shallowRef } from 'vue';
import { isNil } from 'lodash';
import { v4 as uuid } from 'uuid';
import { StoreSymbolName } from '../shared/context';

export const Warehouse = new WeakMap();

function storeKey() {
    const value = uuid();
    return { value };
}
function storeEntity() {
    const id = storeKey();

    function getHouse() {
        if (!Warehouse.has(id)) Warehouse.set(id, shallowRef({}));

        return Warehouse.get(id);
    }
    function update(value) {
        getHouse().value = Object.assign({}, getHouse().value, value ?? {});
    }

    function keys() {
        return Reflect.ownKeys(getHouse().value);
    }
    function get(key) {
        return getHouse().value[key];
    }
    function set(value) {
        const key = storeKey();
        update({ [key.value]: value });
    }
    function del(key) {
        if (isNil(key)) {
            getHouse().value = {};
        } else {
            delete getHouse().value[key];
            update();
        }
    }
    function release() {
        getHouse().value = null;
        Warehouse['delete'](id);
    }

    return { id, keys, get, set, del, release };
}

export function defineStore() {
    const store = storeEntity();

    provide(StoreSymbolName, store);
    return {
        store,
    };
}

export default defineStore;
