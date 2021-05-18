<template>
  <view v-reSize id="container" class="multiple-search-bar">
    <y-search-bar :rowList="rowList"
                  v-model="modelValue"
                  @onSearch="onSearch"
                  @onClickBar="onCatchClickBar"
                  @onClear="onCatchClear"
                  @onClick="onClickRow">
    </y-search-bar>
  </view>
</template>

<script lang="ts">

import { defineComponent, defineAsyncComponent, ref, Ref } from "vue";
import "./searchBar.scss";
import { YInputBox } from '../../../../../taro-yui-vue/src/components/searchBar/components/inputBox/types/inputBox.d'
import { YCustomSelector } from '../../../../../taro-yui-vue/src/components/searchBar/components/customSelector/types/customSelector.d'
import { YFormItemPicker } from '../../../../../taro-yui-vue/src/components/formItemPicker/types/formItemPicker.d'
import { CalendarBasic, CalendarTypeEnum } from '../../../../../taro-yui-vue/src/components/calendar/calendarBasic/types/calendarBasic.d'
import { YDateTimePicker } from '../../../../../taro-yui-vue/src/components/dateTimePicker/types/dateTimePicker.d'
import { YSearchBar, SearchBarElType } from '../../../../../taro-yui-vue/src/components/searchBar/types/searchBar.d'
import { YForm } from "@/components/yui/form/types/form.d";

class SearchBarService {
  /**
   * 表单行集合
   * 集合第一个是搜索栏，其余是搜索表单
   */
  rowList: Ref<YSearchBar.SearchRowItem[]> = ref([
    {
      show: true,
      label: "日期时间选择器",
      property: "dateKeyWord",
      type: SearchBarElType.DATE_TIME_PICKER,
      options: <YDateTimePicker.timePickerOptions>{
        placeholder: '日期时间选择器',
        isMultiSelect: false,
        canClear: true
      }
    },{
      show: true,
      label: '普通选择器',
      type: SearchBarElType.SELECTOR,
      property: 'selectorId',
      options: <YFormItemPicker.FormItemPickerInfo>{
        placeholder: '普通选择器',
        optionList: [{id: 1, label: 'aa'}, {id: 3, label: 'bb'}],
        canClear: true
      }
    },


    {
      show: true,
      label: '输入文字',
      type: SearchBarElType.INPUT,
      property: 'keyWord',
      options: <YInputBox.InputInfo>{
        placeholder: '输入文字'
      }
    },

    {
      show: true,
      label: "日期范围选择器",
      property: "multiTime",
      type: SearchBarElType.DATE_PICKER,
      options: <CalendarBasic.CalendarOptions>{
        placeholder: '日期范围选择器',
        isMultiSelect: true,
        showToolBar: true,
        canClear: false
      }
    },
    {
      show: true,
      label: "日期时间选择器",
      property: "dateTime",
      type: SearchBarElType.DATE_TIME_PICKER,
      options: <YDateTimePicker.timePickerOptions>{
        placeholder: '日期时间选择器',
        isMultiSelect: false,
      }
    },
    {
      show: true,
      label: "年度选择器",
      type: SearchBarElType.DATE_PICKER,
      property: "year",
      options: <CalendarBasic.CalendarOptions>{
        placeholder: '年度选择器',
        type: CalendarTypeEnum.YEAR,
      }
    },
    {
      show: true,
      label: "年度范围选择器",
      type: SearchBarElType.DATE_PICKER,
      property: "multiYear",
      options: <CalendarBasic.CalendarOptions>{
        placeholder: '年度范围选择器',
        type: CalendarTypeEnum.YEAR,
        isMultiSelect: true
      }
    },
    {
      show: true,
      label: "年月选择器",
      type: SearchBarElType.DATE_PICKER,
      property: "yearMonth",
      options: <CalendarBasic.CalendarOptions>{
        placeholder: '年月选择器',
        type: CalendarTypeEnum.MONTH,
      }
    },
    {
      show: true,
      label: "年月范围选择器",
      type: SearchBarElType.DATE_PICKER,
      property: "multiYearMonth",
      options: <CalendarBasic.CalendarOptions>{
        placeholder: '年月范围选择器',
        type: CalendarTypeEnum.MONTH,
        isMultiSelect: true
      }
    },
    {
      show: true,
      label: "季度选择器",
      type: SearchBarElType.DATE_PICKER,
      property: "yearQuarter",
      options: <CalendarBasic.CalendarOptions>{
        placeholder: '季度选择器',
        type: CalendarTypeEnum.QUARTER,
      }
    },
    {
      show: true,
      label: "季度范围选择器",
      type: SearchBarElType.DATE_PICKER,
      property: "multiYearQuarter",
      options: <CalendarBasic.CalendarOptions>{
        placeholder: '季度范围选择器',
        type: CalendarTypeEnum.QUARTER,
        isMultiSelect: true
      }
    },
    {
      show: true,
      label: "自定义选择器",
      type: SearchBarElType.CUSTOM_SELECTOR,
      property: "customSelectorStr",
      options: <YCustomSelector.CustomSelectorInfo>{
        placeholder: "自定义选择器",
        canClear: false
      }
    },
    {
      show: true,
      label: '普通选择器',
      type: SearchBarElType.SELECTOR,
      property: 'selectorId',
      options: <YFormItemPicker.FormItemPickerInfo>{
        placeholder: '普通选择器',
        optionList: [{id: 1, label: 'aa'}, {id: 3, label: 'bb'}],
        canClear: false
      }
    },
    {
      show: true,
      label: '多列选择器',
      type: SearchBarElType.SELECTOR,
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
    },
    {
      show: true,
      label: '时分选择器',
      type: SearchBarElType.SELECTOR,
      property: 'time',
      options: <YFormItemPicker.FormItemPickerInfo>{
        type: 'time',
        placeholder: '时分选择器',
        canClear: false
      },
    },
    {
      show: true,
      label: '地区选择器',
      type: SearchBarElType.SELECTOR,
      property: 'region',
      options: <YFormItemPicker.FormItemPickerInfo>{
        type: 'region',
        placeholder: '地区选择器'
        // canClear: false
      },

    },
    {
      show: true,
      label: "单选",
      type: SearchBarElType.RADIO_GROUP,
      property: "radioValue",
      options: <YForm.FormItemRadioGroupOptions[]>[
        {
          label: "强",
          value: 1
        },
        {
          label: "中",
          value: 2
        },
        {
          label: "弱",
          value: 3
        }
      ]
    },
    {
      show: true,
      label: "多选",
      type: SearchBarElType.CHECKBOX_GROUP,
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
        }
      ]
    }
  ])

  /**
   * 表单所有值，key名和searchRowList中的property一致
   * */
  modelValue: Ref<Object> = ref({
    dateKeyWord: '',
    keyWord: '', // 搜索内容，默认空
    date: '2021-01-22', // 日期选择器， 默认空
    multiTime: ['2021-01-01', '2021-01-02'], // 日期范围选择器， 默认[]
    dateTime: '2021-01-01 00:00:00', // 日期时间选择器， 默认空
    year: '2015', // 年度范围选择器
    multiYear: ['2011', '2018'], // 年度范围选择器
    yearMonth: '2020-01', // 年月选择器，默认空
    multiYearMonth: ['2020-05', '2020-07'], // 年月范围选择器，默认[]
    yearQuarter: '2025-02', // 季度选择器，默认空
    multiYearQuarter: ['2021-01', '2025-02'], // 季度范围选择器，默认[]
    customSelectorStr: '22', // 自定义选择器， 默认空
    selectorId: 0, // 普通选择器（id）, 默认0
    multiSelectorId: [3,13], // 多列选择器（id[]）, 默认[]
    time: '02:05', // 时间选择器（时:分）， 默认空
    region: [], // 省市区选择器（['省', '市', '区']）, 默认[]
    radioValue: 0, // 单选的value值，默认0
    checkboxValueList: [1, 2], // 多选的value[],默认[]
  })

  /**
   * 重置
   * */
  modelValueEmpty: Object = {
    keyWord: '',
    date: '',
    multiTime: [],
    dateTime: '',
    customSelectorStr: '',
    selectorId: 0,
    multiSelectorId: [],
    time: '',
    region: []
  }

  constructor() {

  }

  /**
   * 搜索
   */
  onSearch(params: Object) {
    this.modelValue.value = params === null ? {
      ...this.modelValueEmpty
    }  : this.modelValue.value
    console.log('搜索结果===',this.modelValue.value )
  }

  /**
   * 点击搜索bar 只有CUSTOM_SELECTOR组件才执行
   * */
  onCatchClickBar() {
    // do sth.
  }

  /**
   * 清除自定义下拉选择器
   * @param property 组件值属性名
   * */
  onCatchClear(property: string) {
    console.log('property', property)
    // do sth.
  }

  /**
   * 点击行
   * @param index 第几行
   */
  onClickRow(index: number) {
    alert(`点击的是第${index}行`)
  }
}
export default defineComponent({
  components: {
    // "y-search-bar": defineAsyncComponent(() => import("../../../../../taro-yui-vue/src/components/searchBar/searchBar.vue"))
    "y-search-bar": defineAsyncComponent(() => import("@/components/yui/searchBar/searchBar.vue"))
  },
  setup() {
    const service = new SearchBarService()

    return {
      rowList: service.rowList,
      modelValue: service.modelValue,
      onSearch: service.onSearch.bind(service),
      onCatchClickBar: service.onCatchClickBar.bind(service),
      onCatchClear: service.onCatchClear.bind(service),
      onClickRow: service.onClickRow.bind(service)
    };
  },
});
</script>
