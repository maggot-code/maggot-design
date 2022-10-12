/*
 * @FilePath: /maggot-design/src/main.js
 * @Author: maggot-code
 * @Date: 2022-10-12 23:40:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 00:00:07
 * @Description:
 */
import Vue from 'vue';
import MGform from 'maggot-form';
import { setupRouter } from '@/router';
import { Loading } from 'element-ui';

import App from '@/App.vue';

import 'normalize.css';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/style/index.scss';

Vue.use(MGform);
Vue.use(Loading.directive);

new Vue({
    render: (h) => h(App),
    router: setupRouter(),
}).$mount('#app');
