<script lang="ts" src='./upload.service.ts'></script>
<template>
  <view class='upload-img-out'>
    <view class='img-item' v-for="(item, index) in imgList" :key="`img-item-${index}`">
      <image v-if="item.fileType === UploadTypeEnum.IMAGE" class='img' :src="item.url"></image>
      <image v-else-if="item.fileType === UploadTypeEnum.PDF" class='img' :src="IconPdf"></image>
      <video v-else class='img' :src="item.url"></video>

      <template v-if="item.isLoading === '1'">
        <view class='mask'>
          <image class='loading' :src="IconLoading"></image>
        </view>
      </template>


      <template v-if="item.isLoading === '3'">
        <view class='mask' @tap="onClickUploadAgain(item, index)">
          <image class='loading-again' :src="IconFresh"></image>
        </view>
      </template>


      <template v-if="item.isLoading !== '1' && pattern !== 'view'">
        <view class='delete' @tap="onClickDeleteImg($event, index)">
          <image class="img-remove" :src="IconCloseCircle"></image>
        </view>
      </template>

      <template v-if="item.isLoading === '2'">
        <view class='mask' @tap="onClickPreviewImg($event, index)">
          <image class="img-preview" :src="IconPreview"></image>
        </view>
      </template>

    </view>

    <template v-if="pattern !== 'view'">
      <view v-if="options.count>imgList.length" class="upload-img-btn" @tap="onClickUpLoad">
        <image class="img" :src="IconPlus"></image>
      </view>
    </template>


    <view class="video-modal" v-if="isShowVideoModal">
      <view class="cover-bg" @tap="onHideModal"></view>
      <view class="video-body">
        <video class="viedo" :src="videoModalUrl"></video>
      </view>
    </view>
  </view>
</template>
