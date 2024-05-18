// external imports
import mongoose from "mongoose";
import "dotenv/config";

async function dbConnect() {
  // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
  await mongoose.connect(process.env.baseURL)
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error.message);
    });
}

export default dbConnect;
