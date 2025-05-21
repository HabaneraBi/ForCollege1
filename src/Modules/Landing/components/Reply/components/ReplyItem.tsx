import type { FC } from "react";
import type { InfoReply } from "./infoReply";
import person from "/src/UI/icons/person.png";

export const ReplyItem: FC<InfoReply> = ({ text, name }) => {
  return (
    <div className="flex flex-col bg-white rounded-3xl px-4 py-6 justify-between lg:w-29/100 xl:w-1/4">
      <div className="flex flex-col items-center gap-4">
        <img src={person} />
        <p className="text-center">{text}</p>
      </div>
      <p className="mt-4 text-lg text-[#005aab] text-center">{name}</p>
    </div>
  );
};
