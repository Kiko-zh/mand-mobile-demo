<template>
  <div id="app">
    <router-view/>
    <!-- router组件渲染的区域 -->
    <vx-footer></vx-footer>
  </div>
</template>

<script>
import VxFooter from './components/VxFooter'
export default {
  name: 'App',
  components: {
    VxFooter
  }
}
</script>

<style>
</style>
