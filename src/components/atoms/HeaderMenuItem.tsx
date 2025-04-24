import { Box, Button } from "@mui/material";
import { Menu } from "../molecules";

interface props {
  menus: Menu[];
}
const HeaderMenuItem: React.FC<props> = ({ menus }) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {menus.map((menu) => (
        <Button
          key={menu.name}
          sx={{
            color: "white",
            display: "block",
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          {menu.name}
        </Button>
      ))}
    </Box>
  );
};
export default HeaderMenuItem;
