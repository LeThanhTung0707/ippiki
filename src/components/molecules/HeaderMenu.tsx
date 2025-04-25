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
      name: "All Tools",
      href: "/tools",
    },
  ];
  return (
    <AppBar position="static">
      <Container className="!max-w-[1920px]">
        <Toolbar disableGutters>
          <HeaderMenuItemMobile menus={menus} />
          <HeaderMenuItem menus={menus} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default HeaderMenu;
