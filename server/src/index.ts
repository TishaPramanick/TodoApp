import express , {Application , Request , Response} from "express"
import "dotenv/config"
import cors from "cors"
import apolloServer from "./config/apolloServer.js";
import {expressMiddleware} from "@apollo/server/express4";

const app : Application = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors());


app.get("/" , (req : Request , res : Response) => {
    return res.json({status : 200 , message : "App is working"});
})


//* Starting apollo server
const startApolloServer = async()=>{
    await apolloServer.start();
    app.use("/graphql" , expressMiddleware(apolloServer))
}

startApolloServer();

app.listen(PORT , ()=>{
    console.log("Server is running on PORT : " + PORT);
});