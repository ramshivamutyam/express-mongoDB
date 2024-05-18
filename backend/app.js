import dbConnect from "./db/dbConnect.js";
import userRouter from "./routes/user.routes.js";
import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'

const app = express();

// default middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

// Curb Cores Error by adding a header here
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
//     );
//     res.setHeader(
//         "Access-Control-Allow-Methods",
//         "GET, POST, PUT, DELETE, PATCH, OPTIONS"
//     );
//     next();
// });
// execute database connection
(async () => {
    await dbConnect();
})();

// routers
app.use("/api/user", userRouter);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server is running on port : ${PORT}`);
});
