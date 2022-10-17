/*
 * @FilePath: \maggot-design\src\pages\design\shared\warehouse.js
 * @Author: maggot-code
 * @Date: 2022-10-13 15:44:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-17 10:35:39
 * @Description:
 */
// import { v4 as uuid } from 'uuid';
import Component from '../component';

export const matterHouse = new Map();

export function releaseMatter() {
    matterHouse.clear();
}

export function setupMatter(matter) {
    const { schema } = matter;

    matterHouse.set(schema.componentName, matter);
}

Component.forEach(setupMatter);
export default matterHouse;
