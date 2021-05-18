<script src='./checkbox.service.ts' lang='ts'></script>
<template>
  <view class="y-checkbox"
        :class="{'y-checkbox-button': type === 'button', 'disabled': disabled}"
        @tap="onChange">
    <template v-if="type === 'button'">
      <view class="checkbox-btn"
            :class="disabled ?
              isChecked ? 'selected-disabled' : 'disabled'
              : isChecked ? 'is-checked' : ''">
        <slot></slot>
      </view>
    </template>

    <template v-else>
      <image
        class="img"
        :src="disabled ?
            isChecked ? selectDisabledImg : disabledImg
            : isChecked ? selectImg : unSelectImg "
      ></image>
      <slot></slot>
    </template>
  </view>
</template>
