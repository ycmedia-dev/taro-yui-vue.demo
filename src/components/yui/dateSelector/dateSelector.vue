<script lang="ts" src='./dateSelector.service.ts'></script>
<template>
  <view class="date-selector">
    <view class="date"
          :class="{'placeholder': !modelValue}"
          :id="info.elementId"
          @tap="onOpenFloatLayout($event)">


      <template v-if="!modelValue">
        {{ info.placeholder }}
      </template>

      <template v-else>
        <template v-if="info.isMultiSelect">
          <text class="date-text" :class="{'placeholder': !modelValue.end}">{{ modelValue.end ? modelValue.start : info.startPlaceholder }}</text>

          <text class="date-label">至</text>

          <text class="date-text date-text-end" :class="{'placeholder': !modelValue.end}">{{ modelValue.end ? modelValue.end : info.endPlaceholder }}</text>
        </template>

        <template v-else>
          {{  modelValue }}
        </template>
      </template>

      <template v-if="!info.isMultiSelect ? modelValue : modelValue.end">
        <image class="img-clear" :src="IconCloseCircle" @tap.stop="onClearDate"></image>
      </template>
    </view>
  </view>
  <FloatLayout :isOpened="isOpened"
                type="follow"
                :elementName="elementName"
                @onClose="onCatchCloseFloatLayout">
    <template v-if="info.isMultiSelect">
      <Calendar :isMultiSelect="info.isMultiSelect"
                :currentDate="modelValue"
                @getSelectedRange="onCatchSelectedRange"></Calendar>
    </template>

    <template v-else>
      <Calendar :currentDate="modelValue"
                @getSelectedDayOrTime="onCatchSelectedDayOrTime"></Calendar>
    </template>



  </FloatLayout>
</template>
