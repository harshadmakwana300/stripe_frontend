import ReactLoading from "react-loading";
import { Box } from "@mui/material";

const MyLoader = () => {
  return (
    <Box className="loading">
      <ReactLoading type="spinningBubbles" color="#9840D2" />;
    </Box>
  );
};

export default MyLoader;
