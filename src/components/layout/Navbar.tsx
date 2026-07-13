import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(
    theme.breakpoints.down("md")
  );

  const [open, setOpen] = useState(false);

  const menuItems = [
    "Pages",
    "Property",
    "Fashion",
    "Electronics",
  ];

  return (
    <>
      <AppBar
        position="static"
        color="inherit"
        elevation={1}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold" }}
          >
            Ecommerce
          </Typography>

          {isMobile ? (
            <IconButton
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <Box sx={{ display: "flex", gap: 2 }}>
                {menuItems.map((item) => (
                  <Button key={item}>
                    {item}
                  </Button>
                ))}
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="contained">
                  Login
                </Button>

                <Button variant="outlined">
                  Post Add
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={{ width: 250 }}>
          <List>
            {menuItems.map((item) => (
              <ListItemButton key={item}>
                <ListItemText primary={item} />
              </ListItemButton>
            ))}
          </List>

          <Box sx={{ p: 2 }}>
            <Button
              variant="contained"
              fullWidth
              sx={{ mb: 2 }}
            >
              Login
            </Button>

            <Button
              variant="outlined"
              fullWidth
            >
              Post Add
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;