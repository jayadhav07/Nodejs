const mongoose = require('mongoose');

const connectDB = async()=>{
await mongoose.connect('mongodb+srv://jayadhav2000:YoQNuD0Hb7XS1s76@devtinder.kka1i.mongodb.net/?retryWrites=true&w=majority&appName=DevTinder')
}

module.exports = connectDB;



