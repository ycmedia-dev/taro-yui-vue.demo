<script lang="ts" src='./floatLayout.service.ts'></script>
<template>
  <view class="modal-layout" :class="{'hasMaskOut': !!maskOuterElId}" v-if="isShowModal">
    <view class="cover-bg" @tap="onHideModal"></view>

    <!--跟随 Begin-->
    <template v-if="type === 'follow'">
      <template v-if="maskOuterElId">
        <view class="modal-follow" id="modal-follow" :class="isFollowUp ? 'up' : 'down'" :style="`top: ${referenceRectTop}px; bottom: auto;`">
          <view class="arrows_up"></view>
          <view class="modal-body" :style="{maxHeight: model === 'microsoft' ? `${followBodyHeight}` : 'auto'}">
            <slot></slot>
          </view>
        </view>
      </template>
      <template v-else>
        <teleport :to="`#${elementName}`">
          <view class="modal-follow" id="modal-follow" :class="isFollowUp ? 'up' : 'down'">
            <view class="arrows_up"></view>
            <view class="modal-body" :style="{height: model === 'microsoft' ? `${followBodyHeight}` : 'auto'}">
              <slot></slot>
            </view>
          </view>
        </teleport>
      </template>
    </template>
    <!--跟随 End-->

    <!--底部 Begin-->
    <template v-if="type === 'bottom'">
      <view class="modal-bottom">
        <view class="modal-head" v-if="title">
          <view class="modal-head-title">{{ title }}</view>
          <view class="close" @tap="onHideModal">
            <image class="img" :src="IconClose"></image>
          </view>
        </view>
        <view class="modal-body">
          <slot></slot>
        </view>
        <view class="modal-foot" v-if="slots['footer']">
          <slot name="footer"></slot>
        </view>
      </view>
    </template>
    <!--底部 End-->

    <!--中间 Begin-->
    <template v-if="type === 'middle'">
      <view
        class="modal-default"
        :style="{
          width: modalWidth,
        }"
      >
        <view class="modal-head" v-if="title">
          <view class="modal-head-title">{{ title }}</view>
          <view class="close" @tap="onHideModal">
          <image class="img" :src="IconClose"></image>
        </view>
        </view>

        <view class="modal-body">
          <scroll-view class="modal-body-in" scrollY="true">
            <slot></slot>
          </scroll-view>
        </view>
        <view class="modal-foot" v-if="slots['footer']">
          <slot name="footer"></slot>
        </view>
      </view>
    </template>
    <!--中间 End-->
  </view>
</template>
