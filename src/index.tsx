import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { App } from "./App";

import { store } from "./shared/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
