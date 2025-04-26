import { Box, Typography } from "@mui/material";
import BitcoinRates from "../components/BitcoinRates";

const LabOne = () => {
  return (
    <Box>
      <Typography>Bitcoin Rates based on currency</Typography>

      <BitcoinRates />
    </Box>
  );
};

export default LabOne;
