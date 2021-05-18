<template>
  <view v-reSize id="container" class="container">
    <y-timeline v-model="list"
                titleProperty="title"
                dateTimeProperty="date"
                contentProperty="content"
                :actionList="actionList"
                @action="onCatchAction">
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
      content: '这是内容这是内容这是内容这是内容这是内容这是内容1'
    },
    {
      title: '这是标题2',
      date: '2021-01-02',
      content: '这是内容这是内容这是内容这是内容这是内容这是内容2'
    }
  ])

  /**
   * 点击按钮
   * @param e
   */
  onCatchAction(e: YTimeline.ActionCallbackResult) {
    console.log('点击的按钮是：', e.type)
    // do sth.
  }
}


export default defineComponent({
  components: {
    'y-timeline': defineAsyncComponent(() => import('@/components/yui/timeline/timeline.vue'))
  },
  setup() {
    const service = new TimelineService()

    return {
      list: service.list,
      actionList: [
        ActionTypeEnum.EDIT,
        ActionTypeEnum.DELETE,
      ],
      onCatchAction: service.onCatchAction.bind(service)
    };
  }
});
</script>
