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
            <p>的撒打算大叔大声道</p>
            <p>的撒打算大叔大声道</p>
          </a>
        </li>
        <li>
          <a href="">
            <p>的撒打算大叔大声道</p>
            <p>的撒打算大叔大声道</p>
          </a>
        </li>
        <li>
          <a href="">
            <p>的撒打算大叔大声道</p>
            <p>的撒打算大叔大声道</p>
          </a>
        </li>
        <li>
          <a href="">
            <p>的撒打算大叔大声道</p>
            <p>的撒打算大叔大声道</p>
          </a>
        </li>
        <li>
          <a href="">
            <p>的撒打算大叔大声道</p>
            <p>的撒打算大叔大声道</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="gn-movie">
      <a href="#">国内电影 >></a><hr>
      <div class="movies-list">
        <ul class="clearflex">
        <li v-for=""><a href="">
          <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23393.jpg" alt="">
          <span></span>
        </a></li>
        </ul>
      </div>
    </div>
    <div class="gn-movie">
      <a href="#">欧美电影 >></a><hr>
      <div class="movies-list">
        <ul class="clearflex">
          <li><a href="">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23393.jpg" alt="">
            <span>sadasdasdas</span>
          </a></li>
          <li><a href="">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23393.jpg" alt="">
            <span>sadasdasdas</span>
          </a></li>
          <li><a href="">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23393.jpg" alt="">
            <span>sadasdasdas</span>
          </a></li>
          <li><a href="">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23393.jpg" alt="">
            <span>sadasdasdas</span>
          </a></li>
          <li><a href="">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23393.jpg" alt="">
            <span>sadasdasdas</span>
          </a></li>
        </ul>
      </div>
    </div>
    <div class="gn-movie">
      <a href="#">日韩电影 >></a><hr>
      <div class="movies-list">
        <ul class="clearflex">
          <li><a href="">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23393.jpg" alt="">
            <span>sadasdasdas</span>
          </a></li>
          <li><a href="">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23393.jpg" alt="">
            <span>sadasdasdas</span>
          </a></li>
          <li><a href="">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23393.jpg" alt="">
            <span>sadasdasdas</span>
          </a></li>
          <li><a href="">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23393.jpg" alt="">
            <span>sadasdasdas</span>
          </a></li>
          <li><a href="">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23393.jpg" alt="">
            <span>sadasdasdas</span>
          </a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

    props:{
      dalu:{

        }
    }

  };
  (function (){




  })();
</script>

<style lang="less" rel="stylesheet/less">


    //轮播图
    .content{
      .carousel{
        margin-bottom:20px ;
       position: relative ;
    .carousel-content {
      position: relative ;
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
      .gn-movie{
        a{
          display: inline-block;
          padding: 10px;
        }
        .movies-list{
          padding: 20px 0;
          li{
            float: left;
            margin-left: 50px;
            &:nth-child(1){
              margin-left: 0;
            }
            a{
              padding: 0;
            }
          }
          img{
            width: 160px;
          }
        }
        span{
          font-style: normal;
          display: block;
          text-align: center;
        }
      }
    }
</style>
