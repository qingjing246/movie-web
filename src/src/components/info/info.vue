<template>
<div>
  电影介绍
  <img :src=movie_info[0].img alt="">
  <span>{{ movie_info[0].name }}</span>
  <p>{{ movie_info[0].plot }}</p>
  <a class="xl_url" :href=item v-for="item in movie_info[0].updatahref">{{ item }}</a>
</div>
</template>
<script type="text/ecmascript-6">
  import {mapActions} from 'vuex'
  import {mapState} from 'vuex'

  export default {
      data (){
          return {

          }
      },
    computed: {
      ...mapState(['movie_info']),
    },
    methods:{
      ...mapActions(['getinfo']),

    },
    created:function (){
          var id =this.$route.query.id;
          this.getinfo(id);
      }

  }
</script>

<style lang="less" rel="stylesheet/less">
  .xl_url{
    display: block;
  }
</style>
