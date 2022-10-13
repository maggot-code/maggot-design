/*
 * @FilePath: \maggot-design\src\pages\design\store\warehouse.js
 * @Author: maggot-code
 * @Date: 2022-10-13 15:44:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 17:01:21
 * @Description:
 */
// import { v4 as uuid } from 'uuid';
import Component from '../component';

export const matterHouse = new Map();

export function releaseMatter() {
    matterHouse.clear();
}

export function setupMatter(component) {
    const { keyword } = component;

    matterHouse.set(keyword, component);
}

Component.forEach(setupMatter);
export default matterHouse;
