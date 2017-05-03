<template>
<div class="content-info">
  <span class="movie-name">{{ searchinfo[0].name }}</span>
  <div class="info-box clearflex">
    <img class="movie-img" :src=searchinfo[0].img alt="">
      <ul class="info-right">
        <li><span>上映年代：</span>{{ searchinfo[0].time }}&nbsp;&nbsp;&nbsp;&nbsp;<span>地区:</span>{{ searchinfo[0].adder }}</li>
        <li><span>类型:</span>{{ searchinfo[0].type }}</li>
        <li><span>导演:</span>{{ searchinfo[0].director }}</li>
        <li><span>主演:</span>{{ searchinfo[0].stars }}</li>
      </ul>
  </div>
  <p>{{ searchinfo[0].plot }}</p>
  <a class="xl_url" :href=item v-for="item in searchinfo[0].updatahref">{{ item }}</a>
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
      ...mapState(['searchinfo']),
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
  .content-info{
    border:1px solid #333;
    padding: 20px;
    overflow: hidden;
    .movie-name{
      font-size: 20px;
      display: block;
      padding: 10px 0 10px 30px;
    }
    .movie-img{
      width: 150px;
      height: 230px;
      float: left;
    }
    .info-right{
      float: left;

    }

  }
  .xl_url{
    display: block;
  }
</style>
