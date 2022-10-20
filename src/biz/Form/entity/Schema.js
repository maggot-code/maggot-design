/*
 * @FilePath: \maggot-design\src\biz\Form\entity\Schema.js
 * @Author: maggot-code
 * @Date: 2022-09-20 09:25:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-20 14:09:53
 * @Description:
 */
import { unref, computed } from 'vue';
import { SchemaFactory } from '../shared/schema';

function FormSchema() {
    const schema = SchemaFactory({});

    return schema;
}

function CellSchema() {
    const schema = SchemaFactory([]);

    return schema;
}

export function Schema() {
    const form = FormSchema();
    const cell = CellSchema();
    const formSchema = computed(() => unref(form.data));
    const cellSchema = computed(() => unref(cell.data));
    function setup(response) {
        form.setup(response?.formSchema);
        cell.setup(response?.cellSchema);
    }
    return {
        form,
        cell,
        formSchema,
        cellSchema,
        setup,
    };
}

export default Schema;
