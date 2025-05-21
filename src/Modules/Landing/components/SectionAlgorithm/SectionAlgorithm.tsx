import { AlgorithmItem } from "./components/AlgorithmItem";
import { globalContext } from "../../../../App/context";
import { useContext } from "react";
import children from "/src/UI/icons/children.jpg";

export const Algorithm = () => {
  const context = useContext(globalContext);
  return (
    <section
      ref={context.algorithm}
      className="flex flex-col py-12 px-8 bg-[#f7f8fa] gap-8 lg:px-12 lg:items-center"
    >
      <div className="flex flex-col items-center gap-4">
        <p className="w-50 py-2 text-center text-white bg-[#005aab] rounded-2xl">
          Алгоритм бронирования
        </p>
        <h2 className="text-3xl text-center font-semibold leading-12 2xl:text-4xl">
          Чтобы воспользоваться <span className="text-[#005aab]">услугами</span>{" "}
          компании необходимо:
        </h2>
      </div>

      <div className="flex flex-col gap-4 sm:grid grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 lg:w-9/10 xl:grid-rows-3 xl:grid-cols-2 2xl:grid-cols-3 2xl:grid-rows-2">
        <AlgorithmItem
          classNameDiv="border border-[#005aab] bg-white"
          digit="1"
          text="Выбрать даты праздника"
          typeColorSet="2"
        />
        <AlgorithmItem
          url={children}
          classNameDiv="relative border bg-center border-[#005aab] bg-cover before:size-full before:top-0 before:left-0 before:bg-[#005aab] before:absolute before:rounded-3xl before:opacity-50"
          digit="2"
          text="Выбрать количество участников"
          typeColorSet="1"
          zIndex="z-1"
        />
        <AlgorithmItem
          classNameDiv="bg-white"
          digit="3"
          text="Выбрать желаемую локацию для праздника, соответствующую условиям выше"
          typeColorSet="2"
        />
        <AlgorithmItem
          classNameDiv="bg-[#005aab]"
          digit="4"
          text="Зарезервировать конкретную зону на территории выбранной локации"
          typeColorSet="1"
        />
        <AlgorithmItem
          classNameDiv="bg-white"
          digit="5"
          text="Определить перечень дополнительных услуг"
          typeColorSet="2"
        />
        <AlgorithmItem
          classNameDiv="bg-white border border-[#005aab]"
          digit="6"
          text="Оформить заказ"
          typeColorSet="2"
        />
      </div>
    </section>
  );
};
