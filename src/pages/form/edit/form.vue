<template>
  <view v-reSize id="container" class="container">
    <y-form :rowList="rowList" v-model="info" @click="onFormClick" @clear="onClear">
      <template #customSlot> <view>这是自定义插槽的内容</view> </template>
      <template #customSlotRight-right> <view>这是自定义右侧插槽</view> </template>
    </y-form>
  </view>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent, ref, Ref } from "vue";
import "./form.scss";
import { YForm, YFormElType } from "@/components/yui/form/types/form.d";
import { YFormItemInputElType } from "@/components/yui/form/components/formItemInput/types/formItemInput.d";
import { YTextarea } from "@/components/yui/textarea/types/textarea.d";
import { CalendarBasic, CalendarTypeEnum } from "@/components/yui/calendar/calendarBasic/types/calendarBasic.d";
import { YUpload } from "@/components/yui/upload/types/upload.d";
import { YCheckboxType } from "@/components/yui/checkbox/types/checkbox.d";
import { YDateTimePicker } from '@/components/yui/dateTimePicker/types/dateTimePicker.d'
import { YFormItemPicker } from '@/components/yui/formItemPicker/types/formItemPicker.d'
import { YFormItemText } from '@/components/yui/form/components/formItemText/types/formItemText.d'
import { YEditor, YEditorImgElType } from '@/components/yui/editor/types/editor.d'




class YFormService {
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
      label: "数字文本框input",
      type: YFormElType.INPUT,
      property: "numberKeyWord",
      options: <YForm.FormItemInputOptions>{
        type: YFormItemInputElType.INPUT_NUMBER,
        placeholder: "单行数字文本框input",
      },
    },
    {
      require: true,
      show: true,
      label: "小数点文本框input",
      type: YFormElType.INPUT,
      property: "digitKeyWord",
      options: <YForm.FormItemInputOptions>{
        type: YFormItemInputElType.INPUT_DIGIT,
        placeholder: "小数点文本框input",
      },
    },
    {
      require: true,
      show: true,
      label: "手机号input",
      type: YFormElType.INPUT,
      property: "phoneKeyWord",
      options: <YForm.FormItemInputOptions>{
        type: YFormItemInputElType.INPUT_PHONE,
        placeholder: "手机号input",
      },
    },
    {
      require: true,
      show: true,
      label: "不可输入input",
      type: YFormElType.INPUT,
      property: "notInputKeyWord",
      options: <YForm.FormItemInputOptions>{
        disabled: true,
        placeholder: "单行文本框input不可输入",
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
      require: true,
      show: true,
      label: "日期选择器",
      type: YFormElType.DATE_PICKER,
      property: "date",
      options: <CalendarBasic.CalendarOptions>{
        isMultiSelect: false,
        showToolBar: true,
        canClear: true
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
        // canClear: false
        // maskOuterElId: '' 弹窗表单上配置 id名称, options类型用YDatePicker.YDatePickerOptions
      },
    },
    {
      require: false,
      show: true,
      label: "年度选择器",
      property: "year",
      type: YFormElType.DATE_PICKER,
      options: <YDateTimePicker.timePickerOptions>{
        placeholder: '年度选择器',
        type: CalendarTypeEnum.YEAR,
      },
    },
    {
      require: false,
      show: true,
      label: "年度范围选择器",
      property: "multiYear",
      type: YFormElType.DATE_PICKER,
      options: <YDateTimePicker.timePickerOptions>{
        placeholder: '年度选择器',
        type: CalendarTypeEnum.YEAR,
        isMultiSelect: true,
      },
    },
    {
      require: false,
      show: true,
      label: "年月选择器",
      property: "yearMonth",
      type: YFormElType.DATE_PICKER,
      options: <YDateTimePicker.timePickerOptions>{
        placeholder: '日期时间选择器',
        type: CalendarTypeEnum.MONTH
        // canClear: false
      },
    },
    {
      require: false,
      show: true,
      label: "年月范围选择器",
      property: "multiYearMonth",
      type: YFormElType.DATE_PICKER,
      options: <YDateTimePicker.timePickerOptions>{
        placeholder: '日期时间选择器',
        type: CalendarTypeEnum.MONTH,
        isMultiSelect: true,
      },
    },
    {
      require: false,
      show: true,
      label: "季度度选择器",
      property: "yearQuarter",
      type: YFormElType.DATE_PICKER,
      options: <YDateTimePicker.timePickerOptions>{
        placeholder: '季度度选择器',
        type: CalendarTypeEnum.QUARTER,
        // canClear: false
      },
    },
    {
      require: false,
      show: true,
      label: "季度范围选择器",
      property: "multiYearQuarter",
      type: YFormElType.DATE_PICKER,
      options: <YDateTimePicker.timePickerOptions>{
        placeholder: '季度度选择器',
        type: CalendarTypeEnum.QUARTER,
        isMultiSelect: true,
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
        isMultiSelect: false,
        // canClear: false
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
        },{
          label: "玩游戏",
          value: 4,
          type:YCheckboxType.button
        },
        {
          label: "游泳",
          value: 5,
          type:YCheckboxType.button
        }
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
        placeholder: '自定义选择器',
        canClear: true
      }
    }, {
      require: true,
      show: true,
      label: '普通选择器',
      type: YFormElType.SELECTOR,
      property: 'selectorId',
      options: <YFormItemPicker.FormItemPickerInfo>{
        placeholder: '普通选择器',
        optionList: [{id: 1, label: 'aa'}, {id: 3, label: 'bb'}],
        canClear: true
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
        ],
        // canClear: false
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
        // canClear: false
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
        // canClear: false
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
    {
      require: false,
      show: true,
      label: "编辑器",
      type: YFormElType.EDITOR,
      property: "EDITORHtml",
      options: <YEditor.EditorOptions>{
        placeholder: '编辑器',
        toolList: [
          YEditorImgElType.FONT_SIZE,
          YEditorImgElType.BOLD,
          YEditorImgElType.ITALIC,
          YEditorImgElType.COLOR,
          YEditorImgElType.DIRECTION,
          YEditorImgElType.BACKGROUND_COLOR,
          YEditorImgElType.ALIGN_LEFT,
          YEditorImgElType.ALIGN_RIGHT,
          YEditorImgElType.ALIGN_CENTER,
          YEditorImgElType.ALIGN_JUSTIFY,
          YEditorImgElType.HEADER_1,
          YEditorImgElType.HEADER_2,
          YEditorImgElType.HEADER_3,
          YEditorImgElType.HEADER_4,
          YEditorImgElType.INDENT,
          YEditorImgElType.OUTDENT,
          YEditorImgElType.LETTER_SPACING,
          YEditorImgElType.LINE_HEIGHT,
          YEditorImgElType.SCRIPT_SUB,
          YEditorImgElType.SCRIPT_SUPER,
          YEditorImgElType.STRIKE,
          YEditorImgElType.UNDER_LINE,
          YEditorImgElType.LIST_ORDERED,
          YEditorImgElType.LIST_BULLET,
          YEditorImgElType.LIST_CHECK,
          YEditorImgElType.MARGIN_BOTTOM,
          YEditorImgElType.MARGIN_TOP,
          YEditorImgElType.DATE,
          YEditorImgElType.INSERT_DIVIDER,
          YEditorImgElType.INSERT_IMAGE,
          YEditorImgElType.RE_DO,
          YEditorImgElType.UN_DO,
          YEditorImgElType.REMOVE_FORMAT,
          YEditorImgElType.CLEAR,
        ],
      }
    },
  ];

  /**
   * form信息
   */
  info: Ref<Object> = ref({
    keyWord: "11",  // input， 默认空
    numberKeyWord: 0,
    digitKeyWord: 0,
    phoneKeyWord: '15900000',
    notInputKeyWord: "不可修改",  // input， 默认空
    textVal: '仅文字显示无星号',
    date: "2020-01-22",  // 日期选择器， 默认空
    multiTime: ['2020-01-22', '2020-01-23'], // 日期范围选择器， 默认[]
    year: '2015', // 年度选择器
    multiYear: ['2014', '2016'], // 年度范围选择器
    yearMonth: '2023-01', // 年月选择器
    multiYearMonth: ['2026-01', '2026-05'], // 年月范围选择器
    yearQuarter: '2023-01', // 季度选择器
    multiYearQuarter: ['2020-01', '2020-02'], // 季度范围
    dateTime: '2021-01-01 00:00:00', // 日期时间选择器， 默认空
    radioValue: 2, // 单选的value值，默认0
    customSelectorStr: "自定义选择器",
    checkboxValueList: [1, 2], // 多选的value[],默认[]
    btnCheckboxValueList: [1, 2], // 按钮式多选框(value[]), 默认[]
    fileList: ["https://yyres.bcadx.com/upload/2021-01-25/b39e762176daeaf30ab0d775e83f162b.md5"],
    multiFileList: ["https://yyres.bcadx.com/upload/2021-01-25/b39e762176daeaf30ab0d775e83f162b.md5", "https://yyres.bcadx.com/upload/2021-01-25/b39e762176daeaf30ab0d775e83f162b.md5"],
    selectorId: 3, // 普通选择器（id）, 默认0
    multiSelectorId: [3,13], // 多列选择器（id[]）, 默认[]
    time: '02:05', // 时间选择器（时:分）， 默认空
    region: [], // 省市区选择器（['省', '市', '区']）, 默认[]
    remark: "", // 文本框，默认空
    EDITORHtml: '<p>这是编<span style="background-color: rgb(255, 0, 0); color: rgb(255, 255, 255);">辑器内容</span></p><p><br></p><p><img src="https://yyres.bcadx.com/upload/2021-04-09/b39e762176daeaf30ab0d775e83f162b.md5" width="100%"></p><p><br></p><p><br></p>' // 编辑器
  });

  constructor() {

  }

  /**
   * form点击事件
   */
  onFormClick(e: YForm.ClickCallbackResult) {
    console.log(e)
    if (e.index != 10) {
      return;
    }
    alert(`点击行：${e.index + 1}`);
  }

  /**
   * 清除->自定义下拉
   */
  onClear() {
    console.log('自定义下拉')
  }
}

export default defineComponent({
  components: {
    'y-form': defineAsyncComponent(() => import('@/components/yui/form/form.vue'))
    // "y-form": defineAsyncComponent(
    //   () => import("../../../../../taro-yui-vue/src/components/form/form.vue")
    // ),
  },
  setup() {
    const service = new YFormService();
    return {
      rowList: service.rowList,
      info: service.info,
      onFormClick: service.onFormClick.bind(service),
      onClear: service.onClear.bind(service),
    };
  },
});
</script>
