<!--
 * @FilePath: \maggot-design\src\pages\design\component\DataField.vue
 * @Author: maggot-code
 * @Date: 2022-10-19 15:25:06
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-19 18:39:11
 * @Description: 
-->
<script setup>
import { ref, unref } from "vue";
import { useControl } from "../hooks/control";

const usableBind = ref(true);
const control = useControl();
const { template } = control.active;
function setupBind() {
    usableBind.value = !unref(usableBind);
}
</script>

<template>
    <div class="design-setter-basic-field">
        <template v-if="usableBind">
            <el-select class="design-setter-basic-field-item" :value="template.field" placeholder="请选择绑定字段"></el-select>
        </template>
        <template v-else>
            <el-input class="design-setter-basic-field-item" :value="template.field" placeholder="请输入绑定字段">
            </el-input>
        </template>

        <el-tooltip effect="dark" content="切换绑定方式" placement="top">
            <el-button type="primary" icon="el-icon-refresh" circle @click="setupBind"></el-button>
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
