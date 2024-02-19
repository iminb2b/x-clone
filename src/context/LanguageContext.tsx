import { createContext } from "react";
import stringsEn from "@/strings/stringsEn.json";
import { Strings } from "@/types/stringTypes";

export type LanguageContextType = {
  strings: Strings;
  lang: "en" | "vi";
};

export const LanguageContext = createContext<LanguageContextType>({
  strings: stringsEn,
  lang: "en",
});
