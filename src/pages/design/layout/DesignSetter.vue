<!--
 * @FilePath: \maggot-design\src\pages\design\layout\DesignSetter.vue
 * @Author: maggot-code
 * @Date: 2022-10-19 09:40:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-19 15:08:31
 * @Description: 
-->
<script setup>
import { useControl } from "../hooks/control";

const control = useControl();
const { usable } = control.preview.schema.cell;
const { value: active } = control.active;
</script>

<template>
    <div v-if="usable" class="design-setter">
        <h1>{{active.field}}</h1>
    </div>
    <div v-else class="design-setter-empty">
        <h1>Empty</h1>
    </div>
</template>

<style scoped lang='scss'>

</style>
