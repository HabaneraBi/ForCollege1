import { Link } from "react-router";
import { Input } from "../../../../../Components/Input";

export const FormFind = () => {
  return (
    <div className="bg-[#f7f8fa] p-4 w-full rounded-2xl flex flex-col h-76 items-center justify-between sm:w-144 md:h-100 md:w-1/2 lg:w-117.5">
      <h2 className="text-[#005aab] text-lg font-semibold">НАЙТИ ПРАЗДНИК</h2>
      <Input placeholder="Ваш регион*" type="text" />
      <Input type="date" />
      <Input placeholder="Кол-во человек*" type="text" />
      <Link
        className="text-center text-white py-2 rounded-2xl cursor-pointer bg-[#005aab] w-1/3 hover:bg-[#026bc7] transition-colors duration-300 ease-in-out active:bg-[#02549c] active:transition-none"
        to="/ForCollege1/search"
      >
        Поиск
      </Link>
    </div>
  );
};
