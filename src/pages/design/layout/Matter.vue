<!--
 * @FilePath: \maggot-design\src\pages\design\layout\Matter.vue
 * @Author: maggot-code
 * @Date: 2022-10-13 09:48:50
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 17:25:02
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
console.log(cellSchema);
</script>

<template>
    <div class="design-matter">
        <el-select :value="select.value" @change="select.setupValue">
            <el-option v-for="item in select.options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
        </el-select>
        <p>{{matter.element.value.keyword}}</p>
        <el-button @click="matter.append">创建</el-button>

        <ul>
            <template v-for="(item) in cellSchema">
                <li :key="item.field">{{item.uiSchema.label}}</li>
            </template>
        </ul>
    </div>
</template>

<style scoped lang='scss'>

</style>
