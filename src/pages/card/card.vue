<template>
  <view v-reSize id="container" class="container">
    <y-card
      :info="info"
      titleProperty="createTime"
      :bodyPropertyList="bodyPropertyList"
      :actionList="actionList"
      :customActionList="customActionList"
      @action="onCardAction"
      @click="onCardClick"
    >
      <template v-slot:school-left>我是左插槽</template>
      <template v-slot:address-right>我是右插槽</template>
      <template v-slot:content>
        <view style="text-align: left">
          我是整条插槽槽槽槽槽槽槽槽槽槽槽槽槽槽槽槽槽槽槽槽槽槽槽槽槽槽槽
        </view>
      </template>
    </y-card>
  </view>
</template>
<style>
.createOrder {
  color: red;
  background-image: url(../../assets/img/custom_action_buy.svg);
}
</style>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import "./card.scss";
import { Card, ActionTypeEnum } from "@/components/yui/card/types/card.d";
// import { Card, ActionTypeEnum } from "../../../../taro-yui-vue/src/components/card/types/card.d";

/**
 * 卡片
 */
class CardService {


  /**
   * 卡片属性标签列表
   */
  bodyPropertyList: Card.CardProperty[] = [
    { name: "fullName", label: "姓名" },
    { name: "sex", label: "性别" },
    { name: "age", label: "年龄" },
    { name: "school", label: "学校" },
    { name: "address", label: "地址" },
    { name: "content", label: "详情" },
  ];

  customActionList: Card.ActionInfo[] = [
    {
      className: "createOrder",
      label: "下单",
    },
  ];

  /**
   * card点击事件
   */
  onCardClick() {
    console.log("card点击");
  }

  /**
   * 编辑
   */
  onCardAction(e: Card.ActionCallbackResult) {
    console.log(`card编辑:${e.type}`);
  }
}

export default defineComponent({
  components: {
    // "y-card": defineAsyncComponent(
    //   () => import("@/components/yui/card/card.vue")
    // ),
    "y-card": defineAsyncComponent(
      () => import("../../../../taro-yui-vue/src/components/card/card.vue")
    ),
  },
  setup() {
    const service = new CardService();
    return {
      info: {
        id: 13,
        fullName: "张三",
        sex: "男",
        age: 25,
        createTime: "2020-11-13 12:45:23",
        school: '某某中学',
        address: '某市某区某条街'
      },
      bodyPropertyList: service.bodyPropertyList,
      customActionList: service.customActionList,
      actionList: [
        ActionTypeEnum.edit,
        ActionTypeEnum.delete,
        ActionTypeEnum.rename,
        ActionTypeEnum.disable,
      ],
      onCardAction: service.onCardAction.bind(service),
      onCardClick: service.onCardClick.bind(service),
    };
  },
});
</script>
