/*
 * @FilePath: \maggot-design\src\biz\Form\entity\Job.js
 * @Author: maggot-code
 * @Date: 2022-09-20 09:25:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 10:13:03
 * @Description:
 */
import { shallowRef } from 'vue';

function JobItem() {
    return {};
}

export function Job() {
    const data = shallowRef({});

    function setup() {
        const item = JobItem();

        return item;
    }

    return {
        data,
        setup,
    };
}

export default Job;
