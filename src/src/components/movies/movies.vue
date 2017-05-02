<template>
  <div class="search-info">
      <p>与“{{ searchname }}”相关的影视共有{{ searchinfo.length }}条</p>
    <p></p>
    <ul class="search-list">
      <li v-for="item in searchinfo">
        <router-link tag="a" :to="{ path: '/api/info', query: {id:item.id }}"  >
          <img :src=item.img  alt="">
          <span>{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
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
      ...mapState(['searchinfo','searchname']),
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
  .search-list{
    padding:  20px 0;
    li{
      float: left;
      width: 160px;
      margin:10px 20px;

    }
    img{
      height: 250px;
      padding:3px;
      width: 160px;
      box-sizing: border-box;
      border: 1px solid #fff;
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
