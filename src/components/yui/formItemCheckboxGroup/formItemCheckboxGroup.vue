<script lang="ts" src='./formItemCheckboxGroup.service.ts'></script>
<template>
  <y-checkbox-group v-if="pattern !== 'view'" class="y-form-item-checkbox-group" :modelValue="modelValue" @change="onChange">
    <y-checkbox v-for="item in options" :key="item.label" :value="item.value" :type="item.type">
      {{ item.label }}
    </y-checkbox>
  </y-checkbox-group>

  <view v-else>{{ checkboxText }}</view>
</template>
