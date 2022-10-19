<!--
 * @FilePath: \maggot-design\src\pages\design\layout\DesignMatter.vue
 * @Author: maggot-code
 * @Date: 2022-10-19 09:40:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-19 13:17:49
 * @Description: 
-->
<script setup>
import { useControl } from "../hooks/control";

const control = useControl();
const { value: selectValue } = control.matter.select;
const { cellSchema } = control.preview.schema;
</script>

<template>
    <div class="design-matter">
        <div class="design-matter-select">
            <el-select size="mini" :value="selectValue" @change="control.matter.select.setup">
                <el-option v-for="item in control.matter.select.options" :key="item.value" :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </div>

        <div class="design-matter-card">
            <template v-for="(item) in cellSchema">
                <div class="design-matter-card-item" :key="item.field">
                    <p>{{item.uiSchema.label}}</p>
                    <el-button size="mini">删除</el-button>
                </div>
            </template>
        </div>
    </div>
</template>

<style scoped lang='scss'>

</style>
