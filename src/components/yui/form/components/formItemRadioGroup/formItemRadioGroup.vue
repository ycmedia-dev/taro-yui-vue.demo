<script lang="ts" src='./formItemRadioGroup.service.ts'></script>
<template>
  <y-radio-group v-if="pattern !== YFormPattern.VIEW" class="y-form-item-radio-group" :modelValue="modelValue" @change="onChange">
    <y-radio v-for="item in options" :key="item.label" :value="item.value">
      {{ item.label }}
    </y-radio>
  </y-radio-group>

  <view v-else>{{ radioText }}</view>
</template>
