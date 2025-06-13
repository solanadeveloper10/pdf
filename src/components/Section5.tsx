import { Box, Grid, Link, Typography } from "@mui/material";
import Chart from "./Chart";
import { comments } from "../constants";
import Comment from "./Comment";
import { useEffect, useState } from "react";
import { formatWalletAddress } from "../helpers/formatWalletAddress";
import BubbleMap from "./BubbleMap";

const Section5 = () => {
  const [holders, setHolders] = useState([]);

  useEffect(() => {
    const TOKEN_MINT = "BvLVj2kPd1nbHN4CQqZdfUtYCvS6x8kSaSNLYEBWpump";

    const getTokenLargestAccounts = async (mintAddress: string) => {
      const response = await fetch(
        "https://mainnet.helius-rpc.com/?api-key=4aba5ba9-8ebc-41d6-9354-b2e7dea4fedd",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            jsonrpc: "2.0",
            id: "1",
            method: "getTokenLargestAccounts",
            params: [mintAddress],
          }),
        }
      );

      const data = await response.json();

      setHolders(data.result.value);
      return data;
    };

    getTokenLargestAccounts(TOKEN_MINT);
  }, []);

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
            <Box mb={0.5}>
              <Comment {...comment} />
            </Box>
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
            bonding curve progress: 100%
          </Typography>
          <Box
            overflow='hidden'
            bgcolor='rgb(55,65,81)'
            width='100%'
            height={30}
            borderRadius={2}
            mb={3}
          >
            <Box bgcolor='rgb(134,239,172)' height={30} width='100%'></Box>
          </Box>

          <Link
            onClick={() => {
              window.navigator.clipboard.writeText(
                "BvLVj2kPd1nbHN4CQqZdfUtYCvS6x8kSaSNLYEBWpump"
              );
            }}
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
            contract address:
            <Typography ml={1} fontWeight='400' fontSize={12}>
              {formatWalletAddress(
                "BvLVj2kPd1nbHN4CQqZdfUtYCvS6x8kSaSNLYEBWpump"
              )}
              ...pump
            </Typography>
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
                <BubbleMap />
              </Box>
            </Box>
            <Box mt={1}>
              {holders.map((holder, i) => (
                <Box display='flex' justifyContent='space-between'>
                  <Typography fontSize='0.875rem' color='rgb(156,163,175)'>
                    {i + 1}. {formatWalletAddress((holder as any).address)}
                  </Typography>
                  <Typography fontSize='0.875rem' color='rgb(156,163,175)'>
                    {(+(holder as any).uiAmount / 10000000).toFixed(2)}%
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
