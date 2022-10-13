/*
 * @FilePath: \maggot-design\src\router\homeindex.js
 * @Author: maggot-code
 * @Date: 2022-07-25 16:44:24
 * @LastEditTime: 2022-10-13 09:31:00
 * @Description: webpackChunkName: "HomeIndexPage"
 */
export default [
    {
        path: '/home',
        name: 'HomeIndexPage',
        meta: {},
        component: () =>
            import(
                /* webpackChunkName: "HomeIndexPage" */ '@/pages/homeindex/homeindex.vue'
            ),
    },
    {
        path: '/design',
        name: 'DesignPage',
        meta: {},
        component: () =>
            import(
                /* webpackChunkName: "HomeIndexPage" */ '@/pages/design/design.vue'
            ),
    },
];
