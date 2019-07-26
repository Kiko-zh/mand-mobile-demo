<template>
  <div class="container">
    <vx-header :headerObj="headerObj"></vx-header>
  </div>
</template>

<script type="text/ecmascript-6">
import VxHeader from '../../components/VxHeader'
export default {
  name: '',
  mixins: [],
  components: {
    VxHeader
  },
  props: {},
  data () {
    return {
      headerObj: {
        leftIcon: 'icon-dingwei',
        search: {
          heInput: '',
          holder: '运动耳机丑翻天? 不怕!',
          leftIcon: 'icon-sousuo',
          rightIcon: 'icon-gougou'
        },
        iconList: [
          {
            icon: 'icon-dingdan',
            tag: 0
          }
        ],
        mdTag: {
          size: 'tiny',
          shape: 'circle',
          sharp: 'bottom-left',
          fillColor: '#d61819',
          type: 'fill'
        }
      }
    }
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
</style>
