import { Input } from "../../Components/Input";
import { SelectPrice } from "./components/SelectPrice";
import { Link } from "react-router";

export const Book = () => {
  return (
    <section className="py-12 px-6 flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-8">
        <p className="w-50 py-2 text-center text-white bg-[#005aab] rounded-2xl">
          Бронированиe
        </p>
        <h2 className="text-3xl text-center font-semibold leading-12 2xl:text-4xl">
          <span className="text-[#005aab]">Забронируйте</span> свой праздник
        </h2>
      </div>
      <div className="flex flex-col w-full items-center gap-8 md:flex-row md:items-start xl:justify-center">
        <div className="w-full flex flex-col gap-4 xl:w-1/3">
          <Input placeholder="Регион*" val="Алтайский край" type="text" />
          <Input
            placeholder="Адрес*"
            val="Туристическая база 'Озеро Красилово', Косихинский район, с. Озеро-Красилово, ул. Пушкина д.1"
            type="text"
          />
          <Input val="2025-06-06" type="date" />
          <Input placeholder="Кол-во людей*" type="text" />
        </div>
        <div className="flex flex-col gap-4 w-full xl:w-1/3">
          <SelectPrice service="Организация питания" price="500 р/чел" />
          <SelectPrice service="Услуги аниматоров" price="5000 р/сутки" />
          <SelectPrice service="Услуги ведущего" price="500 р/час" />
          <SelectPrice
            service="Услуги детского такси"
            price="50р + 10р за каждый км"
          />
        </div>
      </div>
      <div className="flex flex-col w-full items-center gap-4 xl:w-2/3">
        <Input placeholder="Email*" type="text" />
        <textarea
          className="w-full h-30 pt-2 bg-white rounded-3xl pl-2 outline-none focus:outline-1 focus:outline-black"
          placeholder="Ваш комментарий"
        ></textarea>
        <Link
          className="text-center text-white py-2 rounded-2xl cursor-pointer bg-[#005aab] w-1/3 hover:bg-[#026bc7] transition-colors duration-300 ease-in-out active:bg-[#02549c] active:transition-none"
          to="/search"
        >
          Забронировать
        </Link>
      </div>
    </section>
  );
};
