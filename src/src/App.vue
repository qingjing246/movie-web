<template>
  <div id="app">

    <div class="header">
      <!--导航栏-->
      <div class="nav-box">
        <ul class="nav">
          <router-link class="nav-list" tag="li" to="/"><a href="">首页</a></router-link>
          <router-link class="nav-list" tag="li" to="/api/movies" ><a href="">电影</a>
          </router-link>
          <router-link class="nav-list" tag="li" to="/api/tv" @click.native="tv()"><a href="">电视剧</a></router-link>
          <router-link class="nav-list" tag="li" to="/api/donghua" @click.native="donghua()"><a href="">动画片</a>
          </router-link>
          <li class="nav-list" ><a href="https://www.github.com/qingjing246/movie-web">github</a>
          </li>
        </ul>
      </div>
      <!--搜索栏-->
      <div class="search">
        <div class="clearflex form-wrapper" id="form-wrapper">
          <input id="value" type="text" @keyup="show($event)" v-model="name" :placeholder="placeholder" >
          <button id="submit" type="submit"  @click="start">搜索</button>
        </div>
      </div>

    </div>
    <router-view></router-view>

  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {mapMutations} from 'vuex'
  import {mapState} from 'vuex'

  export default {
    data (){
      return {
        movies: {},
        name: "",


      }
    },
    computed: {
      ...mapState(['searchinfo','placeholder'])
    },
    created (){
    },
    methods: {
      ...mapActions(['submit']),
      show: function (ev) {
        if(ev.keyCode == 13){
          this.start();
        }
      },
      start:function(){
          if( this.name == ""){
		  this.placeholder="不能为空"
          }else{
            this.submit(this.name);
            this.$router.push({path:"/api/search"});
            this.name = "";
          }
      }

    },

    components: {},
    watch :{

    }

  }
</script>

<style lang="less" rel="stylesheet/less">
  #app {
    width: 1000px;
    margin: 0 auto;
  }

  body, ul, p, hr {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    font-style: normal;
	cursor:pointer;
  }

  li {
    list-style: none;
  }

  .clearflex:after {
    content: "";
    clear: both;
    display: table;
  }

  .hide {
    animation: hide 3s ease 3s;
    animation-fill-mode: forwards;

  }

  @keyframes hide {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .show {
    animation: show 2s ease 6s;

  }

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .header {
    width: 1000px;
    margin: 0 auto;
    text-align: center;

    //导航
    .nav-box {
	  background:#1172c2;

    }
    .nav {
      display: inline-block;

    }
    .nav-list {
      display: inline-block;
      a {
		width:60px;
        padding: 10px;
        display: inline-block;
        margin: 0 20px;
		color:#fff;
        &:hover {
          background: red;
        }
      }
    }
    //搜索栏
    .form-wrapper {
      width: 370px;
      margin: 0 auto;
      height: 30px;
      padding: 30px 0;
      input {
        box-sizing: border-box;
        width: 300px;
        height: 30px;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        border: 1px solid #898989;
        padding: 0 0 0 10px;
        border-right: none;
        float: left;
        &:focus {
          outline: none;
        }
      }
      button {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        box-sizing: border-box;
        width: 70px;
        height: 30px;
        border: 1px solid #898989;
        float: left;
      }
    }

  }
</style>
