import mongoose from 'mongoose';
import { msg } from '../Helpers/Logger';
import { getUserModel } from './Table/users.table';

const info = {
    connected: false
};


export const connect = async () => {
    console.log(info.connected);

    if (info.connected) return;
    await mongoose.connect(process.env.MONGO_URI || "")
        .then(() => {
            info.connected = true
        });
    msg('Connecting database :' + process.env.MONGO_URI as any);
}