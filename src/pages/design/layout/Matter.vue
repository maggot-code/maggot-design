<!--
 * @FilePath: \maggot-design\src\pages\design\layout\Matter.vue
 * @Author: maggot-code
 * @Date: 2022-10-13 09:48:50
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 14:42:39
 * @Description: 
-->
<script setup>
import { unref } from "vue";
import { useStore } from "../hook/useStore";
import { useMatter } from "../hook/useMatter";

const { store } = useStore();
const { select } = useMatter();

function setupStore() {
    const [target, usable] = unref(select.element);
    if (!usable) return;

    store.set(target);
}
</script>

<template>
    <div class="design-matter">
        <el-select v-model="select.value.value" placeholder="请选择">
            <el-option v-for="item in select.options" :key="item.id" :label="item.label" :value="item.id">
            </el-option>
        </el-select>
        <el-button @click="setupStore">增加</el-button>

        <template v-for="(key) in store.keys()">
            <p :key="key">{{store.get(key).label}}</p>
            <el-button @click="store.del(key)">删除</el-button>
        </template>
    </div>
</template>

<style scoped lang='scss'>

</style>
