export const Footer = () => {
  return (
    <footer className="mt-auto w-full flex flex-col items-center bg-[#001c36] py-12 gap-6">
      <p className="text-2xl text-white">8 (800) 111-20-20</p>
      <a
        className="text-3xl text-white cursor-pointer transition-colors duration-150 ease-in-out hover:text-[#d4d4d4]"
        onClick={() => window.scrollTo(0, 0)}
      >
        Наверх
      </a>
    </footer>
  );
};
