/*
 * @FilePath: \maggot-design\src\pages\design\hooks\control\defineControl.js
 * @Author: maggot-code
 * @Date: 2022-10-19 09:54:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-19 14:46:35
 * @Description:
 */
import { useIndexes } from './useIndexes';
import { useActive } from './useActive';
import { useAction } from './useAction';

export function defineControl(props) {
    const indexes = useIndexes(props);
    const active = useActive(props, indexes);
    const action = useAction(props, indexes);

    const bind = { indexes, active, action };

    return Object.assign({}, props, bind);
}

export default defineControl;
