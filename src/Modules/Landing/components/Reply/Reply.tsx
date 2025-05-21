import { ReplyItem } from "./components/ReplyItem";
import { infoReply } from "./components/infoReply";

export const Reply = () => {
  return (
    <section className="bg-[#f7f8fa] flex flex-col py-12 px-8 gap-8">
      <div className="flex flex-col items-center gap-4">
        <p className="bg-[#005aab] w-50 py-2 text-white rounded-3xl text-center">
          Отзывы о компании
        </p>
        <h2 className="text-3xl font-semibold leading-12 text-center 2xl:text-4xl">
          Наши заказчики <span className="text-[#005aab]">хорошего</span> мнения
          о нас
        </h2>
      </div>
      <div className="flex flex-col gap-4 md:grid md:grid-rows-2 md:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap lg:justify-between xl:flex-nowrap xl:px-15 2xl:px-30">
        {infoReply.map((objReply, index) => {
          return <ReplyItem key={index} {...objReply} />;
        })}
      </div>
    </section>
  );
};
