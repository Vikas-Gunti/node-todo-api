const {mongoose} = require('mongoose');
const {ObjectID} = require('mongodb');
const {Todo} = require('../server/models/todo');
const {User} =require('../server/models/user');
//var id = '5ac9a4a0d648aa0cbceac97111';
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos :',todos);
// });

// Todo.findOne({    //If we want to get 1 doc by any field then use this query
//     _id:id
// }).then((todo) => {
//     console.log('Todo :',todo)
// });

// Todo.findById(id).then((todo) => {  //If we want to get 1 doc by id then use this //recommonded
//    if(!todo){
//        console.log('Id not found');
//    }
//     console.log('Todo By Id :', todo)
// }).catch((e) => console.log(e));

User.findById('5ac8ab4148464c134c7a02e6').then((user) => {
    if(!user){
        return console.log('User not found');
    }
    console.log(JSON.stringify(user,undefined,4));
}).catch((e) => console.log(e));