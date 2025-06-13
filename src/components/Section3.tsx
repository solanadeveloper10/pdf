import {
  Box,
  Button,
  Container,
  useMediaQuery,
  type Theme,
} from "@mui/material";
import { motion } from "framer-motion";

const Section3 = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const floatingImageVariants = {
    animate: {
      y: [0, 100, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Box
      height='100%'
      width='100%'
      display='flex'
      justifyContent='start'
      alignItems='center'
      position='relative'
    >
      <Container maxWidth='xl'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
        >
          <Box display='flex' flexDirection='column' gap={4}>
            {[
              { text: "Telegram", href: "https://t.me/pmpdollarfun" },
              { text: "Twitter", href: "https://x.com/pmpdollarfun" },
              {
                text: "Dextools",
                href: "https://www.dextools.io/app/en/solana/pair-explorer/25xkQfzBZP1BgGVg1QCdnAUWqZUAx14cWTAwEBGLJLKH?t=1750941120125",
              },
              {
                text: "Dexscreener",
                href: "https://dexscreener.com/solana/BvLVj2kPd1nbHN4CQqZdfUtYCvS6x8kSaSNLYEBWpump",
              },
            ].map((link, index) => (
              <Button
                key={index}
                sx={{
                  width: { md: 500 },
                  alignSelf: { md: "flex-start" },
                }}
              >
                <motion.span
                  style={{
                    display: "inline-block",
                    color: "#000",
                    fontSize: isMobile ? "2rem" : "3rem",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    window.open(link.href, "_blank", "noopener,noreferrer")
                  }
                  variants={linkVariants}
                >
                  {link.text}
                </motion.span>
              </Button>
            ))}
          </Box>
        </motion.div>
      </Container>
      <Box
        component={motion.div}
        position='absolute'
        sx={{ top: { xs: "5%", md: "30%" }, transform: "translateY(-50%)" }}
        right={{ xs: 30, md: "20%" }}
        zIndex={-1}
        variants={floatingImageVariants}
        animate='animate'
      >
        <motion.img
          src='/usd.png'
          alt='pdf'
          height={isMobile ? 150 : 250}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8 },
          }}
          viewport={{ once: true }}
        />
      </Box>
      <Box
        position='absolute'
        top={{ xs: "22%", md: "18%" }}
        left={{ xs: "15%", md: "25%" }}
        sx={{
          transform: "rotate(-15deg)",
          zIndex: -2,
          fontSize: { xs: "2.2rem", md: "3.5rem" },
        }}
      >
        ❤️
      </Box>
      <Box
        position='absolute'
        top={{ xs: "42%", md: "12%" }}
        left={{ xs: "32%", md: "18%" }}
        sx={{
          transform: "rotate(22deg)",
          zIndex: -2,
          fontSize: { xs: "1.8rem", md: "2.8rem" },
        }}
      >
        💰
      </Box>
      <Box
        position='absolute'
        top={{ xs: "18%", md: "38%" }}
        left={{ xs: "12%", md: "15%" }}
        sx={{
          transform: "rotate(-18deg)",
          zIndex: -2,
          fontSize: { xs: "2.5rem", md: "4rem" },
        }}
      >
        🤑
      </Box>
      <Box
        position='absolute'
        top={{ xs: "38%", md: "28%" }}
        right={{ xs: "18%", md: "22%" }}
        sx={{
          transform: "rotate(32deg)",
          zIndex: -2,
          fontSize: { xs: "1.2rem", md: "2.2rem" },
        }}
      >
        🔥
      </Box>
      <Box
        position='absolute'
        top={{ xs: "28%", md: "15%" }}
        right={{ xs: "28%", md: "32%" }}
        sx={{
          transform: "rotate(-28deg)",
          zIndex: -2,
          fontSize: { xs: "2.8rem", md: "3.8rem" },
        }}
      >
        💎
      </Box>
      <Box
        position='absolute'
        top={{ xs: "48%", md: "42%" }}
        left={{ xs: "42%", md: "28%" }}
        sx={{
          transform: "rotate(18deg)",
          zIndex: -2,
          fontSize: { xs: "1.5rem", md: "2.5rem" },
        }}
      >
        🚀
      </Box>
      <Box
        position='absolute'
        bottom={{ xs: "32%", md: "22%" }}
        right={{ xs: "22%", md: "38%" }}
        sx={{
          transform: "rotate(-22deg)",
          zIndex: -2,
          fontSize: { xs: "2rem", md: "3.2rem" },
        }}
      >
        ⭐
      </Box>
      <Box
        position='absolute'
        bottom={{ xs: "42%", md: "32%" }}
        left={{ xs: "25%", md: "35%" }}
        sx={{
          transform: "rotate(35deg)",
          zIndex: -2,
          fontSize: { xs: "1.3rem", md: "2.3rem" },
        }}
      >
        🌟
      </Box>
      <Box
        position='absolute'
        top={{ xs: "15%", md: "45%" }}
        right={{ xs: "45%", md: "15%" }}
        sx={{
          transform: "rotate(-12deg)",
          zIndex: -2,
          fontSize: { xs: "2.4rem", md: "3.4rem" },
        }}
      >
        😍
      </Box>
      <Box
        position='absolute'
        bottom={{ xs: "25%", md: "38%" }}
        left={{ xs: "38%", md: "42%" }}
        sx={{
          transform: "rotate(28deg)",
          zIndex: -2,
          fontSize: { xs: "1.9rem", md: "2.9rem" },
        }}
      >
        🥳
      </Box>
      <Box
        position='absolute'
        top={{ xs: "52%", md: "25%" }}
        right={{ xs: "12%", md: "45%" }}
        sx={{
          transform: "rotate(-38deg)",
          zIndex: -2,
          fontSize: { xs: "2.1rem", md: "3.1rem" },
        }}
      >
        🤩
      </Box>
      <Box
        position='absolute'
        bottom={{ xs: "18%", md: "42%" }}
        right={{ xs: "35%", md: "8%" }}
        sx={{
          transform: "rotate(15deg)",
          zIndex: -2,
          fontSize: { xs: "1.7rem", md: "2.7rem" },
        }}
      >
        😎
      </Box>
      <Box
        component='img'
        src='/usd.png'
        sx={{
          position: "absolute",
          top: { xs: "25%", md: "35%" },
          left: { xs: "18%", md: "12%" },
          height: { xs: 35, md: 45 },
          transform: "rotate(-25deg)",
          zIndex: -2,
        }}
      />
      <Box
        component='img'
        src='/usd.png'
        sx={{
          position: "absolute",
          bottom: { xs: "35%", md: "28%" },
          right: { xs: "22%", md: "18%" },
          height: { xs: 25, md: 40 },
          transform: "rotate(18deg)",
          zIndex: -2,
        }}
      />
      <Box
        component='img'
        src='/usd.png'
        sx={{
          position: "absolute",
          top: { xs: "42%", md: "22%" },
          right: { xs: "35%", md: "28%" },
          height: { xs: 30, md: 50 },
          transform: "rotate(-35deg)",
          zIndex: -2,
        }}
      />
    </Box>
  );
};

export default Section3;
