<template>
  <div>
    电影列表
    <button @click="btn(123)">点击{{ getname }}</button>
    <p>{{ searchinfo.name }}</p>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  import {mapState} from 'vuex'
  import {mapMutations} from 'vuex'


  export default {
    data (){
      return {
        a: "123",
        b: ""
      }
    },
    computed: {
      ...mapMutations(['change']),
      ...mapState(['searchinfo']),
      ...mapGetters(['getname'])
  },
  created()
  {


  }
  ,
  methods:{
  ...mapActions(['btn']),
  }

  }


</script>

<style lang="less" rel="stylesheet/less">

</style>
