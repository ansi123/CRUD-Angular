const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CrudDB', { useNewUrlParser: true, useUnifiedTopology: true  },(err)=>{
    if(!err)
      console.log('Mongodb connection succeeded....');
    else
        console.log('error in mongo connection :'+err);
})

// module.exports = mongoose;
require('./employee')