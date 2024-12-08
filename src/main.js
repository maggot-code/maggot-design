/*
 * @FilePath: \maggot-design\src\main.js
 * @Author: maggot-code
 * @Date: 2022-10-12 23:40:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-24 18:06:25
 * @Description:
 */
import Vue from 'vue';
import MGform from 'maggot-form/lib/maggot-form.umd';
import { setupRouter } from '@/router';
import ElementUI from 'element-ui';

import App from '@/App.vue';

import 'normalize.css';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/style/index.scss';
import 'maggot-form/lib/maggot-form.css';

Vue.use(ElementUI);
Vue.use(MGform);

new Vue({
    render: (h) => h(App),
    router: setupRouter(),
}).$mount('#app');
