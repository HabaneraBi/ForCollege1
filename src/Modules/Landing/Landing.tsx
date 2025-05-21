import type { FC } from "react";
import { SectionIntroduction } from "./components/SectionIntroduction";
import { Algorithm } from "./components/SectionAlgorithm/SectionAlgorithm";
import { FindHoliday } from "./components/SectionFindHoliday/SectionFindHoliday";
import { SectionStocks } from "./components/SectionStocks/SectionStocks";
import { Reply } from "./components/Reply/Reply";
import { Subscribe } from "./components/Subscribe";

const Landing: FC = () => {
  return (
    <>
      <SectionIntroduction />
      <Algorithm />
      <FindHoliday />
      <SectionStocks />
      <Reply />
      <Subscribe />
    </>
  );
};

export { Landing };
