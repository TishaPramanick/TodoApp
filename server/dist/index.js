import express from "express";
import "dotenv/config";
import cors from "cors";
import apolloServer from "./config/apolloServer.js";
import { expressMiddleware } from "@apollo/server/express4";
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.get("/", (req, res) => {
    return res.json({ status: 200, message: "App is working" });
});
//* Starting apollo server
const startApolloServer = async () => {
    await apolloServer.start();
    app.use("/graphql", expressMiddleware(apolloServer));
};
startApolloServer();
app.listen(PORT, () => {
    console.log("Server is running on PORT : " + PORT);
});
