
var Mongoclient = require('mongodb').MongoClient;
var DB_url = 'mongodb://localhost:27017/movies';



var a = JSON.parse(process.argv[2]);


var insertData = function (db, callback) {
    var collectioninfo = db.collection("database");

    //插入信息
    var headData = [{
        name: a[0],
        time: a[1],
        adder: a[2],
        updatahref: a[3],
        type:a[4],
        director:a[5],
        stars:a[6],
        plot:a[7],
        id:a[8]
    }];
    collectioninfo.insert(headData, function (err, result) {
        callback(result);

    })
};
Mongoclient.connect(DB_url,function(err,db){
    console.log('连接成功');
    insertData(db,function(result){
        db.close();
    })

});
