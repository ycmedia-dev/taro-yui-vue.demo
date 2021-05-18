<template>
  <view v-reSize id="container" class="container">
    <y-radio-group v-model="radioValue">
      <y-radio :value="1">男</y-radio>
      <y-radio :value="2">女</y-radio>
    </y-radio-group>
  </view>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent, Ref, ref } from "vue";
import "./radioGroup.scss";

class RadioService {
  /**
   * 单选框选中值
   */
  radioValue: Ref<number> = ref(2);
}

export default defineComponent({
  components: {
    "y-radio": defineAsyncComponent(
      () => import("@/components/yui/radio/radio.vue")
    ),
    "y-radio-group": defineAsyncComponent(
      () => import("@/components/yui/radioGroup/radioGroup.vue")
    ),
  },
  setup() {
    const service = new RadioService();
    return {
      radioValue: service.radioValue,
    };
  },
});
</script>
