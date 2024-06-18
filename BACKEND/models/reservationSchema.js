import mongoose  from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "first narm must contain at least 3 characters"],
        maxLength: [30, "first name connot exceed 30 characters!"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "last name must contain at least 3 characters"],
        maxLength: [30, "last name connot exceed 30 characters!"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "provide a valid email!"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone number must contain only 10 digits!"],
        maxLength: [10, "phone number must contain only 10 digits!"],
    },
    time:{
        type: String,
        required: true,

    },
    date: {
        type: Date,
        required: true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);

