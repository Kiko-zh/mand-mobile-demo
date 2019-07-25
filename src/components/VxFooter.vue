<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/home">
      <div class="tab-link">
        <span class="iconfont icon-icon"></span>
        <span class="f-title">首页</span>
      </div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/community">
      <div class="tab-link">
        <span class="iconfont icon-buoumaotubiao02"></span>
        <span class="f-title">社区</span>
      </div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/financial">
      <div class="tab-link">
        <span class="iconfont icon-licai"></span>
        <span class="f-title">理财</span>
      </div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/life">
      <div class="tab-link">
        <span class="iconfont icon-shenghuo"></span>
        <span class="f-title">生活</span>
      </div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/mine">
      <div class="tab-link">
        <span class="iconfont icon-profile"></span>
        <span class="f-title">我的</span>
      </div>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  mixins: [],
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  filters: {},
  mounted () { },
  created () { }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~assets/common/stylus/variable'
.tab
  border-top 1px solid #e5e5e5
  position fixed
  left 0
  bottom 0
  right 0
  display flex
  height 44px
  .tab-item
    flex 1
    text-align center
    .tab-link
      padding 5px
      color $color-text-1
      display flex
      flex-direction column
      justify-content space-between
      align-items center
      .iconfont
        font-size $font-size-large
        height 24px
      .f-title
        font-size $font-size-small-s
    &.router-link-active
      .tab-link
        color $color-theme
        // border-bottom 2px solid $color-theme
</style>
