<!--
 * @FilePath: \maggot-design\src\pages\design\layout\Matter.vue
 * @Author: maggot-code
 * @Date: 2022-10-13 09:48:50
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 17:51:12
 * @Description: 
-->
<script setup>
import { inject } from "vue";
import { useMatterSelect } from "../hook/useMatterSelect";
import { useMatter } from "../hook/useMatter";
import { FormSymbolKeyword } from "../shared/context";

const form = inject(FormSymbolKeyword);
const select = useMatterSelect();
const matter = useMatter(form, select);

const { cellSchema } = form.template;
</script>

<template>
    <main class="design-matter">
        <section class="design-matter-control">
            <el-select size="mini" :value="select.value" @change="select.setupValue">
                <el-option v-for="item in select.options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-button size="mini" @click="matter.append">创建</el-button>
        </section>

        <section class="design-matter-card">
            <template v-for="(item) in cellSchema">
                <div :key="item.field" style="display: flex;justify-content: space-between; margin-bottom: 12px;">
                    <p>{{item.uiSchema.label}}</p>
                    <el-button size="mini" @click="matter.remove(item)">删除</el-button>
                </div>
            </template>
        </section>
    </main>
</template>

<style scoped lang='scss'>
.design-matter {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &-control {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 24px;
    }

    &-card {
        flex: 1;
        width: 100%;
        height: auto;
        overflow-x: hidden;
        overflow-y: auto;
        padding-right: 6px;
    }
}
</style>
