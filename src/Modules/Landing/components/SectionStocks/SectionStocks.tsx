import { StocksItem } from "./components/StocksItem";
import { info } from "./components/infoForStocks";
import { globalContext } from "../../../../App/context";
import { useContext } from "react";

export const SectionStocks = () => {
  const context = useContext(globalContext);
  return (
    <section
      ref={context.stocks}
      className="bg-[#f7f8fa] flex flex-col py-12 items-center px-8 gap-8"
    >
      <div className="flex flex-col items-center gap-4">
        <p className="w-50 py-2 text-center text-[#005aab] border border-[#005aab] rounded-2xl">
          Наши акции
        </p>
        <h2 className="text-center text-3xl font-semibold leading-12 2xl:text-4xl">
          Доступные <span className="text-[#005aab]">акции</span> нашей компании
        </h2>
      </div>
      <div className="flex flex-col gap-8 md:flex-row md:flex-wrap md:gap-8 md:justify-between lg:flex-nowrap xl:px-30">
        {info.map((objInfo, index) => {
          return <StocksItem key={index} {...objInfo} />;
        })}
      </div>
    </section>
  );
};
