<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import CustomNavBar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import PageSkeleton from './components/PageSkeleton.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import type { XtxGuessInstance } from '@/types/component'

// 防抖参数
const isLoading = ref<boolean>(false)

// 获取并存储轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  console.log(res)
  bannerList.value = res.result
}
// 获取并存储前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}
// 获取并存储热门推荐数据
const HotList = ref<HotItem[]>([])
const getHotPanelData = async () => {
  const res = await getHomeHotAPI()
  HotList.value = res.result
}
// 页面是否正在加载
const IsLoading = ref(false)
onLoad(async () => {
  IsLoading.value = true
  await Promise.all([getHomeBannerData(), getCategoryData(), getHotPanelData()])
  IsLoading.value = false
})
// guesslike组件实例
const guessRef = ref<XtxGuessInstance>()
// 滚动触底处理函数
const onScrolltolower = () => {
  if (isLoading.value === true) return
  guessRef.value?.getMore()
}
// 自定义事件处理函数
const sendloading = (val: boolean): void => {
  isLoading.value = val
}
// 是否触发下拉刷新
const isTriggered = ref(false)
const onRefresherrefresh = async () => {
  // 开始动画
  isTriggered.value = true
  // 加载数据
  // await getHomeBannerData()
  // await getCategoryData()
  // await getHotPanelData()
  // 重置猜你喜欢数据
  guessRef.value?.resetData()
  await Promise.all([
    getHomeBannerData(),
    getCategoryData(),
    getHotPanelData(),
    guessRef.value?.getMore(),
  ])

  // 关闭动画
  isTriggered.value = false
}
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavBar />
  <!-- 滚动容器:refresher-enabled:开启下拉刷新 -->
  <scroll-view
    scroll-y
    class="scroll-view"
    @scrolltolower="onScrolltolower"
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
  >
    <PageSkeleton v-if="IsLoading" />
    <template v-else>
      <!-- 自定义轮播图 -->
      <XtxSwiper :list="bannerList" />
      <!-- 分类面板 -->
      <CategoryPanel :list="categoryList" />
      <!-- 热门推荐 -->
      <HotPanel :list="HotList" />
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef" :loading="isLoading" @sendLoading="sendloading" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
