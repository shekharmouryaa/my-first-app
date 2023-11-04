import { createStore } from "redux";
import { reducers } from "./reducers";

const mystore = createStore(reducers);

export default mystore;