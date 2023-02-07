import express from "express";
import 'express-async-errors';
import 'dotenv/config';

import { router } from "./routes/router";

const server = express();

server.use(express.json());
server.use(router);


export { server };

