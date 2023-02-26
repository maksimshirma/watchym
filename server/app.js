import express, { json, urlencoded } from "express";
import mongoose, { connect } from "mongoose";
import config from "config";
import chalk from "chalk";
import cors from "cors";
import { initDatabase } from "./startUp/initDatabase.js";
import routes from "./routes/index.js";

const app = express();

app.use(json());
app.use(urlencoded({extended: false}));
app.use(cors());
app.use("/api", routes);

const PORT = config.get("port") ?? 8080;

async function start() {
    try {
        mongoose.connection.once("open", () => {
            initDatabase();
        })
        await connect(config.get("mongoUri"));
        app.listen(PORT, () =>
            console.log(chalk.green(`Server has been started on port ${PORT}...`))
        )
    } catch (error) {
        console.log(chalk.red(e.message));
        process.exit(1);
    }
}

start();