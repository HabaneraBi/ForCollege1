import ok from "/src/UI/icons/ok.png";
import { FormFind } from "./components/FormFind";
import { globalContext } from "../../../../App/context";
import { useContext } from "react";

export const FindHoliday = () => {
  const context = useContext(globalContext);
  return (
    <section
      ref={context.find}
      className="flex flex-col py-12 px-8 gap-12 items-center bg-[#5aa9ec] md:flex-row-reverse md:items-start lg:justify-center "
    >
      <div className="flex flex-col not-only-of-type:items-center gap-6 md:w-1/2 lg:w-[455px] xl:w-1/3">
        <p className="w-50 py-2 text-center text-white bg-[#005aab] rounded-2xl">
          Поиск мероприятия
        </p>
        <h2 className="text-center text-white text-3xl font-semibold leading-12 2xl:text-4xl">
          В нашем арсенале есть большой выбор развлечений для детей
        </h2>
        <ul className="flex flex-col gap-2 self-start">
          <li className="text-white flex gap-2 text-sm">
            <img className="size-5" src={ok} />{" "}
            <span className="text-lg">Самые модные квесты</span>
          </li>
          <li className="text-white flex gap-2 text-sm">
            <img className="size-5" src={ok} />{" "}
            <span className="text-lg">Дискотеки</span>
          </li>
          <li className="text-white flex gap-2 text-sm">
            <img className="size-5" src={ok} />{" "}
            <span className="text-lg">Познавательные программы</span>
          </li>
          <li className="text-white flex gap-2 text-sm">
            <img className="size-5" src={ok} />{" "}
            <span className="text-lg">Интеллектуальные состязания</span>
          </li>
          <li className="text-white flex gap-2 text-sm">
            <img className="size-5" src={ok} />{" "}
            <span className="text-lg">Путешествия по миру сказок</span>
          </li>
        </ul>
      </div>
      <FormFind />
    </section>
  );
};
