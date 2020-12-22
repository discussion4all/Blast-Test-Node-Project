const MongoClient = require("mongodb").MongoClient;

var dbConnection;

function mongodb(url,dbname){
    MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
        if (err) {
          console.log('Database is not connected. Error:', err);
        } else {
          console.log('Database connection established to', url);
          
          return dbConnection = db.db(dbname);
        }
      });
}

mongodb.prototype.insert = async function(collection,query,callback){
    let table = await dbConnection.collection(collection);
    table.insertOne(query,function(err,result){
        if(err){
            callback(err,null);
        }else{
            callback(null,result);
        }
    });
}

mongodb.prototype.insertWithoutcallback = async function(collection, query) {
    var table = await dbConnection.collection(collection);
    return await table.insertOne(query);       
  }

mongodb.prototype.find = async function(collection,query,callback){
    let table = await dbConnection.collection(collection);
    table.find(query).toArray(function(err,result){
        if(err){
            callback(err,null);
        }else{
            callback(null,result);
        }
    })
}

module.exports = mongodb;