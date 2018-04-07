//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb'); //both the require stmts are same but using diff tecniques

var obj = new ObjectID(); //utlizination of ObjectID in our application
console.log(obj);
var user = {
    name: 'Vikas Gunti',
    age:24
};
var {name} = user; //Object destructuring-her we are pulling out the name property from user and call it as name.
console.log(name); //Vikas Gunti
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
    if(err){
         return console.log('Unable to connect to mongodb server');
    }
    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text : 'Something to do',
    //     completed : false
    // }, (err,result) => {
    //     if(err){
    //         console.log('Unable to insert todo :',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,4));
    // })


    // console.log("Connected to MongoDB server");
    // db.collection('Users').insertOne({
    //     name: 'Vikas Gunti',
    //     age: 23,
    //     location : 'Bangalore'
    // },(err,result) => {
    //     if(err){
    //         return console.log('Unable to Insert users data: ',err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,4));

    // });
    
    
    client.close();
});