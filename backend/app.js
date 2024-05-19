import dbConnect from "./db/dbConnect.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// default middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

//import routers
import userRouter from "./routes/user.routes.js";
import itemsRouter from "./routes/items.routes.js";

// routers
app.use("/api/user", userRouter);
app.use("/api/items", itemsRouter);

// execute database connection
(async () => {
    await dbConnect();
})();

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server is running on port : ${PORT}`);
});
