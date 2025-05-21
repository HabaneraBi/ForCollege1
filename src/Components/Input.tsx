import type { FC } from "react";
interface InputProps {
  placeholder?: string;
  val?: string;
  type: string;
}

export const Input: FC<InputProps> = ({ placeholder, val, type }) => {
  return (
    <input
      className="bg-white rounded-3xl w-full px-2 h-8 active:outline-1 outline-none focus:outline-black focus:outline-solid"
      placeholder={placeholder}
      type={type}
      value={val}
    />
  );
};
