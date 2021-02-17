<template>
  <!-- 导航栏 -->
  <div class="navi-bar-wrapper">
    <div class="navi-bar">
      <!-- 位置信息 -->
      <div class="position">

        <!-- 当前位置信息 -->
        <div class="current-city">
          <i class="fas fa-map-marker-alt"></i>
          <a id="current-city-a" href="javascript:;">沈阳</a>
        </div>

        <!-- 城市列表 -->
        <div class="city-list clearfix">
          <table>
            <tr>
              <td><a href="javascript:;">北京</a></td>
              <td><a href="javascript:;">上海</a></td>
              <td><a href="javascript:;">重庆</a></td>
              <td><a href="javascript:;">天津</a></td>
            </tr>
            <tr>
              <td><a href="javascript:;">沈阳</a></td>
              <td><a href="javascript:;">大连</a></td>
              <td><a href="javascript:;">葫芦岛</a></td>
              <td><a href="javascript:;">广州</a></td>
            </tr>
            <tr>
              <td><a href="javascript:;">深圳</a></td>
              <td><a href="javascript:;">南京</a></td>
              <td><a href="javascript:;">西安</a></td>
              <td><a href="javascript:;">长春</a></td>
            </tr>

          </table>
          <span>更多城市待加入！</span>
        </div>

      </div>

      <!-- 功能选择栏 -->
      <ul class="service">
        <li><a href="index.html">首页</a></li>
        <li class="line">|</li>
        <li><a href="javascript:;">资讯</a></li>
        <li class="line">|</li>
        <li><a href="javascript:;">商业合作</a></li>
        <li class="line">|</li>
        <li class="appwrapper">
          <a class="app" href="javascript:;">下载app
            <div class="qrcode">
              <img src="../img/qrcode.jpg"><br>
              <span>下载私教达app</span>
            </div>
          </a>
        </li>
        <li class="line">|</li>
        <li class="mini-program-wrapper">
          <a class="mini-program" href="javascript:;">小程序
            <div class="mini-program-code">
              <img src="../img/qrcode.jpg"><br>
              <span>进入私教达小程序</span>
            </div>
          </a>
        </li>
        <li class="line">|</li>
        <li><a href="javascript:;">协议规则</a></li>
      </ul>

      <!-- 用户信息栏 -->
      <ul class="user-info">
        <li><a href="javascript:;">登录</a></li>
        <li class="line">|</li>
        <li><a href="javascript:;">注册</a></li>
        <li class="line">|</li>
        <li><a href="javascript:;">消息</a></li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'naviBar'
}
window.onload = function () {
  const changeCity = document.getElementsByClassName('city-list')[0].getElementsByTagName('a')
  for (let i = 0; i < changeCity.length; i++) {
    console.log(changeCity[i])
    changeCity[i].onclick = function () {
      var changeCityName = this.innerHTML
      document.getElementById('current-city-a').innerHTML = changeCityName
    }
  }
}
</script>
<style src="../css/naviBar.css">

</style>
