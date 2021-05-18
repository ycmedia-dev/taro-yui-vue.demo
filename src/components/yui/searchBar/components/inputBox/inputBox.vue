<script lang="ts" src="./inputBox.service.ts"></script>
<template>
  <view class="y-input-box">
    <input
      :value="modelValue"
      :placeholder="options.placeholder"
      placeholderClass="placeholderClass"
      @input="onChange"
      class="input"
    />
  </view>
</template>
