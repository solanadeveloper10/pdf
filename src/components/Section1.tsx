import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  type Theme,
} from "@mui/material";
import { motion } from "framer-motion";
import RandomBlock from "./RandomBlock";
import Header from "./Header";
import { useEffect, useState } from "react";

const floatingImageVariants = {
  animate: {
    y: [0, 40, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const smiles = [
  "😎",
  "🤩",
  "🥳",
  "😍",
  "🌟",
  "⭐",
  "🚀",
  "💎",
  "🔥",
  "❤️",
  "💰",
  "🤑",
];

const Section1 = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const [currentText, setCurrentText] = useState(smiles[0]);
  const [text2, setText2] = useState(smiles[1]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomSmile = smiles[Math.floor(Math.random() * smiles.length)];
      const randomSmile2 = smiles[Math.floor(Math.random() * smiles.length)];
      setCurrentText(randomSmile + randomSmile2);
    }, 200);

    const interval2 = setInterval(() => {
      const randomSmile = smiles[Math.floor(Math.random() * smiles.length)];
      const randomSmile2 = smiles[Math.floor(Math.random() * smiles.length)];
      setText2(randomSmile2 + randomSmile);
    }, 200);

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, []);

  return (
    <Box height='100%' width='100%'>
      <Header />
      <Box
        height='100%'
        width='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
        position='relative'
      >
        <Box textAlign='center'>
          <RandomBlock />

          <Box
            component={motion.div}
            zIndex={-1}
            variants={floatingImageVariants}
            animate='animate'
          >
            <motion.img
              src='/usd.png'
              height={isMobile ? 150 : 250}
              alt='pdf'
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8 },
              }}
              viewport={{ once: true }}
            />
          </Box>

          <Box mt={6}>
            <Button
              onClick={() =>
                window.open(
                  "https://swap.pump.fun/?input=So11111111111111111111111111111111111111112&output=BvLVj2kPd1nbHN4CQqZdfUtYCvS6x8kSaSNLYEBWpump",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Buy
            </Button>
          </Box>

          <Box
            bgcolor='rgb(55,65,81)'
            mt={4}
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            sx={{
              padding: "0.25rem 0.5rem",
              borderRadius: "0.5rem",
            }}
            gap={3}
            fontSize={{ xs: 10, md: 20 }}
          >
            <Box width={{ xs: 30, md: 60 }}>{currentText}</Box>
            <Typography
              variant='body1'
              fontSize='inherit'
              sx={{
                color: copied ? "rgb(134,239,172)" : "white",
                transition: "color 0.2s",
                cursor: "pointer",
              }}
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(
                    "BvLVj2kPd1nbHN4CQqZdfUtYCvS6x8kSaSNLYEBWpump"
                  );
                  setCopied(true);
                  setTimeout(() => setCopied(false), 400);
                } catch (e) {
                  // fallback: do nothing
                }
              }}
            >
              CA: BvLVj2kPd1nbHN4CQqZdfUtYCvS6x8kSaSNLYEBWpump
            </Typography>
            <Box width={{ xs: 30, md: 60 }}>{text2}</Box>
          </Box>
        </Box>
        <Box
          position='absolute'
          top='10%'
          left='20%'
          sx={{ transform: "rotate(-15deg)", zIndex: -1, fontSize: "2.5rem" }}
        >
          ❤️
        </Box>
        <Box
          position='absolute'
          top='22%'
          left='20%'
          sx={{ transform: "rotate(10deg)", zIndex: -1, fontSize: "1.8rem" }}
        >
          💰
        </Box>
        <Box
          position='absolute'
          top='40%'
          left='6%'
          sx={{ transform: "rotate(-20deg)", zIndex: -1, fontSize: "3rem" }}
        >
          🤑
        </Box>
        <Box
          position='absolute'
          top='40%'
          right='10%'
          sx={{ transform: "rotate(15deg)", zIndex: -1, fontSize: "1.5rem" }}
        >
          🔥
        </Box>
        <Box
          position='absolute'
          top='15%'
          right='15%'
          sx={{ transform: "rotate(-10deg)", zIndex: -1, fontSize: "2.8rem" }}
        >
          💎
        </Box>
        <Box
          position='absolute'
          top='35%'
          left='25%'
          sx={{ transform: "rotate(20deg)", zIndex: -1, fontSize: "2.2rem" }}
        >
          🚀
        </Box>
        <Box
          position='absolute'
          bottom='20%'
          right='20%'
          sx={{ transform: "rotate(-25deg)", zIndex: -1, fontSize: "1.6rem" }}
        >
          ⭐
        </Box>
        <Box
          position='absolute'
          bottom='30%'
          left='15%'
          sx={{ transform: "rotate(15deg)", zIndex: -1, fontSize: "2.4rem" }}
        >
          🌟
        </Box>
        <Box
          component='img'
          src='/usd.png'
          sx={{
            position: "absolute",
            top: "20%",
            left: "6%",
            height: 45,
            transform: "rotate(-10deg)",
            zIndex: -1,
          }}
        />
        <Box
          component='img'
          src='/usd.png'
          sx={{
            position: "absolute",
            bottom: "25%",
            right: "8%",
            height: 20,
            transform: "rotate(15deg)",
            zIndex: -1,
          }}
        />
        <Box
          component='img'
          src='/usd.png'
          sx={{
            position: "absolute",
            top: "30%",
            right: "25%",
            height: 38,
            transform: "rotate(-20deg)",
            zIndex: -1,
          }}
        />
      </Box>
    </Box>
  );
};

export default Section1;
