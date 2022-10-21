<!--
 * @FilePath: \maggot-design\src\pages\design\layout\DesignPreview.vue
 * @Author: maggot-code
 * @Date: 2022-10-19 09:40:56
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-21 17:23:45
 * @Description: 
-->
<script setup>
import PreviewForm from "../component/PreviewForm.vue";
import PreviewJson from "../component/PreviewJson.vue";

import { unref, ref, computed } from "vue";

const options = {
    form: {
        label: "表单预览",
        value: "form",
        component: PreviewForm
    },
    json: {
        label: "结构预览",
        value: "json",
        component: PreviewJson
    }
};

const state = ref(options.form.value);
const componentRender = computed(() => options[unref(state)].component);
function toType(key) {
    return unref(state) === key ? "primary" : "default";
}
function handlerState(key) {
    if (unref(state) === key) return;

    state.value = key;
}
</script>

<template>
    <div class="design-preview">
        <div class="design-preview-tabs">
            <el-button-group class="design-preview-tabs-control">
                <el-button v-for="(item,key) in options" :key="key" :type="toType(key)" @click="handlerState(key)"
                    size="mini">
                    {{item.label}}
                </el-button>
            </el-button-group>
        </div>

        <div class="design-preview-container">
            <!-- <PreviewForm></PreviewForm> -->
            <!-- <PreviewJson></PreviewJson> -->
            <component :is="componentRender"></component>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.design-preview {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &-tabs {
        display: flex;
        flex-direction: row-reverse;
        width: 100%;
        height: 48px;
        padding: 0 6px;
        overflow: hidden;
        box-sizing: border-box;

        &-control {
            align-self: center;
        }
    }

    &-container {
        width: 100%;
        height: calc(100% - 48px);
        overflow-x: hidden;
        overflow-y: auto;
        padding: 0 6px 6px 6px;
        box-sizing: border-box;
    }
}
</style>
