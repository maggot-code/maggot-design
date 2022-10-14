/*
 * @FilePath: \maggot-design\src\pages\design\hook\useMatterSelect.js
 * @Author: maggot-code
 * @Date: 2022-10-13 16:15:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-14 17:31:42
 * @Description:
 */
import { ref } from 'vue';
import { isNil } from 'lodash';
import { matterHouse } from '../shared/warehouse';

const options = [];

if (options.length <= 0) {
    matterHouse.forEach((item) => {
        const { label, componentName: value } = item;
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
