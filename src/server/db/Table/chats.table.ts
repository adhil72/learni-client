import mongoose, { Schema, Document, Model } from "mongoose";

interface IChat extends Document {
    id: string;
    user_id: string;
}

const ChatSchema: Schema<IChat> = new Schema({
    id: { type: String, required: true },
    user_id: { type: String, required: true },
});

let ChatModel: Model<IChat>;

try {
    ChatModel = mongoose.model<IChat>("Chat");
} catch (error) {
    ChatModel = mongoose.model<IChat>("Chat", ChatSchema);
}

export const getChatModel = () => ChatModel;
