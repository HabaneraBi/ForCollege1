import type { FC } from "react";
interface AlgorithmItemProps {
  digit: string;
  text: string;
  classNameDiv: string;
  typeColorSet: string;
  zIndex?: string;
}

export const AlgorithmItem: FC<AlgorithmItemProps> = ({
  digit,
  text,
  classNameDiv,
  typeColorSet,
  zIndex,
}) => {
  return (
    <div
      className={`flex flex-col p-3 min-h-30 rounded-3xl sm:h-40 lg:h-60 xl:h-40 2xl:h-60 ${classNameDiv}`}
    >
      <span
        className={`rotate ${
          typeColorSet === "1" ? "text-white" : "text-[#005aab]"
        } ${zIndex} xl:text-2xl xl:size-12 text-center size-10 text-xl font-light relative after:absolute after:size-full after:rounded-3xl after:border-2 after:border-dashed after:border-current after:bottom-1 after:left-0 after:xl:bottom-2`}
      >
        {digit}
      </span>
      <p
        className={`mt-3 ${
          typeColorSet === "1" ? "text-white" : "text-black"
        } ${zIndex} font-light xl:text-lg`}
      >
        {text}
      </p>
    </div>
  );
};
