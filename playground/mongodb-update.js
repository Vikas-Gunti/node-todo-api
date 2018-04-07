const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
    
          if(err){
              return console.log('Unable to connect to the MongoDB server ');
          }

          var db = client.db('TodoApp');
          console.log('Connected to MongoDB Server ');
         
        //   db.collection('Todos').findOneAndUpdate(
        //       {
        //           _id:new ObjectID('5ac88b0f7da9ac10a14347f7')
        //       },
        //       {
        //           $set:{
        //               completed: true
        //           }
                 
        //       },{
        //           returnOriginal: false
        //       })
        //       .then((result) => {
        //         console.log(result);
        //       })

        db.collection('Users').findOneAndUpdate(
            {
                _id:new ObjectID('5ac845ef7fddc52ea0d2c0c4')
            },
           {
            $inc:{
                    age:1
              },
              $set:{
                    name:'kaushik'
              }
          },
          {
                returnOriginal:false
          }).then((result) => {
                console.log(result);
          })

          client.close();
});