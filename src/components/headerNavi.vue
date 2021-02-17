<template>
  <div class="header-navi-wrapper">
    <div class="header-navi w clearfix">

      <!-- logo -->
      <h1 class="logo">
        <a href="/" class="logoimg">
          <img src="../img/zw.jpg" title="首页">
        </a>
      </h1>

      <!-- 用户功能 -->
      <ul class="user-service">
        <li><router-link to="/coachAppointment">私教预约</router-link></li>
        <li><router-link to="/gymAbout">签约健身房</router-link></li>
        <li><router-link to="/coachTest">教练认证</router-link></li>
        <li><router-link to="/gymTest">场地认证</router-link></li>
        <li><router-link to="/training">健身圈</router-link></li>
        <router-view></router-view>
<!--        <div class="user-service-demo">-->
<!--          <div style="text-align: center; font-size: 30px;">待开发</div>-->
<!--        </div>-->
      </ul>

      <!-- 搜索 -->
      <div class="search-bar-wrapper">
        <form action="#">
          <input class="search-input" type="text" name="search-content">
          <button class="search-button">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerNavi'
}
</script>

<style src="../css/headerNavi.css">

</style>
