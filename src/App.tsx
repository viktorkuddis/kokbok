import "./Variables.css";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Start from "./pages/Start";
import Recomendations from "./pages/Recomendations";
import Recipe from "./pages/Recipe";
import NotFound from "./pages/NotFound";
import Browse from "./pages/Browse";
import Layout from "./pages/Layout";
import KitchenList from "./pages/KitchenList";
import ShoppingList from "./pages/ShoppingList";
// import { useContext } from "react";
// import { AppContext } from "./context/AppContext";
// import { getAllRecipes } from "./api/getRecipe";
// import { useGetRecipes } from "./hooks/useGetRecepies";

// React-komponent

import { useRecipeFetcher } from "./hooks/useRecipeFetcher";
import { isMobile } from "./utils/isMobileUtils";

import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";

const App = () => {
  const { setIsMobileDevice } = useContext(AppContext);

  const fetchAndStoreRecipes = useRecipeFetcher();

  // useEffect för att anropa funktionen när appen först monteras
  useEffect(() => {
    fetchAndStoreRecipes();
    setIsMobileDevice(isMobile());
  }, [fetchAndStoreRecipes, setIsMobileDevice]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Start />} />
            <Route path="recept" element={<Recipe />} />
            <Route path="smarta-listor" element={<Recomendations />} />
            <Route path="alla-recept" element={<Browse />} />
            <Route path="Koket" element={<KitchenList />} />
            <Route path="inkopslista" element={<ShoppingList />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
