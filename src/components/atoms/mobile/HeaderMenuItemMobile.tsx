"use client";
import { Menu as MenuType } from "@/components/molecules";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

interface Props {
  menus: MenuType[];
}
const HeaderMenuItemMobile: React.FC<Props> = ({ menus }) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {menus.map((menu) => (
          <MenuItem key={menu.name} onClick={handleCloseNavMenu}>
            <Typography sx={{ textAlign: "center" }}>{menu.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
export default HeaderMenuItemMobile;
