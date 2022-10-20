/*
 * @FilePath: \maggot-design\src\pages\design\shared\defineStruct.js
 * @Author: maggot-code
 * @Date: 2022-10-20 11:03:14
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-20 17:52:01
 * @Description:
 */
const uiSharedSchema = ['col', 'label', 'tips'];

function setupIndex(index, defIndex) {
    return index <= -1 ? defIndex : index;
}

export function defineStruct(layout) {
    const data = Array.from(
        new Set(uiSharedSchema.concat(Array.isArray(layout) ? layout : []))
    );
    function setup(struct) {
        return struct.sort((prev, next) => {
            const prevIndex = setupIndex(data.indexOf(prev[0]), struct.length);
            const nextIndex = setupIndex(data.indexOf(next[0]), struct.length);
            return prevIndex - nextIndex;
        });
    }

    return { setup };
}

export default defineStruct;
