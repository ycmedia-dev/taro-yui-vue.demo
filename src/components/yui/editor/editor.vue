<script lang="ts" src='./editor.service.ts'></script>
<template>
  <view class="y-editor">
    <view class="toolbar" @tap="onClickToolBar">
      <view class="tool-item"
            :class="`tool-item-${item}`"
            v-for="(item, index) in options.toolList"
            :key="`img-item-${index}`">
        <template v-if="customImgNameList.includes(item)">
          <component v-model="color"
                     :name="ImgElNameAndValue[item].name"
                     :formats="formats"
                     :is="YEditorComponentName[item]"
                     @getName="onCatchGetComponentName"
                     @clear="onCatchClearColor"
          ></component>
        </template>

        <template v-else>
          <image class="img_icon"
                 mode="aspectFit"
                 :src="`${baseImgUrl}${(SameFormatNameImgList.includes(item) && formats[ImgElNameAndValue[item].name] === ImgElNameAndValue[item].value) ||  (!SameFormatNameImgList.includes(item) && formats[ImgElNameAndValue[item].name]) ? 'select/'+item+'_select' : item}.svg?`"
                 :data-name="ImgElNameAndValue[item].name"
                 :data-value="ImgElNameAndValue[item].value"></image>
        </template>
      </view>
    </view>
    <editor id="editor" class="ql-container"
            :placeholder="options.placeholder"
            showImgSize
            showImgToolbar
            showImgResize
            @statuschange="onStatusChange"
            :read-only="options.readOnly"
            @ready="onEditorReady" @blur="onBlurEditor"></editor>
  </view>
</template>
