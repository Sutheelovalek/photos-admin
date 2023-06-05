import { Schema, model, models } from "mongoose";


const CategorySchema = new Schema({
name: {type: "string", required: true},
});

export const Category = models?.Category || model('Category', CategorySchema);