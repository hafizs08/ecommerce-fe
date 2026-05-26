import {
  Box,
  Paper,
  Typography,
} from "@mui/material";

import ComputerIcon from "@mui/icons-material/Computer";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import WatchIcon from "@mui/icons-material/Watch";

const categories = [
  {
    title: "Computers",
    icon: <ComputerIcon />,
  },
  {
    title: "Smartphones",
    icon: <PhoneIphoneIcon />,
  },
  {
    title: "Smart Watches",
    icon: <WatchIcon />,
  },
];

const CategoryTabs = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(2,1fr)",
          sm: "repeat(3,1fr)",
          md: "repeat(3,1fr)",
        },
        gap: 2,
        mt: 3,
      }}
    >
      {categories.map((item) => (
        <Paper
          key={item.title}
          sx={{
            p: 3,
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          {item.icon}

          <Typography sx={{ mt: 1 }}>
            {item.title}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default CategoryTabs;