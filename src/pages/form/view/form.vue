<template>
  <view v-reSize id="container" class="container">
    <y-form :pattern="pattern" :rowList="rowList" v-model="info" @click="onFormClick">
      <template #customSlot> <view>这是自定义插槽的内容</view> </template>
      <template #customSlotRight-right> <view>这是自定义右侧插槽</view> </template>
    </y-form>
  </view>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent, ref, Ref } from "vue";
import "./form.scss";
import { YForm, YFormElType, YFormPattern } from "@/components/yui/form/types/form.d";
import { YTextarea } from "@/components/yui/textarea/types/textarea.d";
import { CalendarBasic } from "@/components/yui/calendar/calendarBasic/types/calendarBasic.d";
import { YUpload } from "@/components/yui/upload/types/upload.d";
import { YCheckboxType } from "@/components/yui/checkbox/types/checkbox.d";
import { YDateTimePicker } from '@/components/yui/dateTimePicker/types/dateTimePicker.d'
import { YFormItemPicker } from '@/components/yui/formItemPicker/types/formItemPicker.d'
import { YFormItemText } from '@/components/yui/form/components/formItemText/types/formItemText.d'

class YFormService {
  /**
   * 表单模式，view: 查看模式
   * */
  pattern: Ref<string> = ref('view')

  /**
   * 表单数据列表
   */
  rowList: YForm.FormItem[] = [
    {
      require: true,
      show: true,
      label: "单行文本框input",
      type: YFormElType.INPUT,
      property: "keyWord",
      options: <YForm.FormItemInputOptions>{
        placeholder: "单行文本框input",
      },
    },
    {
      require: true,
      show: true,
      label: "仅文字显示无星号",
      type: YFormElType.TEXT,
      property: "textVal",
      options: <YFormItemText.FormItemTextOptions>{
        placeholder: "仅文字显示无星号",
      },
    },
    {
      require: false,
      show: true,
      label: "日期选择器",
      type: YFormElType.DATE_PICKER,
      property: "date",
      options: <CalendarBasic.CalendarOptions>{
        isMultiSelect: false,
        showToolBar: true,
      }
    },
    {
      require: false,
      show: true,
      label: "日期范围选择器",
      property: "multiTime",
      type: YFormElType.DATE_PICKER,
      options: <CalendarBasic.CalendarOptions>{
        isMultiSelect: true,
        showToolBar: true,
      },
    },
    {
      require: false,
      show: true,
      label: "日期时间选择器",
      property: "dateTime",
      type: YFormElType.DATE_TIME_PICKER,
      options: <YDateTimePicker.timePickerOptions>{
        placeholder: '日期时间选择器',
        isMultiSelect: false
      },
    },


    {
      require: false,
      show: true,
      label: "单选框",
      type: YFormElType.RADIO_GROUP,
      property: "radioValue",
      options: <YForm.FormItemRadioGroupOptions[]>[
        {
          label: "强",
          value: 1,
        },
        {
          label: "中",
          value: 2,
        },
        {
          label: "弱",
          value: 3,
        },
      ],
    },
    {
      require: true,
      show: true,
      label: "多选框",
      type: YFormElType.CHECKBOX_GROUP,
      property: "checkboxValueList",
      options: <YForm.FormItemCheckboxGroupOptions[]>[
        {
          label: "添加",
          value: 1,
        },
        {
          label: "修改",
          value: 2,
        },
        {
          label: "删除",
          value: 3,
        },
      ],
    },{
      require: true,
      show: true,
      label: "按钮式多选框",
      type: YFormElType.CHECKBOX_GROUP,
      property: "btnCheckboxValueList",
      options: <YForm.FormItemCheckboxGroupOptions[]>[
        {
          label: "唱歌",
          value: 1,
          type:YCheckboxType.button
        },
        {
          label: "玩游戏",
          value: 2,
          type:YCheckboxType.button
        },
        {
          label: "游泳",
          value: 3,
          type:YCheckboxType.button
        },
      ],
    }, {
      require: true,
      show: true,
      label: "单张图片",
      type: YFormElType.UPLOAD,
      property: "fileList",
      options: <YUpload.YUploadOptions>{
        placeholder: '最多1张',
        multiple: false,
      },
    }, {
      require: true,
      show: true,
      label: "多张图片",
      type: YFormElType.UPLOAD,
      property: "multiFileList",
      options: <YUpload.YUploadOptions>{
        placeholder: '最多3张',
        multiple: true,
        count: 3,
      },
    }, {
      require: true,
      show: true,
      label: "自定义选择器",
      type: YFormElType.CUSTOM_SELECTOR,
      property: "customSelectorStr",
      options: <YForm.YFormItemCustomSelectorOptions>{
        placeholder: '自定义选择器'
      }
    }, {
      require: true,
      show: true,
      label: '普通选择器',
      type: YFormElType.SELECTOR,
      property: 'selectorId',
      // viewModeProperty: 'selectorName', // 配置时 optionList可以为[]
      options: <YFormItemPicker.FormItemPickerInfo>{
        placeholder: '普通选择器',
        optionList: [{id: 1, label: 'aa'}, {id: 3, label: 'bb'}]
      }
    }, {
      require: false,
      show: true,
      label: '多列选择器',
      type: YFormElType.SELECTOR,
      property: 'multiSelectorId',
      options: <YFormItemPicker.FormItemPickerInfo>{
        type: 'multiSelector',
        placeholder: '多列选择器',
        optionList: [
          [{id: 1, label: 'aa'}, {id: 3, label: 'bb'}],
          [{id: 11, label: 'ab1'}, {id: 13, label: 'ab2'}],
        ]
      }
    }, {
      require: true,
      show: true,
      label: '时分选择器',
      type: YFormElType.SELECTOR,
      property: 'time',
      options: <YFormItemPicker.FormItemPickerInfo>{
        type: 'time',
        placeholder: '时分选择器',
      }
    }, {
      require: true,
      show: true,
      label: '地区选择器',
      type: YFormElType.SELECTOR,
      property: 'region',
      options: <YFormItemPicker.FormItemPickerInfo>{
        type: 'region',
        customItem: '自定义选项',
        placeholder: '地区选择器',
      }
    },{
      require: true,
      show: true,
      label: "多行文本框textarea",
      type: YFormElType.TEXTAREA,
      property: "remark",
      options: <YTextarea.TextAreaOptions>{
        height: 100,
        placeholder: "多行文本框textarea",
      },
    },
    {
      require: false,
      show: true,
      label: "自定义插槽",
      type: YFormElType.SLOT,
      property: "customSlot"
    },
    {
      require: false,
      show: true,
      label: "自定义右侧插槽",
      type: YFormElType.SLOT,
      property: "customSlotRight"
    },
  ];

  /**
   * form信息
   */
  info: Ref<Object> = ref({
    keyWord: "11",  // input， 默认空
    textVal: '仅文字显示无星号',
    date: "2020-01-22",  // 日期选择器， 默认空
    multiTime: ['2020-01-22', '2020-01-23'], // 日期范围选择器， 默认[]
    dateTime: '2021-01-01 00:00:00', // 日期时间选择器， 默认空
    radioValue: 2, // 单选的value值，默认0
    companyName: "自定义选择器",
    checkboxValueList: [1, 2], // 多选的value[],默认[]
    btnCheckboxValueList: [1, 2], // 按钮式多选框(value[]), 默认[]
    fileList: ["https://yyres.bcadx.com/upload/2021-01-25/b39e762176daeaf30ab0d775e83f162b.md5"],
    multiFileList: ["https://yyres.bcadx.com/upload/2021-01-25/b39e762176daeaf30ab0d775e83f162b.md5", "https://yyres.bcadx.com/upload/2021-01-25/b39e762176daeaf30ab0d775e83f162b.md5"],
    selectorId: 3, // 普通选择器（id）, 默认0
    selectorName: '普通选择器值', // 普通选择器值
    multiSelectorId: [3,13], // 多列选择器（id[]）, 默认[]
    time: '02:05', // 时间选择器（时:分）， 默认空
    region: [], // 省市区选择器（['省', '市', '区']）, 默认[]
    remark: "111",
  });

  constructor() {

  }

  /**
   * form点击事件
   */
  onFormClick(e: YForm.ClickCallbackResult) {
    if (e.index != 10) {
      return;
    }
    alert(`点击行：${e.index + 1}`);
  }
}

export default defineComponent({
  components: {
    // 'y-form': defineAsyncComponent(() => import('@/components/yui/form/form.vue'))
    "y-form": defineAsyncComponent(
      () => import("../../../../../taro-yui-vue/src/components/form/form.vue")
    ),
  },
  setup() {
    const service = new YFormService();
    return {
      pattern: service.pattern,
      rowList: service.rowList,
      info: service.info,
      onFormClick: service.onFormClick.bind(service),
    };
  },
});
</script>
