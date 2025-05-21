import type { InfoSearch } from "./infoSearch";
import { Link } from "react-router";

import type { FC } from "react";

export const SearchItem: FC<InfoSearch> = ({
  area,
  address,
  date,
  countPlace,
}) => {
  return (
    <div className="bg-white rounded-3xl flex flex-col justify-between py-4 px-2 gap-3 lg:w-[458.44px]">
      <h2 className="text-lg font-semibold">{area}</h2>
      <p className="text-[#005aab] font-semibold">{address}</p>
      <p>{date}</p>
      <p className="font-semibold">Осталось мест: {countPlace}</p>
      <Link
        to="/ForCollege1/seat"
        className="self-center font-semibold text-center text-white py-2 rounded-2xl cursor-pointer bg-[#005aab] w-1/2 hover:bg-[#026bc7] transition-colors duration-300 ease-in-out active:bg-[#02549c] active:transition-none"
      >
        Выбор места
      </Link>
    </div>
  );
};
