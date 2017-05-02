<template>
  <div class="search-info">
      <p>与“{{ searchname }}”相关的影视共有{{ searchinfo.length }}条</p>
    <p></p>
    <ul class="search-list">
      <li v-for="item in searchinfo">
        <a href="">
          <img :src=item.img alt="">
          <span>{{ item.name }}</span>
        </a>
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
    li{
      float: left;
      width: 160px;
      margin:0 20px;

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
      text-align: center;
      display: block;
    }

  }
</style>
