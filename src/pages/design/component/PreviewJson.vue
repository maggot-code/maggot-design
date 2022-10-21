<!--
 * @FilePath: \maggot-design\src\pages\design\component\PreviewJson.vue
 * @Author: maggot-code
 * @Date: 2022-10-21 16:30:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-21 16:35:19
 * @Description: 
-->
<script setup>
import JsonView from "@/component/json-view/index.vue";

import { useControl } from "../hooks/control";

const control = useControl();
const { cellSchema } = control.preview.template
</script>

<template>
    <JsonView class="design-preview-json" :data="cellSchema" :closed="false" :isLast="false" :fontSize="16" :deep="12"
        theme="vs-code">
    </JsonView>
</template>

<style scoped lang='scss'>
.design-preview-json {
    width: 100%;
    height: auto;
    min-height: 100%;
}
</style>
