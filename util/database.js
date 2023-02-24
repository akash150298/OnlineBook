import mongodb from 'mongodb';
const MongoClient = mongodb.MongoClient;
let _db;

const mongoConnect = (callback) =>{

MongoClient.connect('mongodb+srv://akash:akash@cluster0.6eyb6dx.mongodb.net/shop?retryWrites=true&w=majority')
.then(client =>{
   console.log('Connected!');
   _db = client.db()
   callback(client);
}
).catch(err=>{ 
  console.log(err)
  throw err;
});
}
const getDb = () =>{
  if(_db){
    return _db;
  }
  throw 'No database found!';
}
export {
  mongoConnect,
  getDb
};