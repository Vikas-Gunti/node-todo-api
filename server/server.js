  var express = require('express');
  var bodyparser = require('body-parser'); //converts json into object

  //var {mongoose} = require('F:/node-todo-api/server/db/mongoose');
  var {mongoose} = require('./db/mongoose');
  
  var {Todo} = require('./models/todo');
  var {User} = require('./models/user');

  var app = express();

  app.use(bodyparser.json()); 

  app.post('/todos', (req,res) => {
        console.log(req.body);
        
        var todo = new Todo({
            text: req.body.text
        });

        todo.save().then((doc) => {
            res.send(doc);
        },(err) => {
            res.status(400).send(err);
        });
  })

  app.get('/todos', (req,res) => {

    Todo.find().then((todos) => {

        res.send({todos});
    },(err) => {
        res.status(400).send(err);
    });

  })

  app.listen(3000, () => {
      console.log('Started on port 3000');
  });

  module.exports = {app};


   
