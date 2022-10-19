/*
 * @FilePath: \maggot-design\src\pages\design\hook\useMatterSelect.js
 * @Author: maggot-code
 * @Date: 2022-10-13 16:15:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-17 10:40:45
 * @Description:
 */
import { ref } from 'vue';
import { isNil } from 'lodash';
import { matterHouse } from '../shared/warehouse';

const options = [];

if (options.length <= 0) {
    matterHouse.forEach((item) => {
        const { label, schema } = item;
        options.push({ label, value: schema.componentName });
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
