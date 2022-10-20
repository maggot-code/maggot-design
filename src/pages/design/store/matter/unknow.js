import { defineDescribe } from '../../hooks/matter/defineDescribe';
import { defineStruct } from '../../shared/defineStruct';
import { UnknowNamespace } from '../../shared/context';

const uiSchemaStruct = defineStruct([]);

const MoldDefault = {
    label: '未知控件',
    mold: 'default',
    uiSchema: uiSchemaStruct.setup([]),
};

const MoldRadio = {
    label: '未知控件',
    mold: 'radio',
    uiSchema: uiSchemaStruct.setup([]),
};

const MoldDate = {
    label: '未知控件',
    mold: 'date',
    uiSchema: uiSchemaStruct.setup([]),
};

export default defineDescribe(
    {
        namespace: UnknowNamespace,
        label: '未知控件',
        mold: MoldDefault.mold,
    },
    {
        [MoldDefault.mold]: MoldDefault,
        [MoldRadio.mold]: MoldRadio,
        [MoldDate.mold]: MoldDate,
    }
);
