import { createContext } from "react";
import type { RefObject } from "react";

export const globalContext = createContext<GlobalContext>({
  stocks: null,
  find: null,
  algorithm: null,
});

//const stocks = useRef<HTMLLinkElement>(null)

interface GlobalContext {
  stocks: RefObject<HTMLTableSectionElement | null> | null;
  find: RefObject<HTMLTableSectionElement | null> | null;
  algorithm: RefObject<HTMLTableSectionElement | null> | null;
}
