<template>
  <div class="content-info">
    <div class="gif" v-if=" abc.length == 0 && searchinfo.length != 1">
      <img src="../movies/timg.gif" alt="">
    </div>
    <div class="undefined" v-if=" abc == 'undefined'">
      <p>没有找到该影片信息。</p>
    </div>
    <div v-for="item in searchinfo">

      <div class="info-box clearflex">
        <img class="movie-img" :src=item.img alt="">

        <ul class="info-right">
          <li class="movie-name">{{ item.name }}</li>
          <li><span>上映年代：</span>{{ item.time }}&nbsp;&nbsp;&nbsp;&nbsp;<span>地区:</span>{{ item.adder }}
          </li>
          <li><span>类型:</span><a v-for="val in item.type">{{ val }}</a></li>
          <li><span>导演:</span>{{ item.director }}</li>
          <li><span>主演:</span><a v-for="start in item.stars">{{ start }}</a></li>
          <li><span>评分:</span><i class="pf">{{ item.pf }}</i></li>
        </ul>
      </div>
      <div class="plot">
          <p class="plot-title">剧情介绍：</p><hr/>
          <p class="plot-container">{{ item.plot }}</p>
      </div>
      <div class="xunlei">
        <p class="plot-title">迅雷链接：</p><hr/>
          <a class="xl_url" :href=v v-for="(v,index) in item.updatahref">{{ item.updataname[index] }}</a>
      </div>


    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  import {mapActions} from 'vuex'
  import {mapState} from 'vuex'

  export default {
    data (){
      return {
          type:''
      }
    },
    computed: {
      ...mapState(['searchinfo','abc']),
    },
    methods: {
      ...mapActions(['getname', 'getinfo','change']),

    },
    created: function () {
      const id = this.$route.query.id;
      const name = this.$route.query.name;
      if (id) {
        this.getinfo(id);
      } else {
        this.getname(name);
      }

    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .content-info {
    border: 1px solid #333;
    padding: 20px;
    overflow: hidden;
    .movie-name {
      font-size: 30px;
      display: inline-block;
      padding: 10px 0 10px 0;
      text-align: left;
      width: 100%;
      font-weight: bold;
    }
    .movie-img {
      width: 20%;
      height: 300px;
      float: left;

    }
    .info-right {
      float: left;
      width: 75%;
      margin-left: 5%;
      font-weight: bold;
      span{
        color:#999;
        margin-right: 10px;
      }
      li{
        padding: 5px 0;
      }
    }

  }
  .plot{
    margin-top: 20px;
    border:1px solid #D6D6D6;
    padding: 20px 20px 20px 20px;


    .plot-container{
      line-height: 20px;
    }
  }
  .plot-title{
    font-weight: bold;
  }
  hr{
    margin:20px 0 20px;
    border-bottom: none;
  }
  .xl_url {
    display: block;
  }
  .xunlei{
    margin-top:20px ;
    padding: 20px 20px 20px 20px;
    border:1px solid #D6D6D6;
  }
  .pf{
    color:red;
  }
</style>
