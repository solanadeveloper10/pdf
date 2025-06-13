import { Box, Typography } from "@mui/material";

const Comment = ({
  message,
  date,
  wallet,
  color,
}: {
  message: string;
  date: string;
  wallet: string;
  color: string;
}) => {
  return (
    <Box
      width='100%'
      bgcolor='rgb(55,65,81)'
      sx={{
        padding: "5px",
        color: "rgb(203,213,225)",
      }}
    >
      <Box display='flex' gap={1} alignItems='center'>
        <Box bgcolor={color} px={1} borderRadius='0.25rem' fontSize='0.75rem'>
          {wallet}
        </Box>
        <Typography fontSize='0.75rem' color='rgb(148, 163, 184)'>
          {date}
        </Typography>
      </Box>
      <Typography
        mt={1}
        fontSize='0.75rem'
        fontWeight='bold'
        sx={{ wordBreak: "break-all", whiteSpace: "pre-wrap" }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default Comment;
