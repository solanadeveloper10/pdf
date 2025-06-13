import { Box, Typography, Button, Avatar, Menu, MenuItem } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { useState, type FC, useEffect } from "react";
import {
  Connection,
  LAMPORTS_PER_SOL,
  clusterApiUrl,
  PublicKey,
} from "@solana/web3.js";
import { formatWalletAddress } from "../helpers/formatWalletAddress";

type PhantomProvider = {
  isPhantom: boolean;
  connect: () => Promise<{ publicKey: { toString: () => string } }>;
  disconnect: () => Promise<void>;
};

declare global {
  interface Window {
    solana?: PhantomProvider;
  }
}

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const ConnectWallet: FC = () => {
  const provider = window.solana;
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [walletBalance, setWalletBalance] = useState<number>(0);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const getWalletBalance = async (address: string) => {
    try {
      const connection = new Connection(clusterApiUrl("mainnet-beta"));
      const publicKey = new PublicKey(address);
      const balance = await connection.getBalance(publicKey);
      setWalletBalance(balance / LAMPORTS_PER_SOL);
    } catch (err) {
      console.error("Failed to fetch balance:", err);
      setWalletBalance(0);
    }
  };

  useEffect(() => {
    if (walletAddress) {
      getWalletBalance(walletAddress);
    }
  }, [walletAddress]);

  const connectWallet = async () => {
    if (provider?.isPhantom) {
      try {
        const response = await provider.connect();
        const address = response.publicKey.toString();
        setWalletAddress(address);
        await getWalletBalance(address);
      } catch (err) {
        console.error("Connection to Phantom failed", err);
      }
    } else {
      if (isMobile) {
        const baseUrl = window.location.origin;
        console.log(baseUrl);

        window.location.href = `https://phantom.app/ul/browse/${baseUrl}`;
      } else {
        alert("Phantom wallet not found. Please install it.");
      }
    }
  };

  const disconnectWallet = async () => {
    if (provider?.isPhantom) {
      try {
        await provider.disconnect();
        setWalletAddress(null);
        setWalletBalance(0);
        setOpen(false);
        setAnchorEl(null);
      } catch (err) {
        console.error("Failed to disconnect wallet", err);
      }
    }
  };

  return (
    <Box
      display='flex'
      alignItems={{ xs: "center", md: "center" }}
      gap={2}
      flexDirection={{ xs: "column", md: "row" }}
    >
      {!walletAddress ? (
        <Button variant='contained' color='primary' onClick={connectWallet}>
          Connect Wallet
        </Button>
      ) : (
        <Box>
          <Button
            variant='contained'
            color='primary'
            onClick={(e) => {
              setOpen(true);
              setAnchorEl(e.currentTarget as HTMLButtonElement);
            }}
            sx={{
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: 600,
              px: 2,
              py: 1,
              background: "#232a36",
              color: "#fff",
              minWidth: 0,
              boxShadow: "none",
              "&:hover": { background: "#232a36" },
              gap: 1,
            }}
            endIcon={<ArrowDropDown sx={{ color: "#fff" }} />}
          >
            <Avatar
              sx={{
                width: 22,
                height: 22,
                bgcolor: "#1ecb81",
                fontSize: 14,
                mr: 1,
              }}
            >
              🦄
            </Avatar>
            <Typography
              variant='body2'
              sx={{ color: "#fff", fontWeight: 400, fontSize: 13 }}
              component='span'
            >
              {formatWalletAddress(walletAddress)}
            </Typography>
            <Typography
              variant='body2'
              sx={{
                color: "#fff",
                fontWeight: 400,
                opacity: 0.7,
                fontSize: 13,
              }}
              component='span'
            >
              {walletBalance.toFixed(2)} SOL
            </Typography>
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => setOpen(false)}
            PaperProps={{
              sx: {
                bgcolor: "#232a36",
                color: "red",
                mt: 1,
                minWidth: 160,
                boxShadow: "0 2px 12px 0 rgba(0,0,0,0.2)",
                borderRadius: 1,
                p: 1,
              },
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem
              onClick={() => {
                disconnectWallet();
              }}
              sx={{
                color: "red",
                fontWeight: 500,
                fontSize: 13,
                py: 1.2,
                px: 2,
                "&:hover": { bgcolor: "#2a3140" },
              }}
            >
              Disconnect
            </MenuItem>
          </Menu>
        </Box>
      )}
    </Box>
  );
};

export default ConnectWallet;
