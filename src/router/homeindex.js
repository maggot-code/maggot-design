/*
 * @FilePath: /maggot-design/src/router/homeindex.js
 * @Author: maggot-code
 * @Date: 2022-07-25 16:44:24
 * @LastEditTime: 2022-10-12 23:43:44
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
];
