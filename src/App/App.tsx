import { Header } from "../Modules/Header/Header";
import { Landing } from "../Modules/Landing/Landing";
import { Footer } from "../Modules/Footer/Footer";
import { globalContext } from "./context";
import { useRef } from "react";
import { Search } from "../Modules/Search/Search";
import { Route, Routes } from "react-router";
import { Seat } from "../Modules/Seat/Seat";
import { Book } from "../Modules/Book/Book";

const App = () => {
  const stocks = useRef<HTMLTableSectionElement>(null);
  const find = useRef<HTMLTableSectionElement>(null);
  const algorithm = useRef<HTMLTableSectionElement>(null);

  return (
    <globalContext.Provider value={{ stocks, find, algorithm }}>
      <div className="bg-[#f7f8fa] flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/ForCollege1/" element={<Landing />} />
          <Route path="/ForCollege1/search" element={<Search />} />
          <Route path="/ForCollege1/seat" element={<Seat />} />
          <Route path="/ForCollege1/book" element={<Book />} />
        </Routes>
        <Footer />
      </div>
    </globalContext.Provider>
  );
};

export { App };
