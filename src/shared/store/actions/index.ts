import { createAction } from "typesafe-actions";
import Weather from "../../models/Weather";
import {
  MAP_READY,
  WEATHER_GET,
  WEATHER_SET,
  WEATHER_ERROR,
} from "../constants";

export const weatherGetAction = createAction(
  WEATHER_GET,
  (resolve) => (lat: number, lng: number) => resolve({ lat, lng })
);
export const weatherSetAction = createAction(
  WEATHER_SET,
  (resolve) => (weather: Weather) => resolve(weather)
);
export const weatherErrorAction = createAction(
  WEATHER_ERROR,
  (resolve) => (error: Error) => resolve(error)
);

export const mapReadyAction = createAction(MAP_READY);
