const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async ()=>{
    try {
        const url = process.env.DATABASE_URL;

        await mongoose.connect(`${url}`)

        console.log("connected to mongo")
    } catch (error) {
        throw new Error("Unable to connect to DB")
    };
}

module.exports = connectDb;