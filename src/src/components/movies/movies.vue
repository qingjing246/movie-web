
<template>
<div>
  电影列表
  <button @click="butn()">点击</button>
</div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'

 export default {
    props:['movies']
    ,
   created(){

   },
   computed:{
     ...mapGetters(['audio'])
   },

 }


</script>

<style lang="less" rel="stylesheet/less">

</style>
