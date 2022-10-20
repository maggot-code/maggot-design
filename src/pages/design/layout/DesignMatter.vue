<!--
 * @FilePath: \maggot-design\src\pages\design\layout\DesignMatter.vue
 * @Author: maggot-code
 * @Date: 2022-10-19 09:40:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-20 16:35:52
 * @Description: 
-->
<script setup>
import { useControl } from "../hooks/control";

const control = useControl();

const { refs } = control.matter.container;
const { value: selectValue } = control.matter.select;
const { cellSchema } = control.preview.schema;

const className = ["design-matter-card-index"];
const setupClassName = control.indexes.toIndex(className, []);
const setupTagColor = control.indexes.toIndex("#409EFF", "#909399");
</script>

<template>
    <div class="design-matter">
        <div class="design-matter-select">
            <el-select size="mini" :value="selectValue" @change="control.matter.select.setup">
                <el-option v-for="item in control.matter.select.options" :key="item.value" :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-button type="primary" plain size="mini" @click="control.action.createMatter">创建</el-button>
        </div>

        <div class="design-matter-card" ref="refs">
            <template v-for="(item,index) in cellSchema">
                <div class="design-matter-card-item" :class="setupClassName(index)" :key="item.field"
                    @click="control.indexes.setup(index)">
                    <el-tag type="info" :color="setupTagColor(index)" size="small" effect="dark">
                        {{item.uiSchema.label}}
                    </el-tag>
                    <el-button type="danger" size="mini" @click.stop="control.action.deleteMatter(item,index)">
                        删除
                    </el-button>
                </div>
            </template>
        </div>
    </div>
</template>

<style scoped lang='scss'>
$borderColor: #E6A23C;

.design-matter {
    width: 100%;
    height: 100%;
    overflow: hidden;

    &-select {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 48px;
        padding: 0 18px 0 8px;
        overflow: hidden;
        box-sizing: border-box;
    }

    &-card {
        width: 100%;
        height: calc(100% - 52px);
        padding: 0 6px;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;

        &-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 36px;
            padding: 3px 6px;
            border: 1px dashed rgba($color: $borderColor, $alpha: 0.2);
            border-radius: 6px;
            box-sizing: border-box;
            transition: all 0.2s;
            background-color: rgba($color: #eee, $alpha: 0.2);
            cursor: pointer;

            &:hover {
                border-color: rgba($color: $borderColor, $alpha: 0.5);
                background-color: rgba($color: #eee, $alpha: 0.6);
                box-shadow: 0 2px 4px rgba($color: #000, $alpha: 0.12), 0 0 6px rgba($color: #000, $alpha: 0.04);
            }

            &+& {
                margin-top: 6px;
            }
        }

        &-index {
            border-color: rgba($color: $borderColor, $alpha: 1.0);

            &:hover {
                border-color: rgba($color: $borderColor, $alpha: 1.0);
                background-color: rgba($color: #eee, $alpha: 0.2);
            }
        }
    }
}
</style>
