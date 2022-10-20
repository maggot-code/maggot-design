/*
 * @FilePath: \maggot-design\src\pages\design\shared\defineStruct.js
 * @Author: maggot-code
 * @Date: 2022-10-20 11:03:14
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-20 11:28:13
 * @Description:
 */
function setupIndex(index, defIndex) {
    return index <= -1 ? defIndex : index;
}

export function defineStruct(layout) {
    function setup(struct) {
        return struct.sort((prev, next) => {
            const prevIndex = setupIndex(
                layout.indexOf(prev[0]),
                struct.length
            );
            const nextIndex = setupIndex(
                layout.indexOf(next[0]),
                struct.length
            );
            return prevIndex - nextIndex;
        });
    }

    return { setup };
}

export default defineStruct;
