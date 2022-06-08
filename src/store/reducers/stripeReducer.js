import {
  FETCH_PRICES_REQUESTED,
  FETCH_PRICES_FAILED,
  FETCH_PRICES_SUCCESSED,
  CREATE_LINK_FAILED,
  CREATE_LINK_REQUESTED,
  CREATE_LINK_SUCCESSED,
} from "../actionTypes";

const initialState = {
  isLoading: false,
  pricesData: [],
  showMessage: false,
  responseData: null,
};

const stripeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRICES_REQUESTED: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_PRICES_SUCCESSED: {
      return {
        ...state,
        isLoading: false,
        pricesData: payload.prices,
      };
    }
    case FETCH_PRICES_FAILED: {
      return {
        ...state,
        isLoading: false,
        pricesData: [],
      };
    }
    case CREATE_LINK_REQUESTED: {
      return {
        ...state,
        isLoading: true,
        showMessage: false,
      };
    }
    case CREATE_LINK_SUCCESSED: {
      console.log("CREATE_LINK_SUCCESSED r: ", payload);
      return {
        ...state,
        isLoading: false,
        showMessage: true,
        responseData: payload,
      };
    }
    case CREATE_LINK_FAILED: {
      console.log("CREATE_LINK_FAILED rrr: ", payload);
      return {
        ...state,
        isLoading: false,
        showMessage: true,
        responseData: payload,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default stripeReducer;
