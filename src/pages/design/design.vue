<!--
 * @FilePath: \maggot-design\src\pages\design\design.vue
 * @Author: maggot-code
 * @Date: 2022-10-13 09:30:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-19 09:15:22
 * @Description: 
-->
<script setup></script>

<template>
    <main class="design">
        <div class="design-layout design-head">
            <section class="design-head-handler">操作</section>
        </div>
        <div class="design-layout design-body">
            <section class="design-body-container design-body-matter"></section>
            <section class="design-body-container design-body-view"></section>
            <section class="design-body-container design-body-setter"></section>
        </div>
    </main>
</template>

<style scoped lang='scss'>
@import "./design.scss";
</style>
