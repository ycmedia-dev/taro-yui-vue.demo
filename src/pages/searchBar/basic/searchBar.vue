<template>
  <view v-reSize id="container" class="search-bar-container">
    <y-search-bar :rowList="rowList"
                  v-model="searchRowValueInfo"
                  @onSearch="onCatchSearch"></y-search-bar>
  </view>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, ref, Ref } from "vue";
import "./searchBar.scss";
import { YInputBox } from '../../../../../taro-yui-vue/src/components/searchBar/components/inputBox/types/inputBox.d'
import { YSearchBar, SearchBarElType } from '../../../../../taro-yui-vue/src/components/searchBar/types/searchBar.d'

class SearchBarService {
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
    "y-search-bar": defineAsyncComponent(() => import("@/components/yui/searchBar/searchBar.vue"))
    // "y-search-bar": defineAsyncComponent(() => import("../../../../../taro-yui-vue/src/components/searchBar/searchBar.vue"))
  },
  setup() {
    const service = new SearchBarService()
    return {
      rowList: service.rowList,
      searchRowValueInfo: service.searchRowValueInfo,
      onCatchSearch: service.onCatchSearch.bind(service)
    };
  },
});
</script>
