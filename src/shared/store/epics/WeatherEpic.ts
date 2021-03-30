import { Epic } from "redux-observable";
import { from, of } from "rxjs";
import { map, catchError, switchMap, filter } from "rxjs/operators";
import * as constants from "../constants";
import { RootState } from "../reducers";
import { actions } from "..";
import * as API from "../../services/Api";

export const weatherGetEpic: Epic<
  ActionsType,
  ActionsType,
  RootState,
  typeof API
> = (action$, store, { getWeather }) =>
  action$.pipe(
    filter((action) => action.type === constants.WEATHER_GET),
    switchMap((action) =>
      from(getWeather(action.payload.lat, action.payload.lng)).pipe(
        map(actions.weatherSetAction),
        catchError((error) => of(actions.weatherErrorAction(error)))
      )
    )
  );

export default [weatherGetEpic];
