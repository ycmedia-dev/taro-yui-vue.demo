<script lang="ts" src='./formItemPicker.service.ts'></script>
<template>
  <view class="selector-picker">
    <template v-if="options.type === 'selector'">
      <picker v-if="pattern !== YFormPattern.VIEW"
        class="selector-picker-in"
        :value="pickerIndex"
        :range="options.optionList"
        range-key="label"
        @change="onChange">
        <view class="picker"
              :class="pickerIndex > -1 ? '' : 'placeholder'">
          {{ pickerIndex > -1 ? options.optionList[pickerIndex].label : options.placeholder }}
        </view>
      </picker>

      <view class="selector-picker-text" v-else>{{ pickerIndex > -1 ? options.optionList[pickerIndex].label : '' }}</view>
    </template>


    <template v-if="options.type === 'multiSelector'">
      <picker v-if="pattern !== YFormPattern.VIEW"
              class="selector-picker-in"
              mode="multiSelector"
              :value="multiIndex"
              :range="options.optionList"
              range-key="label"
              @change="onChange">
        <view class="picker"
              :class="multiIndex.length ? '' : 'placeholder'">
          {{ multiIndex.length ? multiTextStr : options.placeholder }}
        </view>
      </picker>

      <view class="selector-picker-text" v-else>{{ multiIndex.length ? multiTextStr : '' }}</view>
    </template>

    <template v-if="options.type === 'time'">
      <picker v-if="pattern !== YFormPattern.VIEW"
              class="selector-picker-in"
              mode="time"
              :value="time"
              start="09:01"
              end="21:01"
              @change="onChange">
        <view class="picker"
              :class="time ? '' : 'placeholder'">
          {{ time ? time : options.placeholder }}
        </view>
      </picker>

      <view class="selector-picker-text" v-else>{{ time ? time : '' }}</view>
    </template>

    <template v-if="options.type === 'region'">
      <picker v-if="pattern !== YFormPattern.VIEW"
              class="selector-picker-in"
              mode="region"
              :value="region"
              :custom-item="options.customItem"
              @change="onChange">
        <view class="picker"
              :class="region.length ? '' : 'placeholder'">
          {{ region.length ? region.join('/') : options.placeholder }}
        </view>
      </picker>

      <view class="selector-picker-text" v-else>{{ region.length ? region.join('/') : '' }}</view>
    </template>

    <template v-if="pattern !== YFormPattern.VIEW && options.canClear && (pickerIndex > -1 || multiIndex.length || time !== '' || region.length)">
      <view class="clear" @tap="onClear">
        <image :src="IconCloseCircle" class="img-clear"></image>
      </view>
    </template>
  </view>
</template>
