function carousel (m){
    var oli = document.getElementsByClassName(m.oli);
    var c_li = document.getElementById(m.c_ul).getElementsByTagName('li');
    var container = document.getElementsByClassName(m.container)[0];
    var n = 0;
    var speed = 0;
    var timeW;
    var l = oli.length;
    var w =oli[0].offsetWidth;
    var time;
    // 初始化
    for(var i =0;i<oli.length ; i++){
        oli[i].style.position = 'absolute';
        oli[i].style.left = w+'px';
    }
    oli[0].style.left = 0+'px';
    c_li[0].className = 'action';
    //点击切换
    container.onmouseover = function (){
        clearInterval(time);
    };
    container.onmouseout = function (){
        time = setInterval(setI,m.i_speed);

    };
    for(var k =0;k<c_li.length ; k++){
        c_li[k].index = k;
        c_li[k].onmouseover = function (){
            clearInterval(timeW);
            for(var k =0;k<c_li.length ; k++){
                c_li[k].className = '';
                oli[k].style.left = w+'px';
            }
            c_li[this.index].className = 'action';
            oli[this.index].style.left = 0+'px';
            n = this.index;
        };
    }



    //定时轮播
    time = setInterval(setI,m.i_speed);
    function setI(){
        speed =0;
        n++;
        if(n == l+1){
            n = 1;
        }

        if(n == l){
            c_li[n-1].className = '';
            c_li[0].className = 'action';
        }else{
            c_li[n-1].className = '';
            c_li[n].className = 'action';
        }
        timeW = setInterval(function (){
            speed ++;
            if(speed == w){
                oli[n-1].style.left = w+'px';
                clearInterval(timeW);
            }
            oli[n-1].style.left = -speed+'px';

            n == l? oli[0].style.left = (w-speed)+'px' : oli[n].style.left = (w-speed)+'px';
        },m.s_speed)
    }
}
