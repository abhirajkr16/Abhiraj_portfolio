require("dotenv").config();

const express = require("express");
const cors = require("cors");

const codingRoutes =
    require("./routes/coding.routes");

const app = express();


const allowedOrigins = [

    "http://localhost:5501",

    "http://127.0.0.1:5501",

    "https://abhiraj-portfolio-ivory.vercel.app"

];


app.use(
    cors({
        origin: function (origin, callback) {

            if (!origin) {

                return callback(null, true);

            }

            if (allowedOrigins.includes(origin)) {

                return callback(null, true);

            }

            return callback(
                new Error("Not allowed by CORS")
            );

        }
    })
);


app.use(express.json());


app.get("/api/health", (req, res) => {

    res.json({
        success: true,
        message: "Coding API is running"
    });

});


app.use(
    "/api/coding",
    codingRoutes
);


app.use((err, req, res, next) => {

    console.error(err);

    res.status(500).json({
        success: false,
        message: "Internal server error"
    });

});


module.exports = app;