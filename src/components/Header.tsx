import { Box, Typography } from "@mui/material";
import ConnectWallet from "./ConnectWallet";

const Header = () => {
  return (
    <Box
      height={80}
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      px={{ xs: 3, md: 8 }}
    >
      <Box display='flex' alignItems='center' gap={1}>
        <Box component='img' src='/usd.png' height={50} />

        <Typography
          variant='h6'
          color='#fff'
          fontWeight='bold'
          sx={{ display: { xs: "none", md: "block" } }}
        >
          pump dollar fun
        </Typography>
      </Box>
      <ConnectWallet />
    </Box>
  );
};

export default Header;
