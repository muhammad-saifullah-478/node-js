const mongoose = require("mongoose");

async function connectMogoDB(url) {

  mongoose;

  return mongoose.connect(url);

}



module.exports={
    
    connectMogoDB

}
