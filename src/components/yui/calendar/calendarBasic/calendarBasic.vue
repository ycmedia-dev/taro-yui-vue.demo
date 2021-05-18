<script lang="ts" src='./calendarBasic.service.ts'></script>
<template>
  <view class="calendar">
    <view class="calendar-sidebar" v-if="options.shortcuts && options.shortcuts.length">
      <view
        class="shortcut-item"
        v-for="(item, index) in options.shortcuts"
        :key="`shortcut-item-${index}`"
        @tap="onClickShortcut(item)"
      >
        {{ item.text }}
      </view>
    </view>

    <view class="calendar-body">
      <template v-if="options.type === CalendarTypeEnum.DATE">
        <KalendarController
          v-if="options.showToolBar"
          v-model="date"
        ></KalendarController>
        <KalendarWeekDayList></KalendarWeekDayList>
        <KalendarDayList
          v-model="date"
          :startDate="startDate"
          :endDate="options.endDate"
          :minDate="options.minDate"
          :maxDate="options.maxDate"
          :isMultiSelect="options.isMultiSelect"
          @onSelectDate="onSelectDate"
        ></KalendarDayList>
      </template>
      <template v-else-if="options.type === CalendarTypeEnum.MONTH">
        <KalendarControllerYear v-model="date"></KalendarControllerYear>
        <KalendarMonthList
          v-model="date"
          :startDate="startDate"
          :endDate="options.endDate"
          :minDate="options.minDate"
          :maxDate="options.maxDate"
          :isMultiSelect="options.isMultiSelect"
          @onSelectDate="onSelectDate"
        ></KalendarMonthList>
      </template>
      <template v-else-if="options.type === CalendarTypeEnum.YEAR">
        <KalendarControllerYearRange
          v-model="date"
        ></KalendarControllerYearRange>
        <KalendarYearList
          v-model="date"
          :startDate="startDate"
          :endDate="options.endDate"
          :minDate="options.minDate"
          :maxDate="options.maxDate"
          :isMultiSelect="options.isMultiSelect"
          @onSelectDate="onSelectDate"
        ></KalendarYearList>
      </template>

      <template v-else-if="options.type === CalendarTypeEnum.QUARTER">
        <KalendarControllerYear v-model="date"></KalendarControllerYear>
        <KalendarQuarterList
          v-model="date"
          :startDate="startDate"
          :endDate="options.endDate"
          :minDate="options.minDate"
          :maxDate="options.maxDate"
          :isMultiSelect="options.isMultiSelect"
          @onSelectDate="onSelectDate"
        ></KalendarQuarterList>
      </template>
    </view>
  </view>
</template>
