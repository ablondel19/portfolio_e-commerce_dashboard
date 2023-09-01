import FlexBetween from "./FlexBetween";
import { Box, Typography, useTheme } from "@mui/material";

const BoxHeader = ({ title, subtitle }) => {
  const { palette } = useTheme();
  return (
    <>
      <FlexBetween color={palette.grey[400]} margin="0rem 1rem 0rem 1rem">
        <FlexBetween>
          <Box width="100%">
            <Typography variant="h4">{title}</Typography>
            <Typography variant="h6">{subtitle}</Typography>
          </Box>
        </FlexBetween>
      </FlexBetween>
    </>
  );
};

export default BoxHeader;
