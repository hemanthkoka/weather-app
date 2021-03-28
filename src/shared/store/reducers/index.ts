import { combineReducers } from "redux";

import { weatherReducer, WeatherState } from "./WeatherReducer";
import { mapReducer, MapState } from "./MapReducer";

export type RootState = {
  weather: WeatherState;
  map: MapState;
};

const rootReducer = {
  weather: weatherReducer,
  map: mapReducer,
};

const reducers = combineReducers(rootReducer);

export default reducers;
