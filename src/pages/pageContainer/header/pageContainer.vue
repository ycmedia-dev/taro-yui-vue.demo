<template>
  <view v-reSize id="container" class="container">
    <y-page-container>
      <template #header>
<y-search-bar :rowList="rowList"
                  v-model="searchRowValueInfo"
                  @onSearch="onCatchSearch"></y-search-bar>
      </template>
      内容区
    </y-page-container>
  </view>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent,ref,Ref } from "vue";
import "./pageContainer.scss";
import { FixedButton } from "../../../../../taro-yui-vue/src/components/fixedButton/types/fixedButton.d";
import { YInputBox } from '../../../../../taro-yui-vue/src/components/searchBar/components/inputBox/types/inputBox.d'
import { YSearchBar, SearchBarElType } from '../../../../../taro-yui-vue/src/components/searchBar/types/searchBar.d'

/**
 * 底部固定button
 */
class FixedButtonService {
  /**
   * 点击事件
   */
  onClick(result: FixedButton.ClickCallbackResult) {
    alert(`${result.index === 0 ? "取消" : "确定"}事件`);
  }

  /**
   * 表单行集合
   */
   rowList: Ref<YSearchBar.SearchRowItem[]> = ref([
      {
        show: true,
        label: '',
        type: SearchBarElType.INPUT,
        property: 'keyWord',
        options: <YInputBox.InputInfo>{
          placeholder: '输入文字'
        }
      }
    ])

    /**
     * 表单所有值，key名和searchRowList中的property一致
     * */
    searchRowValueInfo: Ref<Object> = ref({
      keyWord: '1111'
    })

    /**
     * 重置
     */
    searchRowValueInfoEmpty: Object = {
      keyWord: ''
    }

    /**
     * 搜索
     */
    onCatchSearch(params: Object) {
      this.searchRowValueInfo.value = params === null ? {
        ...this.searchRowValueInfoEmpty
      }  : this.searchRowValueInfo.value
      console.log('搜索结果', params)
      console.log('搜索结果===',this.searchRowValueInfo.value )
    }
}

export default defineComponent({
  components: {
    "y-page-container": defineAsyncComponent(
      () =>
        import(
          "../../../../../taro-yui-vue/src/components/pageContainer/pageContainer.vue"
        )
    ),
    "y-search-bar": defineAsyncComponent(
      () =>
        import(
          "../../../../../taro-yui-vue/src/components/searchBar/searchBar.vue"
        )
    ),
  },
  setup() {
    const service = new FixedButtonService();
    return {
      btnLabelList: ["取消", "确定"],
      onClick: service.onClick.bind(service),
      rowList: service.rowList,
      searchRowValueInfo: service.searchRowValueInfo,
      onCatchSearch: service.onCatchSearch.bind(service)
    };
  },
});
</script>