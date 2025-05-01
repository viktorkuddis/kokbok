import { useCallback, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { getAllRecipes } from "../api/getRecipe";

// detta är en hook som exporterar en funktion som jag kan få tillgång genom att kalla på hooken genom att dra den ut ur hooken:
// exempelvis const fetchRecipes = useRecipes()

export function useRecipeFetcher() {
  const { setRecipes } = useContext(AppContext);

  const fetchAndStoreRecipes = useCallback(async () => {
    try {
      console.log("Försöker hämta data... genom hook");
      const data = await getAllRecipes();
      console.log("Data hämtad genom hook:", data);
      // sätter i kontext:
      setRecipes(data);
    } catch (error) {
      console.error(
        "Något gick fel vid hämtning av recept. detta meddelande kommer från custom hook",
        error
      );
    }
  }, []);

  return fetchAndStoreRecipes;
}
