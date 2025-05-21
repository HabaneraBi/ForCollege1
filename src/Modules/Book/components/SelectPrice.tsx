import { useState, type FC } from "react";
interface SelectPriceProps {
  service: string;
  price: string;
}

const SelectPrice: FC<SelectPriceProps> = ({ service, price }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <p
      onClick={() => setIsActive((prev) => !prev)}
      className={`flex justify-between items-center cursor-pointer w-full ${
        isActive ? "bg-[#005aab] text-white" : "bg-white text-black"
      } rounded-2xl p-3 gap-2 h-20 transition-colors duration-400 ease-in-out`}
    >
      <span className="font-semibold text-current">{service}</span>
      <span className="font-semibold text-current">{price}</span>
    </p>
  );
};

export { SelectPrice };
