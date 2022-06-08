import React, { useEffect } from "react";
import { MyLoader, MyStripeCard } from "../components";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPricesListRequested,
  createPaymentLinkRequested,
} from "../store/actions/stripe.action";
import { Grid } from "@mui/material";
import Swal from "sweetalert2";

const Home = () => {
  const dispatch = useDispatch();
  const stripeSelector = useSelector((state) => state.stripe);
  const handleBuyNow = (price_id) => {
    dispatch(createPaymentLinkRequested(price_id));
  };

  useEffect(() => {
    if (stripeSelector.showMessage && stripeSelector.responseData?.success) {
      window.open(stripeSelector.responseData?.link, "_self");
    }
    if (
      stripeSelector.showMessage &&
      stripeSelector.responseData?.success === 0
    ) {
      Swal.fire({
        icon: "error",
        text: stripeSelector.responseData?.message,
      });
    }
  }, [stripeSelector.showMessage]);

  useEffect(() => {
    dispatch(fetchPricesListRequested("prod_KybgHMaChwslc6"));
  }, []);

  if (stripeSelector.isLoading) return <MyLoader />;

  return (
    <Grid container spacing={2}>
      {stripeSelector.pricesData.map((item, index) => {
        return (
          <Grid key={index} item xl={3} md={3} sm={4} xs={12}>
            <MyStripeCard
              data={item}
              handleBuyNow={() => {
                handleBuyNow(item.id);
              }}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Home;
