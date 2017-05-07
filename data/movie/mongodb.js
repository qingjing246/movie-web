
var Mongoclient = require('mongodb').MongoClient;
var DB_url = 'mongodb://localhost:27017/movies';



var a = JSON.parse(process.argv[2]);


var insertData = function (db, callback) {
    var collectioninfo = db.collection("database");

    //插入信息
    var Data = [{
        name: a[0],
        time: a[1],
        adder: a[2],
        updatahref: a[3],
        updataname:a[4],
        type:a[5],
        director:a[6],
        stars:a[7],
        plot:a[8],
        img:a[9],
        pf:a[10],
        id:a[11],
        datatype:'movie'
    }];
    collectioninfo.insert(Data, function (err, result) {
        callback(result);

    })
};


Mongoclient.connect(DB_url,function(err,db){
    console.log('连接成功');
    insertData(db,function(result){
        db.close();
    })

});
