<template>
  <div class="search-info" >
    <p v-if="searchinfo.length > 0">与“{{ searchname }}”相关的影视共有{{ searchinfo.length }}条</p>
    <p></p>
    <ul class="search-list">
      <li v-for="item in searchinfo">
        <router-link tag="a" :to="{ path: '/api/info', query: {id:item.id }}"  >
          <img :src=item.img  alt="">
          <span>{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
    <div class="undefined" v-if="abc=='undefined'">
      <p>没有找到相关信息，请重新输入。</p>
    </div>
    <div class="gif" v-if="searchinfo.length == 0 && abc.length == 0">
      <img src="../movies/timg.gif" alt="">
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

      }
    },
    computed: {
      ...mapMutations(['clear']),
      ...mapState(['searchinfo','searchname','abc']),
      ...mapGetters(['getname'])
    },
    created()
    {

    }
    ,
    methods:{
      ...mapActions(['btn']),

    }

  }


</script>

<style lang="less" rel="stylesheet/less">
  .undefined{
    text-align: center;
    color: red;
    font-size: 20px;
  }
  .gif{
    text-align: center;
  }
  .search-list{
    padding:  20px 0;
    li{
      float: left;
      width: 160px;
      margin:10px 20px;

    }
    img{
      height: 200px;
      padding:3px;
      width: 160px;
      box-sizing: border-box;
      border: 1px solid #333;
      &:hover{
        border: 1px solid red;

      }

    }
    span{
      line-height: 30px;
      height:30px;
      text-align: center;
      display: block;
      width: 160px;
      overflow: hidden;
    }

  }
</style>
