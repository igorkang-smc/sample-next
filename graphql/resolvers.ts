import {db} from './data'

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
      return [db.find((item) => item.zip === param.zip)];
    }
  },
  Mutation: {
    weather: async (_: never, param: WeatherInterface) => {
      return [db.find((item) => item.zip === param.zip)];
    }
  }
}