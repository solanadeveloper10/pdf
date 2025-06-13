import { Box, Grid, Link, Typography } from "@mui/material";
import Chart from "./Chart";
import { comments } from "../constants";
import Comment from "./Comment";

const Section5 = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        px: { xs: 2, md: 8 },
        zIndex: 12,
        backgroundColor: "hsl(230, 13%, 9%)",
      }}
    >
      <Grid container spacing={{ xs: 4, md: 8 }}>
        <Grid size={{ xs: 12, md: 8, xl: 10 }}>
          <Box mb={3}>
            <Chart />
          </Box>

          {comments.map((comment) => (
            <Comment {...comment} />
          ))}
        </Grid>
        <Grid size={{ xs: 12, md: 4, xl: 2 }} py={2}>
          <Box display='flex' gap={1}>
            <Box component='img' src='/usd.png' height={100}></Box>
            <Typography
              fontSize='0.875rem'
              fontWeight='bold'
              color='rgb(156,163,175)'
            >
              Pump dollar fun (PDF)
            </Typography>
          </Box>
          <Typography
            fontSize='0.875rem'
            color='rgb(156,163,175)'
            mt={2}
            mb={1}
          >
            bonding curve progress: 65%
          </Typography>
          <Box
            overflow='hidden'
            bgcolor='rgb(55,65,81)'
            width='100%'
            height={30}
            borderRadius={2}
            mb={3}
          >
            <Box bgcolor='rgb(134,239,172)' height={30} width='65%'></Box>
          </Box>

          <Link
            sx={{
              width: "100%",
              display: "block",
              textAlign: "center",
              color: "rgb(156,163,175)",
              fontSize: "0.875rem",
              borderRadius: 0.5,
              py: 0.2,
              mb: 1,
              transition: "0.3s",
              ":hover": {
                cursor: "pointer",
                bgcolor: "rgb(75,85,99)",
              },
            }}
            bgcolor='rgb(55,65,81)'
          >
            contract address: ...
          </Link>
          <Link
            sx={{
              width: "100%",
              display: "block",
              textAlign: "center",
              color: "rgb(156,163,175)",
              fontSize: "0.875rem",
              borderRadius: 0.5,
              py: 0.2,
              mb: 1,
              transition: "0.3s",
              ":hover": {
                cursor: "pointer",
                bgcolor: "rgb(75,85,99)",
              },
            }}
            bgcolor='rgb(55,65,81)'
          >
            trade on MEXC
          </Link>
          <Link
            sx={{
              width: "100%",
              display: "block",
              textAlign: "center",
              color: "rgb(156,163,175)",
              fontSize: "0.875rem",
              borderRadius: 0.5,
              py: 0.2,
              transition: "0.3s",
              ":hover": {
                cursor: "pointer",
                bgcolor: "rgb(75,85,99)",
              },
            }}
            bgcolor='rgb(55,65,81)'
          >
            view coin in advanced
          </Link>

          <Box mt={3}>
            <Box display='flex' justifyContent='space-between'>
              <Typography
                sx={{
                  fontWeight: 700,
                  color: "rgb(156,163,175)",
                  fontSize: "1rem",
                }}
              >
                top holders
              </Typography>
              <Box>
                <Link
                  sx={{
                    width: "100%",
                    display: "block",
                    textAlign: "center",
                    color: "rgb(156,163,175)",
                    fontSize: "0.875rem",
                    borderRadius: 0.5,
                    py: 0.2,
                    px: 1,
                    transition: "0.3s",
                    ":hover": {
                      cursor: "pointer",
                      bgcolor: "rgb(75,85,99)",
                    },
                  }}
                  bgcolor='rgb(55,65,81)'
                >
                  generate bubblemap
                </Link>
              </Box>
            </Box>
            <Box mt={1}>
              {[1, 2, 3, 5, 6, 7, 8, 9, 10].map((i) => (
                <Box display='flex' justifyContent='space-between'>
                  <Typography fontSize='0.875rem' color='rgb(156,163,175)'>
                    {i}. yeruqe
                  </Typography>
                  <Typography fontSize='0.875rem' color='rgb(156,163,175)'>
                    20%
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section5;
