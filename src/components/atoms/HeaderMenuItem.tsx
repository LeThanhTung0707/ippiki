import { Box, Button } from "@mui/material";
import { Menu } from "../molecules";
import Link from "next/link";

interface props {
  menus: Menu[];
}
const HeaderMenuItem: React.FC<props> = ({ menus }) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {menus.map((menu) => (
        <Link key={menu.name} href={menu.href}>
          <Button
            sx={{
              color: "white",
              display: "block",
              fontSize: 18,
              fontWeight: 600,
              marginRight: 2,
            }}
          >
            {menu.name}
          </Button>
        </Link>
      ))}
    </Box>
  );
};
export default HeaderMenuItem;
