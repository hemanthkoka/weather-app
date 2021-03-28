import { action, createReducer } from "typesafe-actions";
import { actions, ActionsType } from "..";
import Weather from "../../models/Weather";

export interface WeatherState {
  weather?: Weather;
}

const initialState = {};

export const weatherReducer = createReducer(initialState)
  .handleAction(actions.weatherSetAction, (state, action) => ({
    ...state,
    weather: new Weather(action.payload),
  }))
  .handleAction(actions.weatherErrorAction, (state, action) => {
    console.error(action.payload);
    return state;
  });
