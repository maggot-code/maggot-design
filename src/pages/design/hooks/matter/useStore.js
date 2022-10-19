/*
 * @FilePath: \maggot-design\src\pages\design\hooks\matter\useStore.js
 * @Author: maggot-code
 * @Date: 2022-10-19 10:09:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-19 14:35:30
 * @Description:
 */
import matter from '../../store/matter';

export function useStore() {
    function findMatter(namespace) {
        return matter.find((item) => item.namespace === namespace);
    }
    return {
        matter,
        findMatter,
    };
}

export default useStore;
