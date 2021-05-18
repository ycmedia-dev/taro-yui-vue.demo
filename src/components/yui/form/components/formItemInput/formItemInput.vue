<script lang="ts" src='./formItemInput.service.ts'></script>
<template>
  <view class="y-form-item-input-wrapper">
    <view v-if="pattern === YFormPattern.VIEW || options.disabled" class="text">
      {{ text }}
    </view>

    <template v-else>
      <input
        class="y-form-item-input"
        :type="type"
        :value="text"
        :placeholder="options.placeholder"
        :maxlength="options.type === YFormItemInputElType.INPUT_PHONE ? 11 : 9999"
        @input="onChange"
        placeholderClass="y-form-item-input-placeholder"
      />
    </template>
  </view>
</template>
