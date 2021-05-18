<script lang='ts' src='./datePicker.service.ts'></script>
<template>
  <view class="y-date-picker">
    <view
      @tap="onToggleDialog"
      class="btn"
      :class="{ placeholder: !isSelectedDate }"
    >
      <block v-if="isSelectedDate">
        {{
          options.isMultiSelect
            ? `${modelValue[0]} ~ ${modelValue[1]}`
            : modelValue
        }}
      </block>
      <block v-else>
        {{ options.placeholder }}
      </block>

      <template v-if="options.canClear && isSelectedDate && pattern !== YFormPattern.VIEW">
        <view class="clear"  @tap.stop="onClearTime">
          <image class="img-clear" :src="IconCloseCircle"></image>
        </view>
      </template>
    </view>
    <view :id="btnElId" style="margin-right: 15px"></view>
    <template v-if="options.maskOuterElId">
      <teleport :to="`#${options.maskOuterElId}`">
        <y-float-layout
          :isOpened="showDialog"
          :maskOuterElId="options.maskOuterElId"
          :elementName="btnElId"
          type="follow"
          @onClose="onCatchCloseFloatLayout"
        >
          <y-calendar v-model="calendarModelValue" :options="options" @onSelectDate="onSelectDate"></y-calendar>
        </y-float-layout>
      </teleport>
    </template>

    <template v-else>
      <y-float-layout
        :isOpened="showDialog"
        type="follow"
        maskOuterElId=""
        :elementName="btnElId"
        @onClose="onCatchCloseFloatLayout"
      >
        <y-calendar v-model="calendarModelValue"  :options="options" @onSelectDate="onSelectDate" @onShortcut="onShortcut"></y-calendar>
      </y-float-layout>
    </template>


  </view>
</template>
