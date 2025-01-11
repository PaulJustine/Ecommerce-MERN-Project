import mongoose from "mongoose";
const connectDB = async () => {

    mongoose.connection.on('connected',() => {
        console.log('DB Connected');
    }
)

await mongoose.connect(`mongodb://127.0.0.1:27017/e-com`)

}


export default connectDB;