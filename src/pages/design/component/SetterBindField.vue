<!--
 * @FilePath: \maggot-design\src\pages\design\component\SetterBindField.vue
 * @Author: maggot-code
 * @Date: 2022-10-17 13:27:55
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-17 15:51:11
 * @Description: 
-->
<script setup>
import { unref, ref } from "vue";
import { useForm } from "../hook/useForm";
import { useActive } from "../hook/useActive";

const form = useForm();
const { field, notField } = useActive();
const usableBind = ref(true);

function switchBindState() {
    usableBind.value = !unref(usableBind);
}
function handlerField(value) {
    if (unref(notField)) return;

    form.setupCellField(field, value);
}

const fieldOptions = [];
</script>

<template>
    <div class="design-setter-basic-field">
        <template v-if="usableBind">
            <el-select class="design-setter-basic-field-item" :value="field" placeholder="请选择绑定字段"
                @change="handlerField">
                <el-option v-for="item in fieldOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </template>
        <template v-else>
            <el-input class="design-setter-basic-field-item" :value="field" placeholder="请输入绑定字段" @input="handlerField">
            </el-input>
        </template>

        <el-tooltip effect="dark" content="切换绑定方式" placement="top">
            <el-button type="primary" icon="el-icon-refresh" circle @click="switchBindState"></el-button>
        </el-tooltip>
    </div>
</template>

<style scoped lang='scss'>
.design-setter-basic-field {
    display: flex;
    justify-content: space-between;
    width: 100%;

    &-item {
        width: calc(100% - 48px);
    }
}
</style>
