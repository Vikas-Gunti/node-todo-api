var mongoose= require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};

// var User = mongoose.model('User',{
//     Email : {
//         type:String,
//         required:true,
//         min:1,
//         trim:true
//     }
// });

// var newUser = new User({
//   Email:'me'
// });

// newUser.save().then((doc) => {
//     console.log('user added',doc);
// },(err) => {
//      console.log('Unable to add user:',err);
// });