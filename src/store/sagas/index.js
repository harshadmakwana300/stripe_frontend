import { all } from "redux-saga/effects";
import stripeSaga from "./stripe.saga";

export default function* rootSaga() {
  yield all([stripeSaga()]);
}
