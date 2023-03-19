import express, { json, urlencoded } from "express";
import mongoose, { connect } from "mongoose";
import config from "config";
import chalk from "chalk";
import cors from "cors";
import path from "path";
import { initDatabase } from "./startUp/initDatabase.js";
import routes from "./routes/index.js";
import {fileURLToPath} from 'url';

const app = express();

app.use(json());
app.use(urlencoded({extended: false}));
app.use(cors());
app.use("/api", routes);

const PORT = config.get("port") ?? 8080;

if (process.env.NODE_ENV === "production") {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    app.use("/", express.static(path.join(__dirname, "client")));
    const indexPath = path.join(__dirname, "client", "index.html");
    app.get("*", (req, res) => {
        res.sendFile(indexPath);
    })
}

async function start() {
    try {
        mongoose.connection.once("open", () => {
            initDatabase();
        });
        await connect(config.get("mongoUri"));
        app.listen(PORT, () =>
            console.log(chalk.green(`Server has been started on port ${PORT}...`))
        )
    } catch (error) {
        console.log(chalk.red(error.message));
        process.exit(1);
    }
}

start();