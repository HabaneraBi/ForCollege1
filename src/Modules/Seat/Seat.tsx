import place from "/src/UI/icons/place.jpg";
import { seatInfo } from "./components/seatInfo";
import { SeatItem } from "./components/SeatItem";
import { useState } from "react";
import { Link } from "react-router";

export const Seat = () => {
  const [nameForActive, setNameForActive] = useState("");
  return (
    <section className="py-12 px-6 flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-8">
        <p className="w-50 py-2 text-center text-white bg-[#005aab] rounded-2xl">
          Зоны локации
        </p>
        <h2 className="text-3xl text-center font-semibold leading-12 2xl:text-4xl">
          Выберите <span className="text-[#005aab]">своё</span> место
        </h2>
      </div>
      <div className="flex flex-col items-center gap-8 w-full lg:flex-row lg:items-start xl:justify-center">
        <img
          className="rounded-3xl md:w-[718.969px] md:h-[553.062] 2xl:w-1/2"
          src={place}
        />
        <div className="flex flex-col gap-6 w-full xl:w-1/3">
          {seatInfo.map((obj, index) => {
            return (
              <SeatItem
                setterName={setNameForActive}
                key={index}
                obj={obj}
                isActive={obj.name === nameForActive}
              />
            );
          })}
        </div>
      </div>
      <Link
        to="/ForCollege1/book"
        className="self-center font-semibold text-center text-white py-2 rounded-2xl cursor-pointer bg-[#005aab] w-1/2 hover:bg-[#026bc7] transition-colors duration-300 ease-in-out active:bg-[#02549c] active:transition-none"
      >
        Забронировать
      </Link>
    </section>
  );
};
