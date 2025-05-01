import { createContext, ReactNode, useState } from "react";

// Typen för kontexten (AppContextType) - det man kan skicka i providern.
interface AppContextType {
  testvariabel: string;
  recipes: object[]; // Typen för recepten är en array av Recipe
  setRecipes: React.Dispatch<React.SetStateAction<object[]>>;
}

const AppContext = createContext<AppContextType>(null!);

// AppContextProvider som tillhandahåller kontexten
export function AppContextProvider({ children }: { children: ReactNode }) {
  const [recipes, setRecipes] = useState<object[]>([]);

  const testvariabel = "hej från kontexten";

  return (
    <AppContext.Provider value={{ testvariabel, recipes, setRecipes }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext };
