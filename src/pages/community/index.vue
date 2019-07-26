<template>
  <div class="container">
    <vx-header
      :headerObj="headerObj"
      @handleLeftIcon="handleLeftIcon"
    ></vx-header>
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
        leftIcon: 'icon-personnone',
        search: {
          heInput: '',
          holder: '大家都在讨论',
          leftIcon: 'icon-sousuo',
          rightIcon: ''
        },
        iconList: [
          {
            icon: 'icon-lingdang',
            tag: 2
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
  methods: {
    handleLeftIcon () {
      console.log('click-leftIcon')
    }
  },
  filters: {},
  mounted () { },
  created () { }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
