<!--
 * @FilePath: \maggot-design\src\pages\design\design.vue
 * @Author: maggot-code
 * @Date: 2022-10-13 09:30:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-21 15:02:13
 * @Description: 
-->
<script setup>
import DesignHandler from "./layout/DesignHandler.vue";
import DesignMatter from "./layout/DesignMatter.vue";
import DesignPreview from "./layout/DesignPreview.vue";
import DesignSetter from "./layout/DesignSetter.vue";

import { provide } from "vue";
import { defineForm } from "@/biz/Form";
import { defineMatter } from "./hooks/matter";
import { defineSetter } from "./hooks/setter";
import { defineControl } from "./hooks/control";
import {
    PreviewFormSymbol,
    BasicSetterFormSymbol,
    SeniorSetterFormSymbol,
    ControlSymbol,
    SetterSymbol
} from "./shared/context";

const preview = defineForm();
const basic = defineForm();
const senior = defineForm();
const matter = defineMatter();
const control = defineControl({ preview, basic, senior, matter });
const setter = defineSetter(control);

provide(PreviewFormSymbol, preview);
provide(BasicSetterFormSymbol, basic);
provide(SeniorSetterFormSymbol, senior);
provide(ControlSymbol, control);
provide(SetterSymbol, setter);
</script>

<template>
    <main class="design">
        <div class="design-layout design-head">
            <DesignHandler class="design-head-handler"></DesignHandler>
        </div>
        <div class="design-layout design-body">
            <section class="design-body-container design-body-matter">
                <DesignMatter></DesignMatter>
            </section>
            <section class="design-body-container design-body-preview">
                <DesignPreview></DesignPreview>
            </section>
            <section class="design-body-container design-body-setter">
                <DesignSetter></DesignSetter>
            </section>
        </div>
    </main>
</template>

<style scoped lang='scss'>
@import "./design.scss";
</style>
