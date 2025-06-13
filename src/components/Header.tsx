import { Box, Typography } from "@mui/material";

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
        <Typography variant='h6' color='#fff' fontWeight='bold'>
          pump dollar fun
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
