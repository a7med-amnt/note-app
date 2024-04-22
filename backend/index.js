import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "#configs/connectDb.js";

const app = express();
dotenv.config();
connectDb();


app.use(express.json());

let port = process.env.PORT || 4948;
app.listen(port, function () {
    console.log(
        "server listen on port " +
            port +
            " the URL http://localhost:" +
            port +
            " -_-"
    );
});
