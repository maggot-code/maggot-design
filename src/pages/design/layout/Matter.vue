<!--
 * @FilePath: \maggot-design\src\pages\design\layout\Matter.vue
 * @Author: maggot-code
 * @Date: 2022-10-13 09:48:50
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 13:56:22
 * @Description: 
-->
<script setup>
import { useStore } from "../hook/useStore";
import { useMatter } from "../hook/useMatter";

import { v4 as uuid } from "uuid";

useMatter();
const { store } = useStore();

function add() {
    const key = uuid();
    const value = Date.now();
    store.set(key, value);
}
</script>

<template>
    <div class="design-matter">
        <h1>物料</h1>
        <el-button @click="add">增加</el-button>

        <div v-for="(key) in store.keys()">
            <span>{{store.get(key)}}</span>
            <el-button size="mini" @click="store.del(key)">删除</el-button>
        </div>
    </div>
</template>

<style scoped lang='scss'>

</style>
