
var page = require('webpage').create();
var execFile = require('child_process').execFile;
var n = 0;
var id= 5832;
var url = 'http://www.idyjy.com/w.asp?p=304&f=3&l=s';
var allurl;
var allpaage;
var nextpage;
var numberpage = 308;


phantom.outputEncodings = 'utf-8';


listPage(url);


function listPage(u){
    numberpage ++;
    page.open(u,function(status){
        console.log(status);
            var pagedata = page.evaluate(function(){
                var all_table= document.getElementsByClassName('play-img');
                var nextpage;
                if(document.getElementById('pages').getElementsByTagName('a').length == 6){
                    nextpage = document.getElementById('pages').getElementsByTagName('a')[4].href;
                }else{
                    nextpage = document.getElementById('pages').getElementsByTagName('a')[6].href;
                }

                var arr = [];
                for(var i =0;i < all_table.length ; i++){
                    arr.push(all_table[i].href);
                }
                var data = {
                    all_number:all_table.length,
                    arr:arr,
                    nextpage:nextpage
                };
                return data;
            });
        nextpage = pagedata.nextpage;
        allurl = pagedata.arr;
        allpaage = pagedata.all_number;
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

            var name = document.getElementById('name').innerText;
            var u = document.getElementsByClassName('down_part_name');
            var b =document.getElementsByClassName('info')[0].getElementsByTagName('li')[0].childNodes;
            var typeA =document.getElementsByClassName('info')[0].getElementsByTagName('li')[1].getElementsByTagName('a');

            var director ;
            if(document.getElementsByClassName('info')[0].getElementsByTagName('li')[2].getElementsByTagName('a')[0]){
                director = document.getElementsByClassName('info')[0].getElementsByTagName('li')[2].getElementsByTagName('a')[0].innerText;
            }else{
                director = null;
            }
            var star = document.getElementsByClassName('info')[0].getElementsByTagName('li')[3].getElementsByTagName('a');
            var plot = document.getElementsByClassName('endtext')[0].innerText;


            for(var k =0;k< u.length;k++){
                updatahref.push(u[k].getElementsByTagName('a')[0].innerText,u[k].getElementsByTagName('a')[0].href)
            }
            for(var i =0;i< typeA.length;i++){
                type.push(typeA[i].innerText)
            }
            for(var j =0;j< star.length;j++){
                stars.push(star[j].innerText)
            }

            data = [name,b[1].data.replace(/\s/g,""),b[3].data,updatahref,type,director,stars,plot];
            return data;
        });
        console.log('-----------------------------第'+numberpage+'页----------------------+');
        console.log('----------------'+data[0]);
        data.push(id);
        insert(data);
        n ++;
        if( n < allpaage){
           page_info(allurl[n])

        }else{
            if(numberpage == 620){
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
    child = execFile('node', ['mongodb.js', JSON.stringify(info)], null,
        function (err, stdout, stderr) {
            console.log('连接成功');
        });
}
