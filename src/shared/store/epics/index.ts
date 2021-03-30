import { combineEpics } from "redux-observable";

import weatherEpic from "./WeatherEpic";

const rootEpic = combineEpics(...weatherEpic);

export default rootEpic;
