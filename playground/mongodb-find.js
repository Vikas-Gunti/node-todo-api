 const {MongoClient,ObjectID} = require('mongodb');

 MongoClient.connect('mongodb://localhost/TodoApp', (err,client) => {
    
    if(err){
        return console.log('Unble to connect to MongoDB Server');
    }

    console.log('Connected to mongodb Server');
    var db = client.db('TodoApp');
    // db.collection('Todos').find({_id : new ObjectID('5ac841420375562e34de5bd2')}).toArray().then((docs) => {  //find() method just returns the cursor or pointer.toArray gets the docs
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,4));

    // }, (err) => {
    //     console.log('Unable to fetch Todos: ',err);
    // }) ; 
    

    // db.collection('Todos').find().count().then((count) => {  //find() method just returns the cursor or pointer.toArray gets the docs
    //     console.log(`Todos count : ${count}`);
   

    // }, (err) => {
    //     console.log('Unable to fetch Todos: ',err);
    // }) ; 

    db.collection('Users').find({name:'Vikas Gunti'}).toArray().then( (docs) => {

        console.log(JSON.stringify(docs,undefined,4));
    });

    client.close();

 });