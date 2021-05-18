<script lang="ts" src="./searchBar.service.ts"></script>
<template>
  <view
    class="y-search-bar"
    :class="[showRowList.length > 1 ? 'hasFilter' : '', type]"
  >
    <view class="search-bar-view">
      <view class="search-box">
        <image :src="IconSearch" class="search-icon"></image>
        <view class="input-view" :class="`search-bar_${showRowList[0].type}`">
          <template v-for="(item, index) in showRowList">
            <view
              :key="`head-component-${index}`"
              class="inner"
              v-if="index === 0"
            >
              <component
                :is="item.type"
                v-model="modelValue[item.property]"
                :options="item.options"
                @onClick="onCatchClickBar(item.type)"
                @onClear="onCatchClear(item.type, item.property)"
              ></component>
            </view>
          </template>
        </view>

        <template v-if="showRowList.length > 1">
          <view class="filter-icon-view" @tap="onFilter">
            <image :src="IconFilter" class="filter-icon"></image>
          </view>
        </template>

        <view class="search-btn" @tap="onSearch">搜索</view>
      </view>

      <slot></slot>
    </view>

    <view v-show="isShowFilterModal" class="filter-view">
      <view class="filter-options">
        <block
          v-for="(item, index) in showRowList"
          :key="`filter-component-${index}`"
        >
          <view class="option-wrapper" v-if="index > 0 && item.show">
            <view class="label">{{ item.label }}</view>
            <view class="content-view" :class="`${item.type}`">
              <component
                :is="item.type"
                v-model="modelValue[item.property]"
                :options="item.options"
                @onClick="onCatchClickRow(index)"
                @onClear="onCatchClear(item.type, item.property)"
              ></component>
            </view>
          </view>
        </block>

        <view class="action-btn">
          <view class="btn reset" @tap="onReset">重置</view>
          <view class="btn confirm" @tap.stop="onSearch">完成</view>
        </view>
      </view>
      <view class="overlay" @tap.stop="onClose"></view>
    </view>
  </view>
</template>
