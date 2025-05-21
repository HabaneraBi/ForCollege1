import { Input } from "../../../Components/input";

export const Subscribe = () => {
  return (
    <section className="py-12 px-12 flex flex-col gap-8 bg-[#d6eafc] items-center">
      <div className="flex flex-col gap-4 items-center">
        <p className="bg-[#005aab] w-50 py-2 text-white rounded-3xl text-center">
          Рассылка от нас
        </p>
        <h2 className="text-3xl font-semibold leading-12 text-center 2xl:text-4xl">
          <span className="text-[#005aab]">Первыми</span> получайте новости от
          нас
        </h2>
      </div>
      <div className="flex flex-col gap-3">
        <Input type="email" placeholder="Email*" />
        <button className="text-sm text-white py-2 rounded-2xl cursor-pointer bg-[#005aab] hover:bg-[#026bc7] transition-colors duration-300 ease-in-out active:bg-[#02549c] active:transition-none md:w-168">
          ПОДПИСАТЬСЯ
        </button>
      </div>
    </section>
  );
};
