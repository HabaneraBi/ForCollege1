import type { FC } from "react";
import logo from "/src/UI/icons/logo.png";
import { useContext, useEffect } from "react";
import { globalContext } from "../../App/context";
import { Link, useLocation } from "react-router";

const Header: FC = () => {
  const context = useContext(globalContext);
  const location = useLocation();
  console.log(location.hash);
  useEffect(() => {
    switch (location.hash) {
      case "#stocks":
        context.stocks?.current?.scrollIntoView(false);
        break;
      case "#find":
        context.find?.current?.scrollIntoView(false);
        break;
      case "#algorithm":
        context.algorithm?.current?.scrollIntoView(false);
        break;
    }
  }, [location]);

  return (
    <header className="sticky z-3 top-0 h-20 flex flex-row p-2 justify-between gap-4 items-center bg-white lg:h-22 md:justify-around">
      <Link to="/ForCollege1/">
        <img
          className="w-18 h-13 lg:w-25 lg:h-17"
          alt="Логотип компании"
          src={logo}
        />
      </Link>
      <ul className="flex flex-row flex-wrap justify-around min-[410px]:items-center min-[500px]:w-95 lg:w-110 lg:justify-between">
        <li className="font-semibold text-center cursor-pointer lg:text-lg hover:text-[#252525]">
          <Link to="/ForCollege1/#stocks">Акции</Link>
        </li>
        <li className="font-semibold text-center cursor-pointer lg:text-lg hover:text-[#252525]">
          <Link to="/ForCollege1/#find">Поиск</Link>
        </li>
        <li className="font-semibold text-center cursor-pointer hover:text-[#252525] pt-1 min-[410px]:pt-0 min-[410px]:w-1/2 min-[500px]:w-54 lg:text-lg lg:w-62">
          <Link to="/ForCollege1/#algorithm">Управление бронированием</Link>
        </li>
      </ul>
    </header>
  );
};

export { Header };
