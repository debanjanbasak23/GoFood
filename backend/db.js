const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://gofood:gofood@cluster0.ucl2grn.mongodb.net/gofoodmern?retryWrites=true&w=majority'
const mongoDB = async () => {
    await mongoose.connect(mongoURL, { useNewUrlParser: true }, async (err, res) => {
        if (err) console.log("---", err)
        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("food_category")
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err) console.log(err);
                    else {
                        global.food_items = data;
                        global.foodCategory = catData;
                    }
                })

                // if(err) console.log(err);
                // else {
                //     global.food_items = data
                // }
            })
        }
    });
}

module.exports = mongoDB;
