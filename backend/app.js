import dbConnect from "./db/dbConnect.js";
import bcrypt, { hash } from "bcrypt";
import User from "./models/userModels.js";
import userRouter from "./routes/userRouter.js";
import express from "express";

const app = express();

// default middlewares
app.use(express.static("public"));
app.use(express.json());
// Curb Cores Error by adding a header here
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});
// execute database connection
(async () => {
    await dbConnect();
})();

// routers
app.use("/api/user", userRouter);

app.listen(3000, () => {
    console.log("server is running on port : 3000");
});
