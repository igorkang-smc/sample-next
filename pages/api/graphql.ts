import {ApolloServer} from "@apollo/server"
import {startServerAndCreateNextHandler} from "@as-integrations/next";
import {resolvers} from "@/graphql/resolvers";
import { typeDefs } from '@/graphql/shema'
import {NextApiRequest, NextApiResponse, NextApiHandler} from "next";
import dbConnect from "@/middleware/db-connetct";



// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const server = new ApolloServer({
  resolvers,
  typeDefs
});

const handler = startServerAndCreateNextHandler(server);

const allowCors =
  (fn: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Allow", "POST");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    if (req.method === "OPTIONS") {
      res.status(200).end();
    }
    return await fn(req, res);
  }

const connectDB = (fn: NextApiHandler) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    await dbConnect();
    return await fn(req, res);
  };


export default connectDB(allowCors(handler));

