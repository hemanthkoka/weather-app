import { Epic } from "redux-observable";
import { from, of } from "rxjs";
import { filter, map, catchError, switchMap } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";

import { RootState } from "../reducers";
import { actions, ActionsType } from "..";
import * as API from "../../services/Api";

export const weatherGetEpic: Epic<
  ActionsType,
  ActionsType,
  RootState,
  typeof API
> = (action$, store, { getWeather }) =>
  action$.pipe(
    filter(isActionOf(actions.weatherGetAction)),
    switchMap((action) =>
      from(getWeather(action.payload.lat, action.payload.lng)).pipe(
        map(actions.weatherSetAction),
        catchError((error) => of(actions.weatherErrorAction(error)))
      )
    )
  );

export default [weatherGetEpic];
