import { ReactNode, createContext, useReducer } from "react";
import stringsEn from "@/strings/stringsEn.json";
import { Strings } from "@/types/stringTypes";

export type AppContextType = {};

interface AppAction {}

interface AppState {
  darkmode: boolean;
  strings: Strings;
  lang: "en" | "vi";
}
const appReducer = (state: AppState, action: AppAction) => {
  const { type, payload } = action;
  switch (type) {
    case "enableDarkMode":
      localStorage.setItem("darkmode", payload ? "true" : "false");
      return {
        ...state,
        darkmode: payload,
      };

    default:
      return state;
  }
};

export const AppContext = createContext<{
  state: AppContextType;
  dispatch: React.Dispatch<AppAction>;
}>({
  state: {
    strings: stringsEn,
    lang: "en",
    darkmode: false,
  },
  dispatch: () => null,
});

export const AppProvider: React.FC<{
  children: ReactNode;
  initialState: AppContextType;
}> = ({ initialState, children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
