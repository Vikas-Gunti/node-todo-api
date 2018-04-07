var {mongoose} = require('../db/mongoose');

var User = mongoose.model('User',{
    Email : {
        type:String,
        required:true,
        min:1,
        trim:true
    }
});

module.exports = {User};