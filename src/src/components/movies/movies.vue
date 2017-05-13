<template>
  <div>
    <div class="filter">
      <ul class="clearflex">
        <li class="fl">
          <span>大分类:</span>
          <a>全部</a><a class="filter-bg">电影</a><a>电视剧</a><a>动画</a>
        </li>
        <li class="tc">
          <span>题材:</span>
          <a class="filter-bg">全部</a><a>动作</a><a>喜剧</a><a>爱情</a><a>武侠</a><a>科幻</a><a
        >战争</a><a>恐怖</a><a>犯罪</a><a>悬疑</a><a>惊悚</a><a>灾难</a><a
        >家庭</a><a>剧情</a><a>伦理</a><a>情色</a><a>记录</a><a>历史</a><a
        >歌舞</a><a>冒险</a><a>奇幻</a>
        </li>
        <li class="dq">
          <span>地区:</span>
          <a class="filter-bg">全部</a><a>大陆</a><a>香港</a><a>台湾</a><a>日本</a><a>韩国</a><a>欧美</a><a>其他</a>
        </li>
        <li class="nd">
          <span>年代:</span>
          <a class="filter-bg">全部</a><a>2017</a><a>2016</a><a>2015</a><a>2014</a><a
        >2013</a><a
        >2012</a><a>2011</a><a>2009</a><a>2008</a>
        </li>
        <li class="jb">
          <span>级别:</span>
          <a>按评分</a><a class="filter-bg">按更新</a>
        </li>
      </ul>
    </div>
    <div class="aa">
      <ul class="movies-list clearflex">
        <li v-for="item in search">
          <router-link tag="a" :to="{ path: '/api/info', query: {id:item.id }}">
            <img :src=item.img alt="">
            <span>{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="pages pager-wrapper" v-if="all > 0">
      <div class="pager-pages">
        <a v-show="currentPage > 1 && showPrev" @click="go(currentPage - 1)">上一页</a>
        <a :class="{active: currentPage == 1 ? true : false}" @click="go(1)">1</a>
        <strong v-show="pages[0] > 2">...</strong>
        <a v-for="page in pages" :class="{active: currentPage == page ? true : false}" @click="go(page)">{{page}}</a>
        <strong v-show="pages[pages.length-1] < all - 1">...</strong>
        <a v-if="all > 1" :class="{active: currentPage == all ? true : false}" @click="go(all)">{{all}}</a>
        <a v-show="currentPage < all && showNext" @click="go(currentPage + 1)">下一页</a>
      </div>
      <div v-if="showJump" v-show="all > 1" class="pager-jump">
        <span>共<em class="jump-total">{{ all }}</em>页 ，跳至</span>
        <input type="number" min="1" :max="all" v-model="jumpPage" class="jump-input">
        <span>页</span>
        <a @click="go(jumpPage)">确定</a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  import {mapState} from 'vuex'
  import {mapMutations} from 'vuex'


  export default {
    props: {
      showItems: { // 显示出来的页数，如: 1 ... 34[5]67 ... 10
        type: Number,
        default: 5
      },
      showPrev: { // 是否显示“上一页”
        type: Boolean,
        default: true
      },
      showNext: { // 是否显示“下一页”
        type: Boolean,
        default: true
      },
      showJump: { // 是否显示“跳转”
        type: Boolean,
        default: true
      },
      routeName: {
        type: String
      }
    },
    data (){
      return {
        searchlist: [],

        initPage: 1,
        currentPage: 0,
        jumpPage: 0
      }
    },
    computed: {
      ...mapMutations(['clear']),
      ...mapState(['search', 'all']),
      pages () {
        let getPages = (start, end) => {
          if (start <= 1 || start > end || start >= this.all) {
            start = 2
          }
          if (end >= this.all || end < start || end <= 1) {
            end = this.all - 1
          }
          let arr = []
          for (let i = start; i <= end; i++) {
            arr.push(i)
          }
          return arr
        }
        let counts = this.showItems
        if (this.all < counts + 2) {
          return getPages(2, this.all)
        } else {
          if (this.currentPage <= Math.ceil(counts / 2)) {
            return getPages(2, counts)
          } else if (this.currentPage >= this.all - Math.floor(counts / 2)) {
            return getPages(this.all + 1 - counts, this.all - 1)
          } else {
            let half = Math.ceil(counts / 2) - 1
            let end = this.currentPage + half
            if (counts % 2 === 0) {
              end++
            }
            return getPages(this.currentPage - half, end)
          }
        }
      }
    },
    created()
    {
      this.currentPage = this.initPage;

    }
    ,
    mounted (){
      this.click_api();
      this.pagesa(this.click_api);
      this.filter('.fl', this.click_api);
      this.filter('.tc', this.click_api);
      this.filter('.dq', this.click_api);
      this.filter('.nd', this.click_api);
      this.filter('.jb', this.click_api);
    },
    methods: {
      ...mapActions(['movies']),
      go (page) {
        if (page < 1) {
          page = 1
        }
        if (page > this.all) {
          page = this.all
        }
        if (page === this.currentPage) {
          return
        }
        this.currentPage = parseInt(page, 10)

        this.$emit('go-page', {
          page: this.currentPage
        })
      },
      filter: function (name, click) {
        var ali = document.querySelector(name).querySelectorAll('a');
        for (var i = 0; i < ali.length; i++) {
          ali[i].index = i;
          ali[i].onclick = function () {
            for (var n = 0; n < ali.length; n++) {
              ali[n].className = '';
            }
            ali[this.index].className = 'filter-bg';
            click();
          }
        }
      },
      pagesa: function (click) {
        let pages = document.querySelector('.pages').querySelectorAll('a');
        for (let i = 0; i < pages.length; i++) {
          pages[i].onclick = function () {
            click();
            console.log(pages);
          }
        }
      },
      click_api: function () {
        this.searchlist = [];
        var ali = document.querySelector('.filter').querySelectorAll('a');
        var pages = document.querySelector('.pages').querySelectorAll('a');
        for (var i = 0; i < ali.length; i++) {
          if (ali[i].getAttribute('class') == 'filter-bg') {
            console.log(ali[i].innerText);
            switch (ali[i].innerText) {
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
              default: {
                this.searchlist.push(ali[i].innerText);
              }
            }
          }
        }
        for (var n = 0; n < pages.length; n++) {
          if (pages[n].className == 'active') {
            this.searchlist.push(pages[n].innerText);
          }
        }
        this.movies(this.searchlist);
        this.pagesa(this.click_api);
        console.log(this.searchlist);
        console.log(this.search.length);
      }

    },
    watch: {
      currentPage (newVal) {
        this.jumpPage = newVal
      },
      initPage (newVal) {
        if (this.currentPage !== newVal) {
          this.currentPage = newVal
        }
      }
    }

  }


</script>

<style lang="less" rel="stylesheet/less">
  .filter-bg {
    text-decoration: none;
    color: #fff !important;
    background: #065fa9;
  }

  .page-bg {
    background: red !important;

  }

  .pages {
    text-align: center;
    padding: 20px 0 30px 0;
    a {
      padding: 5px 10px;
      margin: 0 5px;
      background: #72889F;
      color: #fff;
    }

  }

  .filter {
    padding: 5px 15px;
    border: 1px solid #A1A4A9;
    font-size: 14px;
    color: #A1A4A9;
    li {
      height: 24px;

    }
    span {
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

  .pager-wrapper {
    margin-top: 15px;
    text-align: center;
  }

  .pager-pages {
    display: inline-block;
    height: 32px;
    font-size: 0;
  }

  .pager-wrapper a,
  .pager-wrapper strong {
    display: inline-block;
    min-width: 32px;
    height: 32px;
    padding: 0 10px;
    margin: 0 2px;
    font-size: 14px;
    line-height: 32px;
    text-align: center;
    color: #222;
  }

  .pager-wrapper a {
    border: 1px solid #ddd;
    border-radius: 2px;
    background-color: #fff;
    transition: all .2s;
  }

  .pager-wrapper a:hover {
    color: rgb(33, 150, 243);
    border-color: rgb(33, 150, 243);
  }

  .pager-wrapper .active {
    background-color: rgb(33, 150, 243);
    color: #fff;
    border-color: rgb(33, 150, 243);
  }

  .pager-wrapper .active:hover {
    color: #fff;
  }

  .pager-jump {
    display: inline-block;
    height: 32px;
    margin-left: 20px;
  }

  .pager-jump span {
    line-height: 32px;
  }

  .pager-jump em {
    margin: 0 5px;
    font-style: normal;
  }

  .pager-jump .jump-input {
    width: 60px;
    height: 32px;
    outline: none;
    border: 1px solid #ddd;
    font-size: 14px;
    vertical-align: top;
  }

  .pager-jump .jump-input:focus {
    border-color: rgb(33, 150, 243);
  }
</style>
