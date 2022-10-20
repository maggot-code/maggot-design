/*
 * @FilePath: \maggot-design\src\pages\design\hooks\matter\useStore.js
 * @Author: maggot-code
 * @Date: 2022-10-19 10:09:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-20 13:25:29
 * @Description:
 */
import { toUsabled } from '@/shared/transform';
import matter from '../../store/matter';
import { UnknowNamespace } from '../../shared/context';

export function useStore() {
    function findMatter(namespace) {
        const target = matter.find((item) => item.namespace === namespace);
        const spare = matter.find((item) => item.namespace === UnknowNamespace);

        return toUsabled(target, spare, target);
    }
    return {
        matter,
        findMatter,
    };
}

export default useStore;
