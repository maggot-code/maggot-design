<!--
 * @FilePath: \maggot-design\src\pages\design\layout\Matter.vue
 * @Author: maggot-code
 * @Date: 2022-10-13 09:48:50
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-17 11:30:30
 * @Description: 
-->
<script setup>
import { useForm } from "../hook/useForm";
import { useMatterSelect } from "../hook/useMatterSelect";
import { useMatter } from "../hook/useMatter";
import { useActive } from "../hook/useActive";

const form = useForm();
const active = useActive();
const select = useMatterSelect();
const matter = useMatter(form, select, active);

const { cellSchema } = form.template;
const { matterRefs } = matter;
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

        <section class="design-matter-card" ref="matterRefs">
            <template v-for="(item,index) in cellSchema">
                <div class="design-matter-card-item" :class="matter.setupClass(index)" :key="item.field"
                    @click="matter.click(index,item)">
                    <p>{{item.uiSchema.label}}</p>
                    <el-button size="mini" @click.stop="matter.remove(item)">删除</el-button>
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

        &-active {
            background-color: red;
            border-color: #333;
        }
    }
}
</style>
