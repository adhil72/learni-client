import mongoose, { Model, Document } from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    id: { type: String, required: true },
});

interface IUser extends Document {
    email: string;
    password: string;
    id: string;
}

let UserModel: Model<IUser>;

try {
    UserModel = mongoose.model<IUser>("User");
} catch {
    UserModel = mongoose.model<IUser>("User", userSchema);
}

export const getUserModel = () => UserModel;
