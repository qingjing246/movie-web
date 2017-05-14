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

    </div>
    <div class="hot-movie">
      <P class="title-list">热门电影</P>
      <hr>
      <div class="movies-list">
        <ul class="ul-list clearflex">
          <li ><a @click="url" title="肖申克的救赎">
            <i class="before">2012</i><i class="after">9.6分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/8862.jpg" alt="肖申克的救赎">
            <span>肖申克的救赎</span>
          </a></li>
          <li ><a @click="url" title="钢琴家">
            <i class="before">2002</i><i class="after">9分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2016-2/9111.jpg" alt="钢琴家">
            <span>钢琴家</span>
          </a></li>
          <li ><a @click="url" title="穹顶之下">
            <i class="before">2015</i><i class="after">9.5分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2015-12/11194.jpg" alt="穹顶之下">
            <span>穹顶之下</span>
          </a></li>
          <li ><a @click="url"  title="美丽人生">
            <i class="before">1997</i><i class="after">9.5分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2847.jpg" alt="美丽人生">
            <span>美丽人生</span>
          </a></li>
          <li ><a @click="url" title="辛德勒的名单">
            <i class="before">1993</i><i class="after">9.4分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23057.jpg" alt="辛德勒的名单">
            <span>辛德勒的名单</span>
          </a></li>
          <li ><a @click="url" title="这个杀手不太冷">
            <i class="before">1994</i><i class="after">9.4分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/1500.jpg" alt="这个杀手不太冷">
            <span>这个杀手不太冷</span>
          </a></li>
          <li ><a @click="url" title="阿甘正传">
            <i class="before">1994</i><i class="after">9.4分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2266.jpg" alt="阿甘正传">
            <span>阿甘正传</span>
          </a></li><li ><a @click="url" title="教父">
          <i class="before">1972</i><i class="after">9.2分</i>
          <img src="http://img.idyjy.com/pic/uploadimg/2016-6/772.jpg" alt="教父">
          <span>教父</span>
        </a></li><li ><a @click="url" title="放牛班的春天">
          <i class="before">2004</i><i class="after">9.2分</i>
          <img src="http://img.idyjy.com/pic/uploadimg/2016-6/8731.jpg" alt="放牛班的春天">
          <span>放牛班的春天</span>
        </a></li><li ><a @click="url" title="忠犬八公的故事">
          <i class="before">2009</i><i class="after">9.2分</i>
          <img src="http://img.idyjy.com/pic/uploadimg/2016-6/8482.jpg" alt="忠犬八公的故事">
          <span>忠犬八公的故事</span>
        </a></li>
          <li ><a @click="url" title="盗梦空间">
            <i class="before">2010</i><i class="after">9.2分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/6095.jpg" alt="盗梦空间">
            <span>盗梦空间</span>
          </a></li>
          <li ><a @click="url" title="搏击俱乐部">
            <i class="before">1999</i><i class="after">9.1分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/9848.jpg" alt="搏击俱乐部">
            <span>搏击俱乐部</span>
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
          <li ><a @click="url" title="成为沃伦·巴菲特">
            <i class="before">1999</i><i class="after">9.1分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23155.jpg" alt="成为沃伦·巴菲特">
            <span>成为沃伦·巴菲特</span>
          </a></li>
          <li ><a @click="url"  title="爱乐之城">
            <i class="before">2017</i><i class="after">8.4分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23058.jpg" alt="爱乐之城">
            <span>爱乐之城</span>
          </a></li>
          <li ><a @click="url"  title="贾斯汀·汀布莱克与田纳西孩子们">
            <i class="before">2016</i><i class="after">8.9分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2016-11/22692.jpg" alt="贾斯汀·汀布莱克与田纳西孩子们">
            <span>贾斯汀·汀布莱克与田纳西孩子们</span>
          </a></li>
          <li ><a @click="url" title="一条狗的使命">
            <i class="before">2017</i><i class="after">7.7分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23366.jpg" alt="一条狗的使命">
            <span>一条狗的使命</span>
          </a></li>
          <li ><a @click="url" title="八月">
            <i class="before">2017</i><i class="after">7.3分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23391.jpg" alt="八月">
            <span>八月</span>
          </a></li>
          <li ><a @click="url"  title="逃出绝命镇">
            <i class="before">2017</i><i class="after">7.7分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23389.jpg" alt="逃出绝命镇">
            <span>逃出绝命镇</span>
          </a></li>
          <li ><a @click="url" title="金刚狼3：殊死一战">
            <i class="before">2017</i><i class="after">8.3分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23340.jpg" alt="金刚狼3：殊死一战">
            <span>金刚狼3：殊死一战</span>
          </a></li>
          <li ><a @click="url" title="金刚：骷髅岛">
            <i class="before">2017</i><i class="after">:6.8分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23317.jpg" alt="金刚：骷髅岛">
            <span>金刚：骷髅岛</span>
          </a></li>
          <li ><a @click="url" title="怒">
            <i class="before">2017</i><i class="after">8分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23342.jpg" alt="怒">
            <span>怒</span>
          </a></li>
          <li ><a @click="url" title="星球大战外传：侠盗一号">
            <i class="before">2017</i><i class="after">7.3分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23234.jpg" alt="星球大战外传：侠盗一号">
            <span>星球大战外传：侠盗一号</span>
          </a></li>
          <li ><a @click="url" title="降临">
            <i class="before">2017</i><i class="after">7.8分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2017-2/23001.jpg" alt="降临">
            <span>降临</span>
          </a></li>
          <li ><a @click="url" title="攻壳机动队">
            <i class="before">2017</i><i class="after">6.6分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2017-5/23425.jpg" alt="攻壳机动队">
            <span>攻壳机动队</span>
          </a></li>
        </ul>
        <ul class="ul-list clearflex" v-show="a.b">
          <li ><a @click="url" title="这个杀手不太冷">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/1500.jpg" alt="这个杀手不太冷">
            <span>这个杀手不太冷</span>
          </a></li>
          <li ><a @click="url" title="盗梦空间">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/6095.jpg" alt="盗梦空间">
            <span>盗梦空间</span>
          </a></li>
          <li ><a @click="url" title="大话西游之仙履奇缘">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2188.jpg" alt="大话西游之仙履奇缘">
            <span>大话西游之仙履奇缘</span>
          </a></li>
          <li ><a @click="url" title="七武士">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/1081.jpg" alt="七武士">
            <span>七武士</span>
          </a></li>
          <li ><a @click="url" title="指环王3：王者无敌">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2154.jpg" alt="指环王3：王者无敌">
            <span>指环王3：王者无敌</span>
          </a></li>
          <li ><a @click="url" title="蝙蝠侠：黑暗骑士">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2168.jpg" alt="蝙蝠侠：黑暗骑士">
            <span>蝙蝠侠：黑暗骑士</span>
          </a></li>
          <li ><a @click="url" title="将军号">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-1/3770.jpg" alt="将军号">
            <span>将军号</span>
          </a></li>
          <li ><a @click="url" title="功夫瑜伽">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23336.jpg" alt="西游伏妖篇">
            <span>西游伏妖篇</span>
          </a></li>
          <li ><a @click="url" title="指环王1：魔戒再现">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2157.jpg" alt="指环王1：魔戒再现">
            <span>指环王1：魔戒再现</span>
          </a></li>
          <li ><a @click="url" title="大话西游之月光宝盒">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2189.jpg" alt="大话西游之月光宝盒">
            <span>大话西游之月光宝盒</span>
          </a></li>
          <li ><a @click="url" title="指环王2：双塔奇兵">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2155.jpg" alt="指环王2：双塔奇兵">
            <span>指环王2：双塔奇兵</span>
          </a></li>
          <li ><a @click="url" title="影子武士">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23336.jpg" alt="影子武士">
            <span>影子武士</span>
          </a></li>

        </ul>
        <ul class="ul-list clearflex" v-show="a.c">
          <li ><a @click="url" title="影子武士">
          <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23336.jpg" alt="影子武士">
          <span>影子武士</span>
        </a></li>
          <li ><a @click="url" title="影子武士">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23336.jpg" alt="影子武士">
            <span>影子武士</span>
          </a></li>
          <li ><a @click="url" title="影子武士">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23336.jpg" alt="影子武士">
            <span>影子武士</span>
          </a></li>
          <li ><a @click="url" title="影子武士">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23336.jpg" alt="影子武士">
            <span>影子武士</span>
          </a></li>
          <li ><a @click="url" title="影子武士">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23336.jpg" alt="影子武士">
            <span>影子武士</span>
          </a></li>
          <li ><a @click="url" title="影子武士">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23336.jpg" alt="影子武士">
            <span>影子武士</span>
          </a></li>
          <li ><a @click="url" title="影子武士">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23336.jpg" alt="影子武士">
            <span>影子武士</span>
          </a></li>
          <li ><a @click="url" title="影子武士">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23336.jpg" alt="影子武士">
            <span>影子武士</span>
          </a></li>
          <li ><a @click="url" title="影子武士">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23336.jpg" alt="影子武士">
            <span>影子武士</span>
          </a></li>
          <li ><a @click="url" title="影子武士">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23336.jpg" alt="影子武士">
            <span>影子武士</span>
          </a></li>
          <li ><a @click="url" title="影子武士">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23336.jpg" alt="影子武士">
            <span>影子武士</span>
          </a></li>
          <li ><a @click="url" title="影子武士">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23336.jpg" alt="影子武士">
            <span>影子武士</span>
          </a></li>
        </ul>
        <ul class="ul-list clearflex" v-show="a.d">
          <li ><a @click="url" title="美丽人生">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2847.jpg" alt="美丽人生">
            <span>美丽人生</span>
          </a></li>
          <li ><a @click="url" title="美丽人生">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2847.jpg" alt="美丽人生">
            <span>美丽人生</span>
          </a></li>
          <li ><a @click="url" title="美丽人生">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2847.jpg" alt="美丽人生">
            <span>美丽人生</span>
          </a></li>
          <li ><a @click="url" title="美丽人生">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2847.jpg" alt="美丽人生">
            <span>美丽人生</span>
          </a></li>
          <li ><a @click="url" title="美丽人生">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2847.jpg" alt="美丽人生">
            <span>美丽人生</span>
          </a></li>
          <li ><a @click="url" title="美丽人生">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2847.jpg" alt="美丽人生">
            <span>美丽人生</span>
          </a></li>
          <li ><a @click="url" title="美丽人生">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2847.jpg" alt="美丽人生">
            <span>美丽人生</span>
          </a></li>
          <li ><a @click="url" title="美丽人生">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2847.jpg" alt="美丽人生">
            <span>美丽人生</span>
          </a></li>
          <li ><a @click="url" title="美丽人生">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2847.jpg" alt="美丽人生">
            <span>美丽人生</span>
          </a></li>
          <li ><a @click="url" title="美丽人生">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2847.jpg" alt="美丽人生">
            <span>美丽人生</span>
          </a></li>
          <li ><a @click="url" title="美丽人生">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2847.jpg" alt="美丽人生">
            <span>美丽人生</span>
          </a></li>
          <li ><a @click="url" title="美丽人生">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2847.jpg" alt="美丽人生">
            <span>美丽人生</span>
          </a></li>
        </ul>
        <ul class="ul-list clearflex" v-show="a.e">
          <li ><a @click="url" title="三傻大闹宝莱坞">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/4103.jpg" alt="三傻大闹宝莱坞">
            <span>三傻大闹宝莱坞</span>
          </a></li>
          <li ><a @click="url" title="三傻大闹宝莱坞">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/4103.jpg" alt="三傻大闹宝莱坞">
            <span>三傻大闹宝莱坞</span>
          </a></li>
          <li ><a @click="url" title="三傻大闹宝莱坞">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/4103.jpg" alt="三傻大闹宝莱坞">
            <span>三傻大闹宝莱坞</span>
          </a></li>
          <li ><a @click="url" title="三傻大闹宝莱坞">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/4103.jpg" alt="三傻大闹宝莱坞">
            <span>三傻大闹宝莱坞</span>
          </a></li>
          <li ><a @click="url" title="三傻大闹宝莱坞">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/4103.jpg" alt="三傻大闹宝莱坞">
            <span>三傻大闹宝莱坞</span>
          </a></li>
          <li ><a @click="url" title="三傻大闹宝莱坞">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/4103.jpg" alt="三傻大闹宝莱坞">
            <span>三傻大闹宝莱坞</span>
          </a></li>
          <li ><a @click="url" href="#" title="三傻大闹宝莱坞">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/4103.jpg" alt="三傻大闹宝莱坞">
            <span>三傻大闹宝莱坞</span>
          </a></li>
          <li ><a @click="url" title="三傻大闹宝莱坞">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/4103.jpg" alt="三傻大闹宝莱坞">
            <span>三傻大闹宝莱坞</span>
          </a></li>
          <li ><a @click="url" title="三傻大闹宝莱坞">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/4103.jpg" alt="三傻大闹宝莱坞">
            <span>三傻大闹宝莱坞</span>
          </a></li>
          <li ><a @click="url" title="三傻大闹宝莱坞">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/4103.jpg" alt="三傻大闹宝莱坞">
            <span>三傻大闹宝莱坞</span>
          </a></li>
          <li ><a @click="url" title="三傻大闹宝莱坞">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/4103.jpg" alt="三傻大闹宝莱坞">
            <span>三傻大闹宝莱坞</span>
          </a></li>
          <li ><a @click="url" title="三傻大闹宝莱坞">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/4103.jpg" alt="三傻大闹宝莱坞">
            <span>三傻大闹宝莱坞</span>
          </a></li>
        </ul>
        <ul class="ul-list clearflex" v-show="a.f">
          <li ><a @click="url" title="两杆大烟枪">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2422.jpg" alt="两杆大烟枪">
            <span>两杆大烟枪</span>
          </a></li>
          <li ><a @click="url" title="触不可及">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/4326.jpg" alt="触不可及">
            <span>触不可及</span>
          </a></li>
          <li ><a @click="url" title="触不可及">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/4326.jpg" alt="触不可及">
            <span>触不可及</span>
          </a></li>
          <li ><a @click="url" title="触不可及">
            <img  src="http://img.idyjy.com/pic/uploadimg/2016-6/4326.jpg" alt="触不可及">
            <span>触不可及</span>
          </a></li>
          <li ><a @click="url" title="触不可及">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/4326.jpg" alt="触不可及">
            <span>触不可及</span>
          </a></li>
          <li ><a @click="url" title="触不可及">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/4326.jpg" alt="触不可及">
            <span>触不可及</span>
          </a></li>
          <li ><a @click="url" title="触不可及">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/4326.jpg" alt="触不可及">
            <span>触不可及</span>
          </a></li>
          <li ><a @click="url" title="触不可及">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/4326.jpg" alt="触不可及">
            <span>触不可及</span>
          </a></li>
          <li ><a @click="url" title="触不可及">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/4326.jpg" alt="触不可及">
            <span>触不可及</span>
          </a></li>
          <li ><a @click="url" title="触不可及">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/4326.jpg" alt="触不可及">
            <span>触不可及</span>
          </a></li>
          <li ><a @click="url" title="触不可及">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/4326.jpg" alt="触不可及">
            <span>触不可及</span>
          </a></li>
          <li ><a @click="url" title="触不可及">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/4326.jpg" alt="触不可及">
            <span>触不可及</span>
          </a></li>
        </ul>
        <ul class="ul-list clearflex" v-show="a.g">
          <li ><a @click="url" title="马戏团">
            <img src="http://img.idyjy.com/pic/uploadimg/2015-12/4065.jpg" alt="马戏团">
            <span>马戏团</span>
          </a></li>
          <li ><a @click="url" title="马戏团">
            <img src="http://img.idyjy.com/pic/uploadimg/2015-12/4065.jpg" alt="马戏团">
            <span>马戏团</span>
          </a></li>
          <li ><a @click="url" title="马戏团">
            <img src="http://img.idyjy.com/pic/uploadimg/2015-12/4065.jpg" alt="马戏团">
            <span>马戏团</span>
          </a></li>
          <li ><a @click="url" title="马戏团">
            <img src="http://img.idyjy.com/pic/uploadimg/2015-12/4065.jpg" alt="马戏团">
            <span>马戏团</span>
          </a></li>
          <li ><a @click="url" title="马戏团">
            <img src="http://img.idyjy.com/pic/uploadimg/2015-12/4065.jpg" alt="马戏团">
            <span>马戏团</span>
          </a></li>
          <li ><a @click="url" title="马戏团">
            <img src="http://img.idyjy.com/pic/uploadimg/2015-12/4065.jpg" alt="马戏团">
            <span>马戏团</span>
          </a></li>
          <li ><a @click="url" title="马戏团">
            <img src="http://img.idyjy.com/pic/uploadimg/2015-12/4065.jpg" alt="马戏团">
            <span>马戏团</span>
          </a></li>
          <li ><a @click="url" title="马戏团">
            <img src="http://img.idyjy.com/pic/uploadimg/2015-12/4065.jpg" alt="马戏团">
            <span>马戏团</span>
          </a></li>
          <li ><a @click="url" title="马戏团">
            <img src="http://img.idyjy.com/pic/uploadimg/2015-12/4065.jpg" alt="马戏团">
            <span>马戏团</span>
          </a></li>
          <li ><a @click="url" title="马戏团">
            <img src="http://img.idyjy.com/pic/uploadimg/2015-12/4065.jpg" alt="马戏团">
            <span>马戏团</span>
          </a></li>
          <li ><a @click="url" title="马戏团">
            <img src="http://img.idyjy.com/pic/uploadimg/2015-12/4065.jpg" alt="马戏团">
            <span>马戏团</span>
          </a></li>
          <li ><a @click="url" title="马戏团">
            <img src="http://img.idyjy.com/pic/uploadimg/2015-12/4065.jpg" alt="马戏团">
            <span>马戏团</span>
          </a></li>

        </ul>
        <ul class="ul-list clearflex" v-show="a.h">
          <li ><a @click="url" title="两杆大烟枪">
          <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2422.jpg" alt="两杆大烟枪">
          <span>两杆大烟枪</span>
        </a></li>
          <li ><a @click="url" title="两杆大烟枪">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2422.jpg" alt="两杆大烟枪">
            <span>两杆大烟枪</span>
          </a></li>
          <li ><a @click="url" title="两杆大烟枪">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2422.jpg" alt="两杆大烟枪">
            <span>两杆大烟枪</span>
          </a></li>
          <li ><a @click="url" title="两杆大烟枪">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2422.jpg" alt="两杆大烟枪">
            <span>两杆大烟枪</span>
          </a></li>
          <li ><a @click="url" title="两杆大烟枪">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2422.jpg" alt="两杆大烟枪">
            <span>两杆大烟枪</span>
          </a></li>
          <li ><a @click="url" title="两杆大烟枪">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2422.jpg" alt="两杆大烟枪">
            <span>两杆大烟枪</span>
          </a></li>
          <li ><a @click="url" title="两杆大烟枪">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2422.jpg" alt="两杆大烟枪">
            <span>两杆大烟枪</span>
          </a></li>
          <li ><a @click="url" title="两杆大烟枪">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2422.jpg" alt="两杆大烟枪">
            <span>两杆大烟枪</span>
          </a></li>
          <li ><a @click="url" title="两杆大烟枪">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2422.jpg" alt="两杆大烟枪">
            <span>两杆大烟枪</span>
          </a></li>
          <li ><a @click="url" title="两杆大烟枪">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2422.jpg" alt="两杆大烟枪">
            <span>两杆大烟枪</span>
          </a></li>
          <li ><a @click="url" title="两杆大烟枪">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2422.jpg" alt="两杆大烟枪">
            <span>两杆大烟枪</span>
          </a></li>
          <li ><a @click="url" title="两杆大烟枪">
            <img src="http://img.idyjy.com/pic/uploadimg/2016-6/2422.jpg" alt="两杆大烟枪">
            <span>两杆大烟枪</span>
          </a></li>
        </ul>
      </div>
    </div>
	 <div class="gx-movie">
      <div class="clearflex">
        <p class="title-list">最新电视剧</p>
        <ul class="tab-list2 clearflex">
          <li class="tab-li">
            <a class="tab-bg" @mouseover="showtab2" alt="1">最新</a>
          </li>
          <li class="tab-li">
            <a @mouseover="showtab2" alt="2">国产剧</a>
          </li>
          <li class="tab-li">
            <a @mouseover="showtab2" alt="3">港台剧</a>
          </li>
          <li class="tab-li">
            <a @mouseover="showtab2" alt="4">欧美剧</a>
          </li>
          <li class="tab-li">
            <a @mouseover="showtab2" alt="5">日韩片</a>
          </li>
        </ul>
      </div>
      <hr>
      <div class="movies-list">
        <ul class="ul-list clearflex" v-show="b.a">
          <li ><a @click="url" title="凡尔赛 第二季">
            <i class="before">2017</i><i class="after">9.6分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23306.jpg" alt="极凡尔赛 第二季">
            <span>凡尔赛 第二季</span>
          </a></li>
          <li ><a @click="url" title="硅谷 第四季">
            <i class="before">2017</i><i class="after">9.5分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23401.jpg" alt="硅谷 第四季">
            <span>硅谷 第四季</span>
          </a></li>
          <li ><a @click="url"  title="越狱 第五季">
            <i class="before">2017</i><i class="after">9.5分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23300.jpg" alt="越狱 第五季">
            <span>越狱 第五季</span>
          </a></li>
          <li ><a @click="url" title="黑帆 第四季">
               <i class="before">2017</i><i class="after">9.4分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2017-1/22995.jpg" alt="黑帆 第四季">
            <span>黑帆 第四季</span>
          </a></li>
          <li ><a @click="url" title="风骚律师 第三季">
               <i class="before">2017</i><i class="after">7.8分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23327.jpg" alt="风骚律师 第三季">
            <span>风骚律师 第三季</span>
          </a></li>
          <li ><a @click="url"  title="四重奏">
               <i class="before">2017</i><i class="after">9.4分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2017-1/22957.jpg" alt="四重奏">
            <span>四重奏</span>
          </a></li>
          <li ><a @click="url" title="守望尘世 第三季">
               <i class="before">2017</i><i class="after">9.3分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23358.jpg" alt="守望尘世 第三季">
            <span>守望尘世 第三季</span>
          </a></li>
          <li ><a @click="url" title="傲骨之战">
               <i class="before">2017</i><i class="after">9.3分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2017-2/23092.jpg" alt="傲骨之战">
            <span>傲骨之战</span>
          </a></li>
          <li ><a @click="url" title="冰血暴 第三季">
               <i class="before">2017</i><i class="after">9.2分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23369.jpg" alt="冰血暴 第三季">
            <span>冰血暴 第三季</span>
          </a></li>
          <li ><a @click="url" title="亿万 第二季">
               <i class="before">2017</i><i class="after">9.1分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2017-2/23087.jpg" alt="亿万 第二季">
            <span>亿万 第二季</span>
          </a></li>
          <li ><a @click="url" title="人民的名义">
               <i class="before">2017</i><i class="after">9.1分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23273.jpg" alt="人民的名义">
            <span>人民的名义</span>
          </a></li>
          <li ><a @click="url" title="大群">
               <i class="before">2017</i><i class="after">9.1分</i>
            <img src="http://img.idyjy.com/pic/uploadimg/2017-2/23046.jpg" alt="大群">
            <span>大群</span>
          </a></li>
        </ul>
        <ul class="ul-list clearflex" v-show="b.b">
          <li ><a @click="url" title="一条狗的使命">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23366.jpg" alt="一条狗的使命">
            <span>一条狗的使命</span>
          </a></li>
          <li ><a @click="url" title="一条狗的使命">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23366.jpg" alt="一条狗的使命">
            <span>一条狗的使命</span>
          </a></li>
          <li ><a @click="url" title="一条狗的使命">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23366.jpg" alt="一条狗的使命">
            <span>一条狗的使命</span>
          </a></li>
          <li ><a @click="url" title="一条狗的使命">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23366.jpg" alt="一条狗的使命">
            <span>一条狗的使命</span>
          </a></li>
          <li ><a @click="url" title="一条狗的使命">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23366.jpg" alt="一条狗的使命">
            <span>一条狗的使命</span>
          </a></li>
          <li ><a @click="url" title="一条狗的使命">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23366.jpg" alt="一条狗的使命">
            <span>一条狗的使命</span>
          </a></li>
          <li ><a @click="url" title="一条狗的使命">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23366.jpg" alt="一条狗的使命">
            <span>一条狗的使命</span>
          </a></li>
          <li ><a @click="url" title="一条狗的使命">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23366.jpg" alt="一条狗的使命">
            <span>一条狗的使命</span>
          </a></li>
          <li ><a @click="url" title="一条狗的使命">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23366.jpg" alt="一条狗的使命">
            <span>一条狗的使命</span>
          </a></li>
          <li ><a @click="url" title="一条狗的使命">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23366.jpg" alt="一条狗的使命">
            <span>一条狗的使命</span>
          </a></li>
          <li ><a @click="url" title="一条狗的使命">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23366.jpg" alt="一条狗的使命">
            <span>一条狗的使命</span>
          </a></li>
          <li ><a @click="url" title="一条狗的使命">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23366.jpg" alt="一条狗的使命">
            <span>一条狗的使命</span>
          </a></li>

        </ul>
        <ul class="ul-list clearflex" v-show="b.c">
          <li ><a @click="url" title="怒">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23342.jpg" alt="怒">
            <span>怒</span>
          </a></li>
          <li ><a @click="url" title="怒">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23342.jpg" alt="怒">
            <span>怒</span>
          </a></li>
          <li ><a @click="url" title="怒">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23342.jpg" alt="怒">
            <span>怒</span>
          </a></li>
          <li ><a @click="url" title="怒">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23342.jpg" alt="怒">
            <span>怒</span>
          </a></li>
          <li ><a @click="url" title="怒">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23342.jpg" alt="怒">
            <span>怒</span>
          </a></li>
          <li ><a @click="url" title="怒">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23342.jpg" alt="怒">
            <span>怒</span>
          </a></li>
          <li ><a @click="url" title="怒">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23342.jpg" alt="怒">
            <span>怒</span>
          </a></li>
          <li ><a @click="url" title="怒">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23342.jpg" alt="怒">
            <span>怒</span>
          </a></li>
          <li ><a @click="url" title="怒">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23342.jpg" alt="怒">
            <span>怒</span>
          </a></li>
          <li ><a @click="url" title="怒">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23342.jpg" alt="怒">
            <span>怒</span>
          </a></li>
          <li ><a @click="url" title="怒">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23342.jpg" alt="怒">
            <span>怒</span>
          </a></li>
          <li ><a @click="url" title="怒">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23342.jpg" alt="怒">
            <span>怒</span>
          </a></li>
        </ul>
        <ul class="ul-list clearflex" v-show="b.d">
          <li ><a @click="url" title="爱乐之城">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23058.jpg" alt="爱乐之城">
            <span>八月</span>
          </a></li>
          <li ><a @click="url" title="爱乐之城">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23058.jpg" alt="爱乐之城">
            <span>八月</span>
          </a></li>
          <li ><a @click="url" title="爱乐之城">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23058.jpg" alt="爱乐之城">
            <span>八月</span>
          </a></li>
          <li ><a @click="url" title="爱乐之城">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23058.jpg" alt="爱乐之城">
            <span>八月</span>
          </a></li>
          <li ><a @click="url" title="爱乐之城">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23058.jpg" alt="爱乐之城">
            <span>八月</span>
          </a></li>
          <li ><a @click="url" title="爱乐之城">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23058.jpg" alt="爱乐之城">
            <span>八月</span>
          </a></li>
          <li ><a @click="url" title="爱乐之城">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23058.jpg" alt="爱乐之城">
            <span>八月</span>
          </a></li>
          <li ><a @click="url" title="爱乐之城">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23058.jpg" alt="爱乐之城">
            <span>八月</span>
          </a></li>
          <li ><a @click="url" title="爱乐之城">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23058.jpg" alt="爱乐之城">
            <span>八月</span>
          </a></li>
          <li ><a @click="url" title="爱乐之城">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23058.jpg" alt="爱乐之城">
            <span>八月</span>
          </a></li>
          <li ><a @click="url" title="爱乐之城">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23058.jpg" alt="爱乐之城">
            <span>八月</span>
          </a></li>
          <li ><a @click="url" title="爱乐之城">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23058.jpg" alt="爱乐之城">
            <span>八月</span>
          </a></li>
        </ul>
        <ul class="ul-list clearflex" v-show="b.e">
          <li ><a @click="url" title="逃出绝命镇">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23389.jpg" alt="逃出绝命镇">
            <span>逃出绝命镇</span>
          </a></li>
          <li ><a @click="url" title="逃出绝命镇">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23389.jpg" alt="逃出绝命镇">
            <span>逃出绝命镇</span>
          </a></li>
          <li ><a @click="url" title="逃出绝命镇">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23389.jpg" alt="逃出绝命镇">
            <span>逃出绝命镇</span>
          </a></li>
          <li ><a @click="url" title="逃出绝命镇">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23389.jpg" alt="逃出绝命镇">
            <span>逃出绝命镇</span>
          </a></li>
          <li ><a @click="url" title="逃出绝命镇">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23389.jpg" alt="逃出绝命镇">
            <span>逃出绝命镇</span>
          </a></li>
          <li ><a @click="url" title="逃出绝命镇">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23389.jpg" alt="逃出绝命镇">
            <span>逃出绝命镇</span>
          </a></li>
          <li ><a @click="url" title="逃出绝命镇">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23389.jpg" alt="逃出绝命镇">
            <span>逃出绝命镇</span>
          </a></li>
          <li ><a @click="url" title="逃出绝命镇">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23389.jpg" alt="逃出绝命镇">
            <span>逃出绝命镇</span>
          </a></li>
          <li ><a @click="url" title="逃出绝命镇">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23389.jpg" alt="逃出绝命镇">
            <span>逃出绝命镇</span>
          </a></li>
          <li ><a @click="url" title="逃出绝命镇">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23389.jpg" alt="逃出绝命镇">
            <span>逃出绝命镇</span>
          </a></li>
          <li ><a @click="url" title="逃出绝命镇">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23389.jpg" alt="逃出绝命镇">
            <span>逃出绝命镇</span>
          </a></li>
          <li ><a @click="url" title="逃出绝命镇">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23389.jpg" alt="逃出绝命镇">
            <span>逃出绝命镇</span>
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
        },
        b:{
          a:true,
          b: '',
          c: '',
          d: '',
          e: ''
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
            this.a.a = true;
            break;
          case '2':
            this.a.b = true;
            break;
          case '3':
            this.a.c = true;
            break;
          case '4':
            this.a.d = true;
            break;
          case '5':
            this.a.e = true;
            break;
          case '6':
            this.a.f = true;
            break;
          case '7':
            this.a.g = true;
            break;
          case '8':
            this.a.h = true;
            break;
        }
      },
      showtab2:function (event){
        var Oli = document.getElementsByClassName('tab-list2')[0].querySelectorAll('a');
        for (var i = 0; i < Oli.length; i++) {
          Oli[i].className = '';
        }
        for (i in this.b) {
          this.b[i] = false;
        }
        event.target.className = "tab-bg";
        switch (event.target.getAttribute('alt')) {
          case '1':
            this.b.a = true;
            break;
          case '2':
            this.b.b = true;
            break;
          case '3':
            this.b.c = true;
            break;
          case '4':
            this.b.d = true;
            break;
          case '5':
            this.b.e = true;
            break;
        }
       },
      url: function (event) {
        var n = event.path[1].getAttribute('title') || event.target.getAttribute('title');
        console.log(n);
        if( n.length > 0){
          this.$router.push({path:"/api/info?name="+n});

        }

      }
    },
    created (){
      var allA = document.getElementsByTagName('a');
      for(var i = 0;i< allA.length; i++){
          allA[i].onclick = function (){

          }
      }
    },

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
          position: relative;
          overflow: hidden;
          &:hover{
            &:before{
              -webkit-animation: top 1s ease-in-out 0s 1 alternate forwards;
            }
          }
          &:before{
            content: '点击查看';
            line-height: 195px;
            text-align: center;
            font-weight: bolder;
            font-size: 20px;
            color:#fff;
            display: inline-block;
            width: 145px;
            height: 195px;
            background:rgba(0,0,0,0.7);
            position: absolute;
            top: 229px;
          }
        }
      }
      img {
        height: 195px;
        width: 100%;
        padding: 3px;
        border: 2px solid #c8c8cf;
        box-sizing: border-box;
        box-shadow: 10px 0 2px 4px #b4b4ba;
        z-index: 1;

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
      .tab-list,.tab-list2,tab-list3 {
        float: right;
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
  @-webkit-keyframes top {
    from{
      top: 229px;
      opacity:0;
    }
    to{
      top: 0;
      opacity:1;
    }
  }
  .before{
    display: inline-block;
    width: 45px;
    height:20px;
    background:rgba(0,0,0,0.5);
    position: absolute;
    color:#fff;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    font-weight: bold;
  }
  i{
    font-style: normal;
  }
  .after{
    display: inline-block;
    width: 45px;
    height:20px;
    background:rgba(0,0,0,0.5);
    position: absolute;
    color:#fff;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    right: 0;
    font-weight: bold;
    top:175px;
  }

</style>
