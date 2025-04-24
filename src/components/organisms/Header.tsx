import { HeaderMenu } from "../molecules";

const Header: React.FC = () => {
  return (
    <div className="fixed w-full top-0 left-0 z-50 flex flex-col justify-center bg-white">
      <p className="font-bold mx-4 text-xl">
        Helpful Tool For Developer/DevOps by ThanhTung0707
      </p>
      <HeaderMenu />
    </div>
  );
};

export default Header;
