/*
 * @FilePath: \maggot-design\src\pages\design\shared\warehouse.js
 * @Author: maggot-code
 * @Date: 2022-10-13 15:44:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-17 13:20:21
 * @Description:
 */
// import { v4 as uuid } from 'uuid';
import Matter from '../matter';

export const matterHouse = new Map();

export function releaseMatter() {
    matterHouse.clear();
}

export function setupMatter(matter) {
    const { schema } = matter;

    matterHouse.set(schema.componentName, matter);
}

Matter.forEach(setupMatter);
export default matterHouse;
