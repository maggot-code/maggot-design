/*
 * @FilePath: \maggot-design\src\router\index.js
 * @Author: maggot-code
 * @Date: 2022-07-25 16:40:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 16:04:43
 * @Description:
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import { default as HomeIndexRoute } from './homeindex';

// 解决ncaught (in promise) NavigationDuplicated 问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) {
        return originalPush.call(this, location, onResolve, onReject);
    }
    return originalPush.call(this, location)['catch']((err) => err);
};
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
    if (onResolve || onReject) {
        return originalReplace.call(this, location, onResolve, onReject);
    }
    return originalReplace.call(this, location)['catch']((err) => err);
};

export function setupRouter() {
    Vue.use(VueRouter);

    return new VueRouter({
        routes: [
            {
                path: '/',
                redirect: '/design',
            },
            ...HomeIndexRoute,
        ],
    });
}

export default setupRouter;
