/*
 * @FilePath: \maggot-design\src\pages\design\shared\Warehouse.js
 * @Author: maggot-code
 * @Date: 2022-10-13 15:44:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-14 17:31:14
 * @Description:
 */
// import { v4 as uuid } from 'uuid';
import Component from '../component';

export const matterHouse = new Map();

export function releaseMatter() {
    matterHouse.clear();
}

export function setupMatter(component) {
    const { componentName } = component;

    matterHouse.set(componentName, component);
}

Component.forEach(setupMatter);
export default matterHouse;
