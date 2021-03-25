import { createReducer } from "typesafe-actions";
import { actions, ActionsType } from "..";

export interface MapState {
  readonly ready: boolean;
}

const initialState = {
  ready: false,
};

export const mapReducer = createReducer<MapState, ActionsType>(
  initialState
).handleAction(actions.mapReadyAction, (state) => ({ ...state, ready: true }));
