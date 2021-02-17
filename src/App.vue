<template>
  <navi-bar></navi-bar>
  <header-navi></header-navi>
</template>

<style src="./css/index.css"></style>
<style src="./css/reset.css"></style>
<script>
import naviBar from '@/components/naviBar'
import headerNavi from '@/components/headerNavi'
export default {
  name: 'app',
  components: {
    naviBar,
    headerNavi
  }
}
</script>
