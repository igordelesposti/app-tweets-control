import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import express from "express";
import routes from "./router";

dotenv.config();

export const app = express();

app.use(
  cors({
    origin: true,
  })
);

app.use(express.json());

app.use(routes);

const server = app.listen(process.env.PORT || 3333, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
