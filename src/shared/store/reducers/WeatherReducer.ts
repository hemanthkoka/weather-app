import Weather from "../../models/Weather";
import * as constants from "../constants";

export interface WeatherState {
  weather?: Weather;
}

const initialState = {};

export const weatherReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case constants.WEATHER_SET:
      return {
        ...state,
        weather: new Weather(action.payload),
      };
    case constants.WEATHER_ERROR: {
      console.error(action.payload);
      return state;
    }
    default:
      return state;
  }
};
