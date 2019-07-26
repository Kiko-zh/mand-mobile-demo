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
        leftIcon: 'icon-tuichu',
        search: {
          heInput: '',
          holder: '您有699元红包待查',
          leftIcon: 'icon-sousuo',
          rightIcon: 'icon-gougou'
        },
        iconList: [
          {
            icon: 'icon-message',
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
  methods: {},
  filters: {},
  mounted () { },
  created () {
    console.log('this--', this.headerObj.search.heInput)
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
