import { createContext, ReactNode, useState } from "react";

// interface RecipeVersions {
//   versionTitle: string;
//   ingredients: string[];
//   richIngredients?: object[];
//   instructions: string[];
//   richInstructions?: object[];
//   macrosPerServing: {
//     calories: number;
//     protein: number;
//     fat: number;
//     carbohydrates: number;
//   };
//   servings: number;
// }

// interface Recipe {
//   id: string;
//   title: string;
//   mainIngredient: string;
//   categories: string[];
//   lastMealPrep: {
//     start: string;
//     end: string;
//     latest: string;
//   };
//   Rating: {
//     lable: string;
//     value: number;
//     color: string;
//   };
//   original: RecipeVersions;
//   custom1: RecipeVersions;
//   custom2: RecipeVersions;
//   custom3: RecipeVersions;
// }

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
