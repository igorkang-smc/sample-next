import type {NextApiRequest, NextApiResponse} from "next";
import { findByZip } from "@/mongoose/weather/services";
import dbConnect from "@/middleware/db-connetct";
dbConnect();


type WeatherDetailType = {
  zipcode: string;
  weather: string;
  temp?: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<NextApiResponse<WeatherDetailType> | void> {
  const data = await findByZip(req.query.zipcode as string);
  if (!data) {
    return res.status(404).json({ error: "Not Found" });
  }
  return res.status(200).json(data);
}
