import { all, call, put, fork, takeLatest } from "redux-saga/effects";
import { FETCH_PRICES_REQUESTED, CREATE_LINK_REQUESTED } from "../actionTypes";
import {
  fetchStripeService,
  createPaymentLinkService,
} from "../services/stripe.service";
import {
  fetchPricesListSuccessed,
  fetchPricesListFailed,
  createPaymentLinkSuccessed,
  createPaymentLinkFailed,
} from "../actions/stripe.action";

function* fetchStripeSaga({ payload }) {
  try {
    const response = yield call(fetchStripeService, payload);
    yield put(fetchPricesListSuccessed(response.data));
  } catch (error) {
    yield put(fetchPricesListFailed(error));
  }
}

function* createPaymentLink({ payload }) {
  try {
    const response = yield call(createPaymentLinkService, payload);
    console.log("createPaymentLink response.....", JSON.stringify(response));
    if (response.success) {
      var data = {
        success: response.success,
        message: response.message,
        link: response.data.url,
      };
      console.log("");
      yield put(createPaymentLinkSuccessed(data));
    } else {
      var data = {
        success: response.data.success,
        message: response.data.message,
      };
      yield put(createPaymentLinkSuccessed(data));
    }
  } catch (error) {
    var data = {
      success: error.success,
      message: error.message,
    };

    yield put(createPaymentLinkFailed(error));
  }
}

export function* watchFetchStripe() {
  yield takeLatest(FETCH_PRICES_REQUESTED, fetchStripeSaga);
}

export function* watchCreatePaymentLink() {
  yield takeLatest(CREATE_LINK_REQUESTED, createPaymentLink);
}

export default function* rootSaga() {
  yield all([fork(watchFetchStripe), fork(watchCreatePaymentLink)]);
}
