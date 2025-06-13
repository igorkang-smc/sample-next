import {db} from './data'
import { findByZip, updateByZip } from "@/mongoose/weather/services";

declare interface WeatherInterface {
  zip: string;
  weather: string;
  tempC: string;
  tempF: string;
  friends: string[];
}

export const resolvers = {
  Query: {
    weather: async (_: never, param: WeatherInterface) => {
      const data = await findByZip(param.zip);
      return [data];
    }
  },
  Mutation: {
    weather: async (_: never, param: { data: WeatherInterface }) => {
      await updateByZip(param.data.zip, param.data);
      const data = await findByZip(param.data.zip);
      return [data];
    }
  }
}