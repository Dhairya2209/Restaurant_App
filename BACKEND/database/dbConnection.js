import mongoose from "mongoose";

export const dbConnection =() =>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "RESTRO"
    }).then(() => {
        console.log(`connected to databse successfullu`);
    }).catch(err => {
        console.log(`Some error occured while connecting to databse! ${err}`);
    });
};


