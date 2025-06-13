import { Close } from "@mui/icons-material";
import { Box, Dialog, IconButton, Link, useMediaQuery } from "@mui/material";
import { useState } from "react";

const BubbleMap = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box>
      <Link
        href='https://app.insightx.network/bubblemaps/solana/BvLVj2kPd1nbHN4CQqZdfUtYCvS6x8kSaSNLYEBWpump?theme=dark'
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
        target='_blank'
        bgcolor='rgb(55,65,81)'
      >
        generate bubblemap
      </Link>
      <Dialog
        open={open}
        fullWidth
        maxWidth='lg'
        onClose={() => setOpen(false)}
        fullScreen={isMobile}
        sx={{
          iframe: {
            height: { xs: "100%", md: 800 },
            border: 0,
          },
        }}
      >
        <Box
          display='flex'
          justifyContent='end'
          padding={1}
          bgcolor='hsl(230, 13%, 9%)'
        >
          <IconButton onClick={() => setOpen(false)}>
            <Close />
          </IconButton>
        </Box>
        <iframe
          src='https://app.insightx.network/bubblemaps/solana/DVWcY1SG99BaY2bKrZMoVi2yV2hrFcSWFKSAeWqjpump?theme=dark'
          height={800}
          width='100%'
        />
      </Dialog>
    </Box>
  );
};

export default BubbleMap;
