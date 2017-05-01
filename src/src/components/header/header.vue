<template>
  <div class="header">
    <!--导航栏-->
    <div class="nav-box">
      <ul class="nav">

        <router-link class="nav-list" tag="li"  to="/" @click.native="movie()" ><a href="">首页</a></router-link>
        <router-link class="nav-list" tag="li"  to="/api/movies" @click.native="movie()" ><a href="">电影</a></router-link>
        <router-link class="nav-list" tag="li"  to="/api/tv" @click.native="movie()" ><a href="">电视剧</a></router-link>
        <router-link class="nav-list" tag="li"  to="/api/donghua" @click.native="movie()" ><a href="">动画片</a></router-link>
      </ul>
    </div>
    <!--搜索栏-->
    <div class="search">
      <form class="clearflex form-wrapper" id="form-wrapper">

        <input id="value" type="text" v-model="name" placeholder="">

        <button id="submit" type="submit" @click="submit(name)">搜索</button>

      </form>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  export default({
    data (){
      return {
        dalu: {},
        name: "",
        listinfo: {}
      }
    },

    methods: {
      movie: function () {
        this.$http.get('/api/movies',).then((response) => {
          response = response.body;
          if (response.errno === 0) {
            this.listinfo = response.data;
            console.log(this.listinfo);
          }
        })

      },

      submit: function () {
          this.$store.dispatch('submit',this.name)
      }
    }
  })

</script>

<style lang="less" rel="stylesheet/less">
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
      background: rgba(169, 169, 169, 0.13);
    }
    .nav {
      display: inline-block;

    }
    .nav-list {
      display: inline-block;
      a {
        padding: 10px;
        display: inline-block;
        margin: 0 20px;
        &:hover {
          background: red;
        }
      }
    }
    //搜索栏
    .form-wrapper {
      width: 370px;
      margin: 0 auto;
      height: 40px;
      padding: 10px 0;
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
