<template>
  <div class="content-info">
    <div class="undefined" v-if=" abc == 'undefined'">
      <p>没有找到该影片信息。</p>
    </div>
    <div class="gif" v-if="searchinfo.length == 0 && abc.length == 0">
      <img src="../movies/timg.gif" alt="">
    </div>
    <div v-for="item in searchinfo">
      <span class="movie-name">{{ item.name }}</span>
      <div class="info-box clearflex">
        <img class="movie-img" :src=item.img alt="">
        <ul class="info-right">
          <li><span>上映年代：</span>{{ item.time }}&nbsp;&nbsp;&nbsp;&nbsp;<span>地区:</span>{{ item.adder }}
          </li>
          <li><span>类型:</span>{{ item.type }}</li>
          <li><span>导演:</span>{{ item.director }}</li>
          <li><span>主演:</span>{{ item.stars }}</li>
        </ul>
      </div>
      <p>{{ searchinfo[0].plot }}</p>
      <a class="xl_url" :href=item v-for="item in searchinfo[0].updatahref">{{ item }}</a>

    </div>

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
      font-size: 20px;
      display: block;
      padding: 10px 0 10px 30px;
    }
    .movie-img {
      width: 150px;
      height: 230px;
      float: left;
    }
    .info-right {
      float: left;

    }

  }

  .xl_url {
    display: block;
  }
</style>
