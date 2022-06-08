import axiosInstance from "./apis";
import { apisUrls } from "./apisUrls";

export const fetchStripeService = async (product_id) => {
  return await axiosInstance
    .post(apisUrls.fetch_prices, { product_id })
    .then((response) => response)
    .catch((error) => error.response);
};

export const createPaymentLinkService = async (price_id) => {
  return await axiosInstance
    .post(apisUrls.create_link, { price_id })
    .then((response) => response.data)
    .catch((error) => error.response);
};
