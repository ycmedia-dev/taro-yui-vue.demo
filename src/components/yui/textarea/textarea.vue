<script lang='ts' src='./textarea.service.ts'></script>
<template>
  <view class="y-textarea">
    <template v-if="pattern === YFormPattern.VIEW">
      <view class="text">{{ modelValue }}</view>
    </template>
    <!--:auto-height="options.autoHeight"-->
    <template v-else>
      <textarea
        :placeholder="options.placeholder"
        :maxlength="options.maxLength"
        :style="`height:${options.height}px`"
        :disabled='options.disabled'
        :auto-focus='options.autoFocus'
        :value='modelValue'
        :autoHeight="options.autoHeight"
        class="box"
        @input="onChange"
        placeholder-style="color:#999;"
      ></textarea>
      <view class="quantity" v-if='options.showCount'>
        ({{ modelCursor }}/{{ options.maxLength }})
      </view>
    </template>
  </view>
</template>
