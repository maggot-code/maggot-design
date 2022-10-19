<!--
 * @FilePath: \maggot-design\src\pages\design\layout\DesignMatter.vue
 * @Author: maggot-code
 * @Date: 2022-10-19 09:40:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-19 14:52:26
 * @Description: 
-->
<script setup>
import { useControl } from "../hooks/control";

const control = useControl();

const { value: selectValue } = control.matter.select;
const { cellSchema } = control.preview.schema;
const className = ["design-matter-card-index"];
const setupClassName = control.indexes.toClassName(className);
</script>

<template>
    <div class="design-matter">
        <div class="design-matter-select">
            <el-select size="mini" :value="selectValue" @change="control.matter.select.setup">
                <el-option v-for="item in control.matter.select.options" :key="item.value" :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-button size="mini" @click="control.action.createMatter">创建</el-button>
        </div>

        <div class="design-matter-card">
            <template v-for="(item,index) in cellSchema">
                <div class="design-matter-card-item" :class="setupClassName(index)" :key="item.field"
                    @click="control.indexes.setup(index)">
                    <p>{{item.uiSchema.label}}</p>
                    <el-button size="mini" @click.stop="control.action.deleteMatter(item,index)">删除</el-button>
                </div>
            </template>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.design-matter {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &-select {
        display: flex;
        width: 100%;
        height: 48px;
    }

    &-card {
        align-self: center;
        width: 100%;
        height: calc(100% - 60px);
        overflow-x: hidden;
        overflow-y: auto;

        &-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 36px;
            padding: 0 12px;
            border: 1px dashed transparent;
            border-radius: 4px;
            background-color: #f5f7fa;
            transition: all .3s;
            box-sizing: border-box;
            cursor: pointer;

            &:hover {
                background-color: pink;
                border-color: #666;
            }

            &+& {
                margin-top: 6px;
            }
        }

        &-index {
            background-color: red;
            border-color: #333;
        }
    }
}
</style>
