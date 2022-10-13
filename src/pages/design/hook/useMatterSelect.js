/*
 * @FilePath: \maggot-design\src\pages\design\hook\useMatterSelect.js
 * @Author: maggot-code
 * @Date: 2022-10-13 16:15:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 16:56:49
 * @Description:
 */
import { ref } from 'vue';
import { isNil } from 'lodash';
import { matterHouse } from '../store/Warehouse';

const options = [];

if (options.length <= 0) {
    matterHouse.forEach((item) => {
        const { label, keyword: value } = item;
        options.push({ label, value });
    });
}

export function useMatterSelect() {
    const [first] = options;
    const value = ref(isNil(first) ? '' : first.value);

    function setupValue(val) {
        value.value = val;
    }

    return {
        value,
        options,
        setupValue,
    };
}

export default useMatterSelect;
