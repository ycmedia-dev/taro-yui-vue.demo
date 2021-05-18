<script src='./color.service.ts' lang='ts'></script>
<template>
  <view class="y-color">
    <view :id="btnElId" class="action-btn" @tap="onOpenColorModal">
<!--      <image class="img" :src="`${baseImgUrl}${!formats[ImgElNameAndValue[iconName].name] ? iconName : 'select/'+iconName+'_select'}.svg`"></image>-->
      <image class="img" :src="`${baseImgUrl}${iconName}.svg?v=1`"></image>
      <image class="arrow" :src="IconArrowDownSolid"></image>
    </view>
    <view class="action-modal" :style="`top:${modalPositionTop}px`"  v-if="isShowColorModal">
      <view class="color-head">
        <view class="color-curr" :style="`background:${modelValue}`"></view>
        <view class="btn" @tap="onClearColor">清空颜色</view>
      </view>
      <block v-for="(item, index) in ColorList"
             :key="`color-group-${index}`">
        <view class="color-sub">{{ item.title }}</view>
        <view class="color-list">
          <view class="color-item"
                v-for="(c, idx) in item.list"
                :key="`color-item-${idx}`">
            <text class="color-item-in"
                  :style="{background: c}" @tap="onClickColor(c)"></text>
          </view>
        </view>
      </block>
    </view>

    <view
      @tap.stop="isShowColorModal = false && (modalClassName = '')"
      v-if="isShowColorModal"
      class="mask"
    ></view>
  </view>
</template>
