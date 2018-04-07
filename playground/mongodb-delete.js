const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
    
          if(err){
              return console.log('Unable to connect to the MongoDB server ');
          }

          var db = client.db('TodoApp');
          console.log('Connected to MongoDB Server ');
          //delete Many
        //   db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
        //       console.log(result);
        //   });
        
          //delete One
        //   db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
        //     console.log(result);
        //   });

          //findOneAndDelete
        //   db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
        //     console.log(result);
        //   });

          db.collection('Users').findOneAndDelete(
              {_id:new ObjectID('5ac8434410c5e204e411de63')
            }).then((result) => {
                console.log(JSON.stringify(result,undefined,4));
            })



          client.close();
});