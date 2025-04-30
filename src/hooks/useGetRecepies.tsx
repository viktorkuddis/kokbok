import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { getAllRecipes } from "../api/getRecipe";

export function useGetRecipes() {
  const { setRecipes } = useContext(AppContext);

  async function fetchData() {
    try {
      console.log("Försöker hämta data...");

      // Vänta på att getAllRecipes ska slutföras
      const data = await getAllRecipes();

      console.log("Data hämtad:", data);

      // Sätt recepten i kontexten (eller i komponentens state om du vill)
      setRecipes(data); // Se till att data har rätt format, t.ex. en array av objekt
    } catch (error) {
      console.error("Något gick fel vid hämtning av recept", error);
    }
  }

  fetchData(); // Kör funktionen när komponenten renderas
}
