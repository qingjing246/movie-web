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
      <P class="title-list">热门电影</P><hr>
      <div class="movies-list">
        <ul class="clearflex">
        <li v-for=""><a href="">
          <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23057.jpg" alt="">
          <span>极限特工3：终极回归</span>
        </a></li>
		<li v-for=""><a href="">
          <img src="http://img.idyjy.com/pic/uploadimg/2017-2/23060.jpg" alt="">
          <span>功夫瑜伽</span>
        </a></li>
		<li v-for=""><a href="">
          <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23261.jpg" alt="">
          <span>帕特森</span>
        </a></li>
		<li v-for=""><a href="">
          <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23366.jpg" alt="">
          <span>一条狗的使命</span>
        </a></li>
		<li v-for=""><a href="">
          <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23391.jpg" alt="">
          <span>八月</span>
        </a></li>
		<li v-for=""><a href="">
          <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23389.jpg" alt="">
          <span>逃出绝命镇</span>
        </a></li>
		<li v-for=""><a href="">
          <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23057.jpg" alt="">
          <span>极限特工3：终极回归</span>
        </a></li>
		<li v-for=""><a href="">
          <img src="http://img.idyjy.com/pic/uploadimg/2017-2/23060.jpg" alt="">
          <span>功夫瑜伽</span>
        </a></li>
		<li v-for=""><a href="">
          <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23261.jpg" alt="">
          <span>帕特森</span>
        </a></li>
		<li v-for=""><a href="">
          <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23366.jpg" alt="">
          <span>一条狗的使命</span>
        </a></li>
		<li v-for=""><a href="">
          <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23391.jpg" alt="">
          <span>八月</span>
        </a></li>
		<li v-for=""><a href="">
          <img src="http://img.idyjy.com/pic/uploadimg/2017-4/23389.jpg" alt="">
          <span>逃出绝命镇</span>
        </a></li>
        </ul>
      </div>
    </div>
    <div class="gx-movie">
		<div class="clearflex">
      <p class="title-list">资源更新</p>
	  <ul class="tab-list clearflex">
		<li>
		<a  @mouseover="showtab" alt="1">更新</a>
		</li>
		<li>
		<a @mouseover="showtab" alt="2">动作片</a>
		</li>
		<li>
		<a @mouseover="showtab" alt="3">喜剧片</a>
		</li>
		<li>
		<a href="">爱情片</a>
		</li><li>
		<a href="">科幻片</a>
		</li>
		<li>
		<a href="">恐怖片</a>
		</li>
		<li>
		<a href="">剧情片</a>
		</li>
		<li>
		<a href="">战争片</a>
		</li>
	  </ul>	
	  </div>
	  <hr>
      <div class="movies-list">
        <ul class="clearflex" v-show="a.a">
          <li><a href="">
            <img src="http://img.idyjy.com/pic/uploadimg/2017-3/23057.jpg" alt="">
            <span>11111111111111111</span>
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
            <span>22222222222222</span>
          </a></li>
          
        </ul>
      </div>
    </div>
    <div class="gn-movie">
      <a href="#">日韩电影 >></a>
	  
	  <hr>
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
		data (){
			return {
				a:{
					a:true,
					b:'',
					c:'',
					d:'',
					e:''
				}	
			}
		},
		methods:{
			showtab:function (event){
				var Oli = document.getElementsByClassName('tab-list')[0].querySelectorAll('a');
				for(var i =0;i<Oli.length;i++){
					Oli[i].className = '';
				}
				event.target.className = "tab-bg";
				/*switch(event.target.getAttribute('alt'))
				{
					case '1':
						this.a=true,
						this.b=false
						break;
					case '2':
						this.b=true,
						this.a=false
						break;
					case '3':
						this.c=true,
						this.a=false
						break;
				}*/
				for(i in this.a){
					i = false 
				}
				
			},
			hidetab:function (event){
				event.target.className = "";
				console.log(222);
			}
		}

  };
  
</script>

<style lang="less" rel="stylesheet/less">
	//复用样式
	.tab-bg {
		background:#065fa9;
		color:#fff;
	}
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
      
	  .hot-movie{
		padding:10px 5px;
		
		.movies-list{
			a{
			font-weight:600;
			color:#333;
			&:hover{
			color:red;
			text-decoration:underline;
			}
			}
		}
		span{
          font-style: normal;
          display: block;
          text-align: center;
		  width:145px;
		  height:30px;
		  overflow:hidden;
		  line-height:30px;
        }
		li{
			box-sizing:border-box;
			width:145px;
			margin:0 10px;
			float:left;
			a{
			display:block;
			}
		}
		img{
		height:195px;
		width:100%;
		padding:3px;
		border:1px solid #333;
		&:hover{
			border:1px solid red;
		}
		}
		ul{
			padding:10px 0;
		}
	  }
	  .title-list{
			padding:5px;
			display:inline-block;
			background:#065fa9;
			color:#fff;
			
		}
		
		.gx-movie{
			.title-list{
				float:left;
			}
			.tab-list{
				float:left;
				margin-left:200px;
				li{
					padding:5px 0;
					float:left;
					a{
						padding:5px 20px;
						
					}
				}
				
			}
        
		}
    }
</style>
