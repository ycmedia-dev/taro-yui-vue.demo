<script src="./card.service.ts" lang="ts"></script>
<template>
  <view class="yc-card" :class="{'no-body': !isShowBody && !slots.body}" @tap.stop="onClick($event)" data-type="y-card">
    <view v-if="slots.header || info[titleProperty]" class="yc-card-head" :id="btnElId">
      <view v-if="!slots.header" class="title">
        <text>{{ info[titleProperty] }}</text>
        <view v-if="actionBtnList.length"  class="action-btn" @tap.stop="onShowAction">
          <text class="dot"></text>
          <text class="dot"></text>
          <text class="dot"></text>
        </view>
        <view v-if="showAction" class="actions-modal" :class="isPopUp ? 'pop-up' : 'pop-down'">
          <view class="arrows_up"></view>
          <slot name="action-custom"></slot>
          <view
            @tap.stop="onAction(item.className)"
            v-for="(item, index) in actionBtnList"
            :key="`card_action_${item.className}`"
            class="actions-item"
            :class="`${item.className} ${index == 0 ? 'first' : ''}`"
          >
            <view>{{ item.label }}</view>
          </view>
        </view>
      </view>
      <slot v-else name="header"></slot>
    </view>
    <slot v-if="slots.body" name="body"></slot>
    <slot v-else-if="slots['empty-body']" name="empty-body"></slot>
    <view v-else class="yc-card-body">
      <block v-for="item in bodyPropertyList" :key="`card_body_${item.name}`">
        <view
          v-if="
            (slots[`${item.name}-left`] || slots[`${item.name}-right`]) &&
            info[item.name] &&
            info[item.name] !== ''
          "
          class="info-item row-between"
        >
          <view v-if="!slots[`${item.name}-left`]"> {{ item.label }}： </view>
          <slot v-else :name="`${item.name}-left`"></slot>

          <view v-if="!slots[`${item.name}-right`]" class="info-con">
            {{ info[item.name] }}
          </view>
          <view v-else class="info-con">
            <slot :name="`${item.name}-right`"></slot>
          </view>
        </view>

        <view v-else-if="slots[item.name]" class="info-item">
          <slot :name="item.name"></slot>
        </view>

        <view
          v-else-if="info[item.name] && info[item.name] !== ''"
          class="info-item row-between"
        >
          <view class="info-label">{{ item.label }}：</view>
          <view class="info-con">{{ info[item.name] }}</view>
        </view>
      </block>
    </view>
    <view
      @tap.stop="onCloseAction"
      v-if="showAction"
      class="yc-card-mask"
    ></view>
  </view>
</template>
