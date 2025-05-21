import { type FC } from "react";
import type { info } from "./seatInfo";
import type { Dispatch, SetStateAction } from "react";

interface SearchItemProps {
  obj: info;
  isActive: boolean;
  setterName: Dispatch<SetStateAction<string>>;
}

export const SeatItem: FC<SearchItemProps> = ({
  obj,
  isActive,
  setterName,
}) => {
  return (
    <div
      onClick={() => setterName(obj.name)}
      className={`flex flex-col cursor-pointer w-full  ${
        isActive ? "bg-[#005aab] text-white" : "bg-white text-black"
      } rounded-2xl p-3 gap-2 h-40 transition-colors duration-400 ease-in-out`}
    >
      <h2 className="text-2xl font-semibold">{obj.name}</h2>
      <p>{obj.count}</p>
      <p>{obj.price}</p>
    </div>
  );
};
