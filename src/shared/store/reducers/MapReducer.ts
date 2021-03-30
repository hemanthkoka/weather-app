import * as constants from "../constants";

export interface MapState {
  readonly ready: boolean;
}

const initialState = {
  ready: false,
};

export const mapReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case constants.MAP_READY:
      return {
        ...state,
        ready: true,
      };
    default:
      return state;
  }
};
