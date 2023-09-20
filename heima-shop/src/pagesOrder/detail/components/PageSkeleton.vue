<!--
此文件为开发者工具生成，生成时间: 2023/9/20下午3:51:17
使用方法：
在 D:\前端\HTML\uniapp\xtxweixin\heima-shop\dist\dev\mp-weixin\pagesOrder\detail\detail.wxml 引入模板

```
<import src="detail.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\前端\HTML\uniapp\xtxweixin\heima-shop\dist\dev\mp-weixin\pagesOrder\detail\detail.wxss 中引入样式
```
@import "./detail.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <view class="navbar" style="padding-top: 44px">
      <view class="wrap">
        <navigator
          class="back icon-home sk-pseudo sk-pseudo-circle"
          open-type="switchTab"
        ></navigator>
        <view class="title sk-transparent sk-text-14-2857-50 sk-text">订单详情</view>
      </view>
    </view>
    <scroll-view scroll-y="true" class="viewport" id="scroller" enable-back-to-top="true">
      <view class="overview sk-image" style="padding-top: 64px">
        <view class="status sk-transparent sk-text-0-0000-127 sk-text">已取消</view>
        <view class="button-group">
          <navigator
            class="button sk-transparent sk-text-28-1250-771 sk-text"
            hover-class="none"
            style="background-position-x: 50%"
          >
            再次购买
          </navigator>
        </view>
      </view>
      <view class="shipment">
        <view class="item sk-image">
          <view class="message sk-transparent sk-text-14-2857-216 sk-text">
            您已在广州市天河区黑马程序员完成取件，感谢使用菜鸟驿站，期待再次为您服务。
          </view>
          <view class="date sk-transparent sk-text-14-2857-465 sk-text"> 2023-04-14 13:14:20 </view>
        </view>
        <view class="locate sk-image">
          <view class="user sk-transparent sk-text-14-2857-591 sk-text"> 张三 13333333333 </view>
          <view class="address sk-transparent sk-text-14-2857-589 sk-text">
            广东省 广州市 天河区 黑马程序员
          </view>
        </view>
      </view>
      <view class="goods">
        <view class="item">
          <navigator class="navigator" hover-class="none">
            <image class="cover sk-image"></image>
            <view class="meta">
              <view class="name ellipsis sk-transparent sk-text-14-2857-525 sk-text"
                >ins风小碎花泡泡袖衬110-160cm</view
              >
              <view class="type sk-transparent sk-text-22-2222-744 sk-text">藏青小花， 130</view>
              <view class="price">
                <view class="actual">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="sk-transparent sk-text-14-2857-175 sk-text">99.00</text>
                </view>
              </view>
              <view class="quantity sk-transparent sk-opacity">x1</view>
            </view>
          </navigator>
          <navigator class="navigator" hover-class="none">
            <image class="cover sk-image"></image>
            <view class="meta">
              <view class="name ellipsis sk-transparent sk-text-14-2857-781 sk-text"
                >ins风小碎花泡泡袖衬110-160cm</view
              >
              <view class="type sk-transparent sk-text-22-2222-517 sk-text">藏青小花， 130</view>
              <view class="price">
                <view class="actual">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="sk-transparent sk-text-14-2857-891 sk-text">99.00</text>
                </view>
              </view>
              <view class="quantity sk-transparent sk-opacity">x1</view>
            </view>
          </navigator>
          <view class="action">
            <view
              class="button primary sk-transparent sk-text-28-3333-52 sk-text"
              style="background-position-x: 50%"
              >申请售后</view
            >
            <navigator
              class="button sk-transparent sk-text-28-3333-498 sk-text"
              style="background-position-x: 50%"
            >
              去评价
            </navigator>
          </view>
        </view>
        <view class="total">
          <view class="row">
            <view class="text sk-transparent sk-text-0-0000-539 sk-text">商品总价: </view>
            <view
              class="symbol sk-transparent sk-text-0-0000-338 sk-text sk-pseudo sk-pseudo-circle"
              >99.00</view
            >
          </view>
          <view class="row">
            <view class="text sk-transparent sk-text-0-0000-85 sk-text">运费: </view>
            <view
              class="symbol sk-transparent sk-text-0-0000-365 sk-text sk-pseudo sk-pseudo-circle"
              >10.00</view
            >
          </view>
          <view class="row">
            <view class="text sk-transparent sk-text-0-0000-573 sk-text">应付金额: </view>
            <view
              class="symbol primary sk-transparent sk-text-0-0000-649 sk-text sk-pseudo sk-pseudo-circle"
              >109.00</view
            >
          </view>
        </view>
      </view>
      <view class="detail">
        <view class="title sk-transparent sk-text-0-0000-570 sk-text">订单信息</view>
        <view class="row">
          <view class="item sk-transparent">
            订单编号: 1704390896570601474
            <text class="copy sk-transparent sk-text-0-0000-45 sk-text">复制</text>
          </view>
          <view class="item sk-transparent sk-text-0-0000-662 sk-text"
            >下单时间: 2023-04-14 13:14:20</view
          >
        </view>
      </view>
      <view is="components/XtxGuess" class="r">
        <view class="caption XtxGuess--caption">
          <text
            class="text XtxGuess--text sk-transparent sk-text-0-0000-613 sk-text sk-pseudo sk-pseudo-circle"
            >猜你喜欢</text
          >
        </view>
      </view>
      <view class="toolbar" style="padding-bottom: 34px">
        <view class="button primary sk-transparent sk-text-14-2857-92 sk-text"> 去支付 </view>
        <view class="button sk-transparent sk-text-14-2857-794 sk-text"> 取消订单 </view>
      </view>
    </scroll-view>
  </view>
</template>
<style>
/*
此文件为开发者工具生成，生成时间: 2023/9/20下午3:51:17

在 D:\前端\HTML\uniapp\xtxweixin\heima-shop\dist\dev\mp-weixin\pagesOrder\detail\detail.wxss 中引入样式
```
@import "./detail.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}
.sk-text-14-2857-50 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-0-0000-127 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 36rpx;
  position: relative !important;
}
.sk-text-28-1250-771 {
  background-image: linear-gradient(
    transparent 28.125%,
    #eeeeee 0%,
    #eeeeee 71.875%,
    transparent 0%
  ) !important;
  background-size: 100% 64rpx;
  position: relative !important;
}
.sk-text-14-2857-216 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-465 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-591 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-589 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-525 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-22-2222-744 {
  background-image: linear-gradient(
    transparent 22.2222%,
    #eeeeee 0%,
    #eeeeee 77.7778%,
    transparent 0%
  ) !important;
  background-size: 100% 43.2rpx;
  position: relative !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-14-2857-175 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-781 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-22-2222-517 {
  background-image: linear-gradient(
    transparent 22.2222%,
    #eeeeee 0%,
    #eeeeee 77.7778%,
    transparent 0%
  ) !important;
  background-size: 100% 43.2rpx;
  position: relative !important;
}
.sk-text-14-2857-891 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-28-3333-52 {
  background-image: linear-gradient(
    transparent 28.3333%,
    #eeeeee 0%,
    #eeeeee 71.6667%,
    transparent 0%
  ) !important;
  background-size: 100% 60rpx;
  position: relative !important;
}
.sk-text-28-3333-498 {
  background-image: linear-gradient(
    transparent 28.3333%,
    #eeeeee 0%,
    #eeeeee 71.6667%,
    transparent 0%
  ) !important;
  background-size: 100% 60rpx;
  position: relative !important;
}
.sk-text-0-0000-539 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-0-0000-338 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-0-0000-85 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-0-0000-365 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-0-0000-573 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-0-0000-649 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 36rpx;
  position: relative !important;
}
.sk-text-0-0000-570 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 30rpx;
  position: relative !important;
}
.sk-text-0-0000-45 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 20rpx;
  position: relative !important;
}
.sk-text-0-0000-662 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-0-0000-613 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 32rpx;
  position: relative !important;
}
.sk-text-14-2857-92 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-794 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
