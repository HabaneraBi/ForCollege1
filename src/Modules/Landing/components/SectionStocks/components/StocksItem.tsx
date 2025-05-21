import type { FC } from "react";
import type { Stocks } from "./infoForStocks";

export const StocksItem: FC<Stocks> = ({
  imageUrl,
  heading,
  text,
  forLiText,
}) => {
  return (
    <div className="flex flex-col gap-4 md:w-9/20 lg:w-1/3">
      <img className="object-cover rounded-3xl w-full h-50" src={imageUrl} />
      <h2 className="font-semibold text-lg">{heading}</h2>
      <p>{text}</p>
      <p>Купон действует на следующие виды услуг:</p>
      <ul className="list-disc">
        {forLiText.map((text, index) => {
          return <li key={index}>{text}</li>;
        })}
      </ul>
      <a className="text-[#005aab] cursor-pointer text-center font-semibold">
        Узнать больше
      </a>
    </div>
  );
};
