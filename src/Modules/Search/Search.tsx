import { infoSearch } from "./components/infoSearch";
import { SearchItem } from "./components/SearchItem";

export const Search = () => {
  return (
    <section className="bg-[#f7f8fa] flex flex-col py-12 px-8 gap-8 lg:items-center">
      <div className="flex flex-col items-center gap-8">
        <p className="w-50 py-2 text-center text-white bg-[#005aab] rounded-2xl">
          Результаты поиска
        </p>
        <h2 className="text-3xl text-center font-semibold leading-12 2xl:text-4xl">
          Вот что мы <span className="text-[#005aab]">нашли:</span>
        </h2>
      </div>
      <div className="flex flex-col gap-5 md:flex-row">
        {infoSearch.map((obj, index) => {
          return <SearchItem key={index} {...obj} />;
        })}
      </div>
    </section>
  );
};
