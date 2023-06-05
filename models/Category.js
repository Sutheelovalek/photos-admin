import mongoose, { Schema, model, models } from "mongoose";


const CategorySchema = new Schema({
name: {type: "string", required: true},
parent: {type:mongoose.Types.ObjectId, ref:'Category'},
});

export const Category = models?.Category || model('Category', CategorySchema);