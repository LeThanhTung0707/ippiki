import { AppBar, Container, Toolbar, Menu } from "@mui/material";
import { HeaderMenuItem, HeaderMenuItemMobile } from "../atoms";

export interface Menu {
  name: string;
  href: string;
}

const HeaderMenu: React.FC = () => {
  const menus: Menu[] = [
    {
      name: "My IP",
      href: "/",
    },
    {
      name: "DNS Lookup",
      href: "/",
    },
  ];
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HeaderMenuItemMobile menus={menus} />
          <HeaderMenuItem menus={menus} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default HeaderMenu;
