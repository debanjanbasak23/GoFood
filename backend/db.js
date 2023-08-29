const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://gofood:gofood@cluster0.ucl2grn.mongodb.net/gofoodmern?retryWrites=true&w=majority'
const mongoDB = async() =>{
    await mongoose.connect(mongoURL, { useNewUrlParser: true }, (err, res) => {
        if (err) console.log("---", err)
        else {
            console.log("connected");
        }
    });
}

module.exports = mongoDB;
