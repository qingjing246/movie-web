<template>
<div>
  动画列表
  <p>{{}}</p>
</div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'

  export default {
    data (){
      return {
        a:"123"
      }
    },
    computed:{
      ...mapGetters(['b'])
    },
    methods:{

    }

  }
</script>

<style lang="less" rel="stylesheet/less">

</style>
