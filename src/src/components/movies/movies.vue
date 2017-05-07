<template>
  <div>
  <div class="filter">
    <ul>
      <li class="fl">
        <span>大分类:</span>
        <a >全部</a><a class="filter-bg">电影</a><a >电视剧</a><a >动画</a>
      </li>
      <li class="tc">
        <span>题材:</span>
        <a  class="filter-bg">全部</a><a>动作</a><a>喜剧</a><a >爱情</a><a>武侠</a><a >科幻</a><a
        href="">战争</a><a >恐怖</a><a >犯罪</a><a >悬疑</a><a >惊悚</a><a>灾难</a><a
        href="">家庭</a><a >剧情</a><a >伦理</a><a >情色</a><a >记录</a><a >历史</a><a
        href="">歌舞</a><a >冒险</a><a >奇幻</a>
      </li>
      <li class="dq">
        <span>地区:</span>
        <a class="filter-bg">全部</a><a >大陆</a><a >香港</a><a>台湾</a><a >日本</a><a>韩国</a><a>欧美</a><a>其他</a>
      </li>
      <li class="nd">
        <span>年代:</span>
        <a  class="filter-bg">全部</a><a >2017</a><a >2016</a><a >2015</a><a >2014</a><a
        >2013</a><a
        >2012</a><a >2011</a><a >2009</a><a >2008</a>
      </li>
      <li class="jb">
        <span>级别:</span>
        <a >按评分</a><a  class="filter-bg">按更新</a>
      </li>
    </ul>
  </div>
  <div class="aa">
    <ul class="movies-list">
      <li v-for="item in search">
        <router-link tag="a" :to="{ path: '/api/info', query: {id:item.id }}"  >
          <img :src=item.img  alt="">
          <span>{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
  </div>
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
        searchlist:[]
      }
    },
    computed: {
      ...mapMutations(['clear']),
      ...mapState(['search', 'searchname']),
    },
    created()
    {


    }
    ,
    mounted (){
      this.click_api();
      this.filter('.fl',this.click_api);
      this.filter('.tc',this.click_api);
      this.filter('.dq',this.click_api);
      this.filter('.nd',this.click_api);
      this.filter('.jb',this.click_api);
    },
    methods: {
      ...mapActions(['movies']),
      filter:function (name,click){
        var ali = document.querySelector(name).querySelectorAll('a');
        for(var i = 0;i < ali.length;i++){
          ali[i].index = i;
          ali[i].onclick = function (){
            for(var n = 0;n < ali.length;n++) {
              ali[n].className = '';
            }
            ali[this.index].className = 'filter-bg'
            click();
          }
        }
      },
      click_api: function (){
          this.searchlist = [];
        var ali = document.querySelector('.filter').querySelectorAll('a');
        for(var i =0;i<ali.length;i++){
            if(ali[i].getAttribute('class') == 'filter-bg'){
                console.log(ali[i].innerText);
                switch (ali[i].innerText){
                  case '全部':
                    this.searchlist.push('');
                    break;
                  case '电影':
                    this.searchlist.push('movie');
                    break;
                  case '电视剧':
                    this.searchlist.push('tv');
                    break;
                  case '动画':
                    this.searchlist.push('donghua');
                    break;
                  case '按更新':
                    this.searchlist.push('-1');
                    break;
                  case '按评分':
                    this.searchlist.push('-1');
                    break;
                  default:{
                    this.searchlist.push(ali[i].innerText);
                  }
                }

            }
        }
        this.movies(this.searchlist);
        console.log(this.search);
      }

    }

  }


</script>

<style lang="less" rel="stylesheet/less">
  .filter-bg{
    text-decoration: none;
    color: #fff !important;
    background: #065fa9;
  }
  .filter {
    padding: 5px 15px;
    border: 1px solid #A1A4A9;
    font-size: 14px;
    color: #A1A4A9;
    li{
      height: 24px;

    }
    span{
      height: 24px;
      display: inline-block;
    }
    a {
      display: inline-block;
      height: 24px;
      color: #3F475C;
      padding: 0 8px;
      line-height: 24px;
    }
  }
</style>
