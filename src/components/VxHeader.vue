<template>
  <div id="vx-header">
    <div class="header-icon" v-if="headerObj.leftIcon">
      <span class="iconfont" :class="headerObj.leftIcon" @click="handleLeftIcon"></span>
      <!-- <p>md</p> -->
    </div>
    <div class="header-input">
      <span class="iconfont left-icon" :class="search.leftIcon"></span>
      <input type="text" :placeholder="search.holder" v-model="search.heInput">
      <span class="iconfont right-icon" v-if="search.rightIcon" :class="search.rightIcon"></span>
    </div>
    <div class="header-icon" v-for="(it, index) in headerObj.iconList" :key="index">
      <span class="iconfont" :class="it.icon"></span>
      <md-tag
        class="icon-tag"
        :size="mdTag.size"
        :shape="mdTag.shape"
        :sharp="mdTag.sharp"
        :fill-color="mdTag.fillColor"
        :type="mdTag.type"
        v-if="it.tag !== 0"
      >{{it.tag}}</md-tag>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Tag } from 'mand-mobile'
export default {
  name: '',
  mixins: [],
  components: {
    [Tag.name]: Tag
  },
  props: {
    headerObj: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      search: {},
      mdTag: {}
    }
  },
  computed: {},
  watch: {},
  methods: {
    handleLeftIcon () {
      this.$emit('handleLeftIcon')
    }
  },
  filters: {},
  mounted () {
    this.search = this.headerObj.search
    this.mdTag = this.headerObj.mdTag
  },
  created () {}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~assets/common/stylus/variable'
#vx-header
  position fixed
  left 0
  top 0
  right 0
  display flex
  justify-content space-between
  height 34px
  padding 5px 15px
  .header-input
    position relative
    .left-icon
      position absolute
      left 8px
      top 8px
      font-size $font-size-medium-x
    .right-icon
      position absolute
      right 8px
      top 8px
      font-size $font-size-medium-x
    input
      width 200px
      height 32px
      line-height 44px
      border 1px solid $color-text-l
      border-radius 17px
      padding-left 30px
      font-size $font-size-small
  .header-icon
    height 34px
    padding 6px
    position relative
    .icon-tag
      position absolute
      top 0
      right -5px
    .iconfont
      font-size $font-size-large-x
</style>
