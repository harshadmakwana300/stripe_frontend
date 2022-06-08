import {
  FETCH_PRICES_FAILED,
  FETCH_PRICES_REQUESTED,
  FETCH_PRICES_SUCCESSED,
  CREATE_LINK_FAILED,
  CREATE_LINK_REQUESTED,
  CREATE_LINK_SUCCESSED,
} from "../actionTypes";

export const fetchPricesListRequested = (payload) => ({
  type: FETCH_PRICES_REQUESTED,
  payload,
});

export const fetchPricesListSuccessed = (payload) => ({
  type: FETCH_PRICES_SUCCESSED,
  payload,
});

export const fetchPricesListFailed = (payload) => ({
  type: FETCH_PRICES_FAILED,
  payload,
});

export const createPaymentLinkRequested = (payload) => ({
  type: CREATE_LINK_REQUESTED,
  payload,
});

export const createPaymentLinkSuccessed = (payload) => ({
  type: CREATE_LINK_SUCCESSED,
  payload,
});

export const createPaymentLinkFailed = (payload) => ({
  type: CREATE_LINK_FAILED,
  payload,
});
