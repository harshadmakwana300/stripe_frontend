import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image1 from "../assets/images/image1.png";
import Image2 from "../assets/images/image2.png";

const MyStripeCard = ({ data, handleBuyNow }) => {
  var imgArr = [Image1, Image2];
  var randomImg = Math.floor(Math.random() * imgArr.length);
  return (
    <Card>
      <CardMedia
        sx={{
          objectFit: "contain",
        }}
        component="img"
        height="160"
        image={imgArr[randomImg]}
        alt="my image"
      />
      <CardContent sx={{ padding: "0" }}>
        <Typography align="center" variant="h5">
          {data.unit_amount}&nbsp;Credits
        </Typography>
        <Typography align="center" variant="h6">
          ${parseFloat(data.unit_amount / 100).toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: "16px" }}>
        <Button
          onClick={() => {
            handleBuyNow(data.id);
          }}
          variant="outlined"
          sx={{
            color: "#9840D2",
            boxShadow: "3px 4px 7px 2px #00000040",
            height: "41px",
            width: "134px",
            borderRadius: "5px",
            padding: "12px 34px 12px 34px",
            margin: "auto",
          }}
          size="small"
        >
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default MyStripeCard;
