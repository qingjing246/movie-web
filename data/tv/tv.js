
var page = require('webpage').create();
var execFile = require('child_process').execFile;
var n = 0;
var id= 0;
var url = 'http://www.idyjy.com/w.asp?p=1&f=2&l=s';
var allurl;
var allpaage;
var nextpage;
var numberpage = 0;
var pingfen;

phantom.outputEncodings = 'utf-8';


listPage(url);


function listPage(u){
    numberpage ++;
    page.open(u,function(status){
        console.log(status);
        var pagedata = page.evaluate(function(){
            var all_table= document.getElementsByClassName('play-img');
            var a =document.getElementsByClassName('pRightBottom');
            var nextpage;
            if(document.getElementById('pages').getElementsByTagName('a').length == 6){
                nextpage = document.getElementById('pages').getElementsByTagName('a')[4].href;
            }else{
                nextpage = document.getElementById('pages').getElementsByTagName('a')[6].href;
            }
            var arr2 = [];
            var arr = [];
            for(var i =0;i < all_table.length ; i++){
                arr.push(all_table[i].href);
            }
            for(var c = 0;c<a.length;c++){
                arr2.push(a[c].innerText);
            }

            var data = {
                all_number:all_table.length,
                arr:arr,
                nextpage:nextpage,
                pingfen:arr2
            };
            return data;
        });
        nextpage = pagedata.nextpage;
        allurl = pagedata.arr;
        allpaage = pagedata.all_number;
        pingfen= pagedata.pingfen;
        console.log("----------打开电影详情获取-----------");
        n = 0;

        page_info(allurl[n]);
    })
}
var s;
function page_info(page_url){
    id ++;
    page.open(page_url, function (status) {
        console.log(status);
        console.log('打开链接：'+page_url);

        var data = page.evaluate(function(){
            var type = [];
            var stars = [];
            var updatahref = [];
            var updataname = [];
            //图片
            var imgUrl = document.getElementsByClassName('pic')[0].querySelector('img').src;
            //名字
            var name = document.getElementById('name').innerText;
            //时间地区
            var b =document.getElementsByClassName('info')[0].getElementsByTagName('li')[1].childNodes;
            //类型
            var typeA =document.getElementsByClassName('info')[0].getElementsByTagName('li')[2].getElementsByTagName('a');
            for(var i =0;i< typeA.length;i++){
                type.push(typeA[i].innerText)
            }
            //导演
            var director ;
            if(document.getElementsByClassName('info')[0].getElementsByTagName('li')[3].getElementsByTagName('a')[0]){
                director = document.getElementsByClassName('info')[0].getElementsByTagName('li')[2].getElementsByTagName('a')[0].innerText;
            }else{
                director = null;
            }
            //明星
            var star = document.getElementsByClassName('info')[0].getElementsByTagName('li')[4].getElementsByTagName('a');
            for(var j =0;j< star.length;j++){
                stars.push(star[j].innerText)
            }
            //简介
            var plot = document.getElementsByClassName('endtext')[0].innerText;
            //下载链接
            var u = document.getElementsByClassName('down_part_name');
            for(var k =0;k< u.length;k++){
                updatahref.push(u[k].getElementsByTagName('a')[0].href);
                updataname.push(u[k].getElementsByTagName('a')[0].innerText)
            }



            data = [name,b[1].data.replace(/\s/g,""),b[3].data,updatahref,updataname,type,director,stars,plot,imgUrl];
            return data;
        });
        console.log('-----------------------------第'+numberpage+'页----------------------+');
        console.log('----------------'+data[0]);
        data.push(pingfen[n],'t'+id);
        insert(data);
        n ++;
        if( n < allpaage){
            page_info(allurl[n])

        }else{
            if(numberpage == 47){
                phantom.exit(0);
            }else{
                console.log("--------------下一页链接"+nextpage);
                listPage(nextpage);
            }

        }

    });

}

//插入数据库
function insert(info) {
    child = execFile('node', ['tvmongodb.js', JSON.stringify(info)], null,
        function (err, stdout, stderr) {
            console.log('连接成功');
        });
}
/**
 * Created by Administrator on 2017-05-04.
 */
