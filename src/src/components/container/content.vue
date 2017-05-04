<template>
  <!--轮播图-->
  <div class="content">
    <div class="carousel">
      <div class="carousel-content ">
        <a href="#" class="carousel-img hide show">
          <img src="./1.jpg" alt="">
        </a>
        <a href="#" class="carousel-img">
          <img src="./2.jpg" alt="">
        </a>
        <a href="#" class="carousel-img">
          <img src="./1.jpg" alt="">
        </a>
      </div>
      <ul class="carousel-bottom-new">
        <li>
          <a href="">
            <p>啊啊啊啊</p>
            <p>啊啊啊啊</p>
          </a>
        </li>
        <li>
          <a href="">
            <p>啊啊啊啊</p>
            <p>啊啊啊啊</p>
          </a>
        </li>
        <li>
          <a href="">
            <p>啊啊啊啊</p>
            <p>啊啊啊啊</p>
          </a>
        </li>
        <li>
          <a href="">
            <p>啊啊啊啊</p>
            <p>啊啊啊啊</p>
          </a>
        </li>
        <li>
          <a href="">
            <p>啊啊啊啊</p>
            <p>啊啊啊啊</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="hot-movie">
      <P class="title-list">热门电影</P>
      <hr>
      <div class="movies-list">
        <ul class="ul-list clearflex">
          <li ><a @click="url" movieid="969" title="极限特工3：终极回归">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23057.jpg" alt="极限特工3：终极回归">
            <span>极限特工3：终极回归</span>
          </a></li>
          <li ><a title="功夫瑜伽">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-2/23060.jpg" alt="功夫瑜伽">
            <span>功夫瑜伽</span>
          </a></li>
          <li ><a  title="帕特森">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23261.jpg" alt="帕特森">
            <span>帕特森</span>
          </a></li>
          <li ><a title="一条狗的使命">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23366.jpg" alt="一条狗的使命">
            <span>一条狗的使命</span>
          </a></li>
          <li ><a title="八月">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23391.jpg" alt="八月">
            <span>八月</span>
          </a></li>
          <li ><a  title="逃出绝命镇">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23389.jpg" alt="逃出绝命镇">
            <span>逃出绝命镇</span>
          </a></li>
          <li ><a title="金刚狼3：殊死一战">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23340.jpg" alt="金刚狼3：殊死一战">
            <span>金刚狼3：殊死一战</span>
          </a></li>
          <li ><a title="了不起的菲丽西">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23341.jpg" alt="了不起的菲丽西">
            <span>了不起的菲丽西</span>
          </a></li>
          <li ><a title="怒">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23342.jpg" alt="怒">
            <span>怒</span>
          </a></li>
          <li ><a title="决战食神">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23314.jpg" alt="决战食神">
            <span>决战食神</span>
          </a></li>
          <li ><a title="爱乐之城">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23058.jpg" alt="爱乐之城">
            <span>八月</span>
          </a></li>
          <li ><a title="功夫瑜伽">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23336.jpg" alt="西游伏妖篇">
            <span>西游伏妖篇</span>
          </a></li>
        </ul>
      </div>
    </div>
    <div class="gx-movie">
      <div class="clearflex">
        <p class="title-list">资源更新</p>
        <ul class="tab-list clearflex">
          <li class="tab-li">
            <a class="tab-bg" @mouseover="showtab" alt="1">更新</a>
          </li>
          <li class="tab-li">
            <a @mouseover="showtab" alt="2">动作片</a>
          </li>
          <li class="tab-li">
            <a @mouseover="showtab" alt="3">喜剧片</a>
          </li>
          <li class="tab-li">
            <a @mouseover="showtab" alt="4">爱情片</a>
          </li>
          <li class="tab-li">
            <a @mouseover="showtab" alt="5">科幻片</a>
          </li>
          <li class="tab-li">
            <a @mouseover="showtab" alt="6">恐怖片</a>
          </li>
          <li class="tab-li">
            <a @mouseover="showtab" alt="7">剧情片</a>
          </li>
          <li class="tab-li">
            <a @mouseover="showtab" alt="8">战争片</a>
          </li>
        </ul>
      </div>
      <hr>
      <div class="movies-list">
        <ul class="ul-list clearflex" v-show="a.a">
          <li ><a @click="url" movieid="969" title="极限特工3：终极回归">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23057.jpg" alt="极限特工3：终极回归">
            <span>极限特工3：终极回归</span>
          </a></li>
          <li ><a title="功夫瑜伽">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-2/23060.jpg" alt="功夫瑜伽">
            <span>功夫瑜伽</span>
          </a></li>
          <li ><a  title="帕特森">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23261.jpg" alt="帕特森">
            <span>帕特森</span>
          </a></li>
          <li ><a title="一条狗的使命">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23366.jpg" alt="一条狗的使命">
            <span>一条狗的使命</span>
          </a></li>
          <li ><a title="八月">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23391.jpg" alt="八月">
            <span>八月</span>
          </a></li>
          <li ><a  title="逃出绝命镇">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23389.jpg" alt="逃出绝命镇">
            <span>逃出绝命镇</span>
          </a></li>
          <li ><a title="金刚狼3：殊死一战">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23340.jpg" alt="金刚狼3：殊死一战">
            <span>金刚狼3：殊死一战</span>
          </a></li>
          <li ><a title="了不起的菲丽西">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23341.jpg" alt="了不起的菲丽西">
            <span>了不起的菲丽西</span>
          </a></li>
          <li ><a title="怒">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23342.jpg" alt="怒">
            <span>怒</span>
          </a></li>
          <li ><a title="决战食神">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23314.jpg" alt="决战食神">
            <span>决战食神</span>
          </a></li>
          <li ><a title="爱乐之城">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23058.jpg" alt="爱乐之城">
            <span>八月</span>
          </a></li>
          <li ><a title="功夫瑜伽">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23336.jpg" alt="西游伏妖篇">
            <span>西游伏妖篇</span>
          </a></li>
        </ul>
        <ul class="clearflex" v-show="a.b">
          <li><a href="">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23057.jpg" alt="">
            <span>22222222222222</span>
          </a></li>

        </ul>
        <ul class="clearflex" v-show="a.c">
          <li><a href="">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23057.jpg" alt="">
            <span>cccccc</span>
          </a></li>
        </ul>
        <ul class="clearflex" v-show="a.d">
          <li><a href="">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23057.jpg" alt="">
            <span>ddddd</span>
          </a></li>
        </ul>
        <ul class="clearflex" v-show="a.e">
          <li><a href="">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23057.jpg" alt="">
            <span>eeeeee</span>
          </a></li>
        </ul>
        <ul class="clearflex" v-show="a.f">
          <li><a href="">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23057.jpg" alt="">
            <span>ffffff</span>
          </a></li>
        </ul>
        <ul class="clearflex" v-show="a.g">
          <li><a href="">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23057.jpg" alt="">
            <span>ggggg</span>
          </a></li>
        </ul>
        <ul class="clearflex" v-show="a.h">
          <li><a href="">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23057.jpg" alt="">
            <span>hhhhhhh</span>
          </a></li>
        </ul>
      </div>
    </div>
	 <div class="gx-movie">
      <div class="clearflex">
        <p class="title-list">最新电视剧</p>
        <ul class="tab-list clearflex">
          <li class="tab-li">
            <a class="tab-bg" @mouseover="showtab" alt="1">最新</a>
          </li>
          <li class="tab-li">
            <a @mouseover="showtab" alt="2">国产剧</a>
          </li>
          <li class="tab-li">
            <a @mouseover="showtab" alt="3">港台剧</a>
          </li>
          <li class="tab-li">
            <a @mouseover="showtab" alt="4">欧美剧</a>
          </li>
          <li class="tab-li">
            <a @mouseover="showtab" alt="5">日韩片</a>
          </li>
        </ul>
      </div>
      <hr>
      <div class="movies-list">
        <ul class="ul-list clearflex" v-show="a.a">
          <li ><a @click="url" movieid="969" title="极限特工3：终极回归">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23057.jpg" alt="极限特工3：终极回归">
            <span>极限特工3：终极回归</span>
          </a></li>
          <li ><a title="功夫瑜伽">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-2/23060.jpg" alt="功夫瑜伽">
            <span>功夫瑜伽</span>
          </a></li>
          <li ><a  title="帕特森">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23261.jpg" alt="帕特森">
            <span>帕特森</span>
          </a></li>
          <li ><a title="一条狗的使命">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23366.jpg" alt="一条狗的使命">
            <span>一条狗的使命</span>
          </a></li>
          <li ><a title="八月">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23391.jpg" alt="八月">
            <span>八月</span>
          </a></li>
          <li ><a  title="逃出绝命镇">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23389.jpg" alt="逃出绝命镇">
            <span>逃出绝命镇</span>
          </a></li>
          <li ><a title="金刚狼3：殊死一战">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23340.jpg" alt="金刚狼3：殊死一战">
            <span>金刚狼3：殊死一战</span>
          </a></li>
          <li ><a title="了不起的菲丽西">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23341.jpg" alt="了不起的菲丽西">
            <span>了不起的菲丽西</span>
          </a></li>
          <li ><a title="怒">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23342.jpg" alt="怒">
            <span>怒</span>
          </a></li>
          <li ><a title="决战食神">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23314.jpg" alt="决战食神">
            <span>决战食神</span>
          </a></li>
          <li ><a title="爱乐之城">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23058.jpg" alt="爱乐之城">
            <span>八月</span>
          </a></li>
          <li ><a title="功夫瑜伽">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23336.jpg" alt="西游伏妖篇">
            <span>西游伏妖篇</span>
          </a></li>
        </ul>
        <ul class="clearflex" v-show="a.b">
          <li><a href="">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23057.jpg" alt="">
            <span>22222222222222</span>
          </a></li>

        </ul>
        <ul class="clearflex" v-show="a.c">
          <li><a href="">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23057.jpg" alt="">
            <span>cccccc</span>
          </a></li>
        </ul>
        <ul class="clearflex" v-show="a.d">
          <li><a href="">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23057.jpg" alt="">
            <span>ddddd</span>
          </a></li>
        </ul>
        <ul class="clearflex" v-show="a.e">
          <li><a href="">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23057.jpg" alt="">
            <span>eeeeee</span>
          </a></li>
        </ul>
        <ul class="clearflex" v-show="a.f">
          <li><a href="">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23057.jpg" alt="">
            <span>ffffff</span>
          </a></li>
        </ul>
        <ul class="clearflex" v-show="a.g">
          <li><a href="">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23057.jpg" alt="">
            <span>ggggg</span>
          </a></li>
        </ul>
        <ul class="clearflex" v-show="a.h">
          <li><a href="">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23057.jpg" alt="">
            <span>hhhhhhh</span>
          </a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    data (){
      return {
        a: {
          a: true,
          b: '',
          c: '',
          d: '',
          e: '',
          f: '',
          g: '',
          h: ''
        }
      }
    },
    methods: {
      ...mapActions(['getinfo']),
      showtab: function (event) {
        var Oli = document.getElementsByClassName('tab-list')[0].querySelectorAll('a');
        for (var i = 0; i < Oli.length; i++) {
          Oli[i].className = '';
        }
        for (i in this.a) {
          this.a[i] = false;
        }
        event.target.className = "tab-bg";
        switch (event.target.getAttribute('alt')) {
          case '1':
            this.a.a = true
            break;
          case '2':
            this.a.b = true
            break;
          case '3':
            this.a.c = true
            break;
          case '4':
            this.a.d = true
            break;
          case '5':
            this.a.e = true
            break;
          case '6':
            this.a.f = true
            break;
          case '7':
            this.a.g = true
            break;
          case '8':
            this.a.h = true
            break;
        }
      },
      url: function (event) {
        let m = event.path[1].getAttribute('movieid');
        this.$router.push({path:"/api/info?id="+m});
        /*this.getinfo(m);
        console.log(m);*/
      }
    }

  };

</script>

<style lang="less" rel="stylesheet/less">
  //复用样式
  .tab-bg {
    background: #065fa9;
    color: #fff;
  }
  .ul-list{
	  padding:20px 0;
	  
  }

  //轮播图
  .content {
    .carousel {
      margin-bottom: 20px;
      position: relative;
      .carousel-content {
        position: relative;
        a {
          display: inline-block;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          position: absolute;
        }

        a:nth-child(1) {
          position: inherit;
        }

        img {
          width: 1000px;
        }

      }
      .carousel-bottom-new {
        display: inline-block;
        width: 1000px;
        height: 60px;
        background: rgba(12, 15, 20, 0.9);
        position: absolute;
        bottom: 0;
        left: 0;

        li {
          float: left;
          text-align: center;

          a {
            padding: 10px 0;
            color: #fff;
            height: 60px;
            width: 200px;
            display: inline-block;
            box-sizing: border-box;
            border-left: 1px solid #383838;

            p {
              line-height: 20px;
            }

          }
        }

      }
    }

    .hot-movie {
      padding: 10px 5px;
      
    }
	.movies-list {
        a {
          font-weight: 600;
          color: #333;
          &:hover {
            color: red;
            text-decoration: underline;
          }
        }
      
      span {
        font-style: normal;
        display: block;
        text-align: center;
        width: 145px;
        height: 30px;
        overflow: hidden;
        line-height: 30px;
      }
      li {
        box-sizing: border-box;
        width: 145px;
        margin: 10px 10px;
        float: left;
        a {
          display: block;
        }
      }
      img {
        height: 195px;
        width: 100%;
        padding: 3px;
        border: 1px solid #333;
        box-sizing: border-box;
        &:hover {
          border: 1px solid red;
        }
      }
	}
	  
	
	  
	  
    .title-list {
      padding: 5px;
      display: inline-block;
      background: #065fa9;
      color: #fff;

    }

    .gx-movie {
      .title-list {
        float: left;
      }
      .tab-list {
        float: left;
        margin-left: 200px;
		
        li {
			
			float: left;
			padding: 0;
          a {
			  display:inline-block;
			text-align:center;
			padding:5px 0;
			width:80px;
          }
        }

      }

    }
  }
</style>
