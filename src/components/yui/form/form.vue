<script lang="ts" src='./form.service.ts'></script>
<template>
  <view class="y-form">
    <block v-for="(item, index) in showRowList" :key="`row_${index}`">
      <view v-if="slots[`${item.property}`]" :class="item.property">
        <slot :name="`${item.property}`"></slot>
      </view>
      <view
        v-else-if="item.show"
        class="form-item"
        :class="[`form-item_${item.property}`, item.type === 'y-editor' || item.type === 'y-textarea' || item.type === 'y-upload' &&item.options.count>1 ? 'column' : '',
        `form-item-${item.type}-${item.type === 'y-upload' &&item.options.count ? item.options.count : 1}`, `form-pattern_${pattern ? pattern : 'edit'}`]"
      >
        <view
          :class="{
            require: item.require && pattern !== 'view',
            'form-item__label': item.type !== 'y-textarea',
          }"
        >
          {{ item.label }}
          <text class="tip" v-if="item.type === 'y-upload'&&item.options.placeholder!==''&&item.options.count > 1">({{ item.options.placeholder}})</text>
        </view>
        <view v-if="slots[`${item.property}-right`]" class="form-item__content">
          <slot :name="`${item.property}-right`"></slot>
        </view>
        <view v-else class="form-item__content">
          <component
            :pattern="pattern"
            :is="item.type"
            v-model="modelValue[item.property]"
            :options="item.options"
            @click="onClick(index)"
            @onClear="onClear(item.type, item.property)"
          ></component>
        </view>
      </view>
    </block>
  </view>
</template>
