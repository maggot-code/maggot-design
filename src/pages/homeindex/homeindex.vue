<!--
 * @FilePath: \maggot-design\src\pages\homeindex\homeindex.vue
 * @Author: maggot-code
 * @Date: 2022-10-12 23:44:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-21 16:33:56
 * @Description: 
-->
<script setup>
import SchemaData from "@/assets/json/test.v1.json";

const formRefName = 'formRefName';
const jobFunction = {};
const testSchema = {
    formSchema: {
        labelWidth: "160px",
    },
    cellSchema: SchemaData,
}
const remoteService = {
    search: () => ([]),
    enums: () => ([])
}
function handleValue(params) {
    console.log(params);
}
function handlerFormError(error) {
    console.log(error);
}
</script>

<template>
    <div class="home-index" ref="boxRefs">
        <mg-form style="height: 600px" proName="SWZDH" :ref="formRefName" :job="jobFunction" :schema="testSchema"
            :remote="remoteService" @form-error="handlerFormError" @monitor-value="handleValue">
        </mg-form>
    </div>
</template>

<style scoped lang='scss'>
@import "./homeindex.scss";
</style>
