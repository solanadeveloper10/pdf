import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

const colors = [
  "rgb(230, 32, 24)",
  "#2196f3",
  "#4caf50",
  "#ff9800",
  "#9c27b0",
  "#00bcd4",
  "#f44336",
];

const texts = [
  "Hey!",
  "Hi there!",
  "Hello!",
  "Yo!",
  "What’s up?",
  "Sup?",
  "Howdy!",
  "Heyyy :)",
  "Heya!",
  "Hiya!",
  "Greetings!",
  "Yo yo yo!",
  "'Ello mate!",
  "Ayo!",
  "Long time no see!",
  "How’s it going?",
  "Wassup!",
  "What’s crackin’?",
  "Look who it is!",
  "Oi oi!",
];

const RandomBlock = () => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomText = texts[Math.floor(Math.random() * texts.length)];
      setCurrentColor(randomColor);
      setCurrentText(randomText);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        padding: "5px 20px",
        display: "inline-block",
        backgroundColor: currentColor,
        color: "#000",
        borderRadius: "0.25rem",
      }}
    >
      <Typography variant='h6'>{currentText}</Typography>
    </Box>
  );
};

export default RandomBlock;
