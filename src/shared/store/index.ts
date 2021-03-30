import { applyMiddleware, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import * as API from "../services/Api";
import * as actions from "./actions";
import epics from "./epics";
import reducers, { RootState } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
export type RootStateType = RootState;

const epicMiddleware = createEpicMiddleware<
  ActionsType,
  ActionsType,
  RootState
>({
  dependencies: API,
});

function configureStore(initialState?: RootStateType) {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(epicMiddleware))
  );
}

const store = configureStore();

epicMiddleware.run(epics);

export { store, actions };
