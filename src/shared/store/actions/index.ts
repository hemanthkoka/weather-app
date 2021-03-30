import Weather from "../../models/Weather";

import {
  MAP_READY,
  WEATHER_GET,
  WEATHER_SET,
  WEATHER_ERROR,
} from "../constants";

export const weatherGetAction = (lat: number, lng: number) => {
  return {
    type: WEATHER_GET,
    payload: { lat, lng },
  };
};

export const weatherSetAction = (weather: Weather) => {
  return {
    type: WEATHER_SET,
    payload: weather,
  };
};

export const weatherErrorAction = (error: Error) => {
  return {
    type: WEATHER_ERROR,
    payload: error,
  };
};

export const mapReadyAction = () => {
  return {
    type: MAP_READY,
  };
};
