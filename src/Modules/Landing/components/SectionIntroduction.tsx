export const SectionIntroduction = () => {
  return (
    <section className="bg-[#f7f8fa] flex flex-col items-center pt-8 px-4 min-h-165 justify-center gap-4 lg:flex-row xl:gap-0">
      <div className="flex flex-col items-center gap-3 lg:w-1/3">
        <p className="font-bold text-[#005aab] border text-[13px] border-[#005aab] p-2.5 solid rounded-3xl 2xl:text-base">
          Подарим волшебство для Ваших детей!
        </p>
        <h1 className="text-4xl font-semibold leading-12 2xl:text-5xl">
          Праздник в <span className="text-[#005aab]">каждый</span> дом
        </h1>
        <p className="font-light text-lg 2xl:text-xl min-[1311px]:text-center">
          Главная <span className="text-[#005aab]">цель</span> компании –
          сделать праздник незабываемым для детей и их родителей.
        </p>
        <p className="font-light 2xl:text-lg min-[1311px]:text-center">
          Предоставляем услуги организации детских праздников на нашей
          территории в очень интересных локациях.
        </p>
      </div>
      <div className="flex min-h-62.5 w-full justify-center gap-2 sm:gap-4 lg:w-1/3 2xl:w-1/2">
        <div className="flex flex-col min-w-30 min-h-62.5 justify-center gap-2 sm:gap-4">
          <div className="rounded-4xl w-30 h-45 bg-[url(src/UI/icons/introduction1.jpg)] shadow-2xl bg-cover sm:w-42.5 sm:h-63.75 2xl:w-73.75 2xl:h-[442.5px]"></div>
          <div className="rounded-4xl w-30 h-15 bg-[url(src/UI/icons/introduction3.jpg)] shadow-2xl bg-cover sm:w-42.5 sm:h-21.25 2xl:w-73.75 2xl:h-[147.5px]"></div>
        </div>
        <div className="flex flex-col min-w-30 min-h-62.5 justify-center gap-2 sm:gap-4">
          <div className="rounded-4xl w-30 h-15 bg-[url(src/UI/icons/introduction2.jpg)] shadow-2xl bg-cover sm:w-42.5 sm:h-21.25 2xl:w-73.75 2xl:h-[147.5px]"></div>
          <div className="rounded-4xl w-30 h-45 bg-[url(src/UI/icons/introduction4.jpg)] shadow-2xl bg-cover sm:w-42.5 sm:h-63.75 2xl:w-73.75 2xl:h-[442.5px]"></div>
        </div>
      </div>
    </section>
  );
};
