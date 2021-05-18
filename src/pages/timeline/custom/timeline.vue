<template>
  <view v-reSize id="container" class="container">
    <y-timeline v-model="list">
      <template #header>这是头部插槽</template>
      <template #btn="{btn}">
        <!--以下为按钮插槽：-->
        <view style="margin-right: 15px">{{ btn.name }}-按钮1</view>
        <view>{{ btn.sex }}-按钮2</view>
      </template>

      <template #body="{body}">
        以下为body插槽：
        <view>姓名：{{ body.name }}</view>
        <view>性别：{{ body.sex }}</view>
      </template>
    </y-timeline>
  </view>
</template>

<script lang="ts">
import { Ref, ref, defineComponent, defineAsyncComponent } from 'vue'
import './timeline.scss'
import { YTimeline, ActionTypeEnum } from '@/components/yui/timeline/types/timeline.d'

class TimelineService {
  /**
   * 列表
   */
  list: Ref<object[]> = ref([
    {
      title: '这是标题1',
      date: '2021-01-01',
      name: '张三',
      sex: '男'
    },
    {
      title: '这是标题2',
      date: '2021-01-02',
      name: '李四',
      sex: '女'
    }
  ])
}


export default defineComponent({
  components: {
    'y-timeline': defineAsyncComponent(() => import('@/components/yui/timeline/timeline.vue'))
  },
  setup() {
    const service = new TimelineService()

    return {
      list: service.list
    };
  }
});
</script>
