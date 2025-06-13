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

const Section1 = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <Box height='100%' width='100%'>
      <Header />
      <Box
        height='100%'
        width='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
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
            <Button>Create coin</Button>
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
            <Box>qwe</Box>
            <Typography variant='body1' fontSize='inherit'>
              CA: 8SQQ1urC3Dynq9C2ieM6AozWgi4GCrLE6fnRoiWdpump
            </Typography>
            <Box>qwe</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Section1;
