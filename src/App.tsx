import "./App.css";
import "./Variables.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Start from "./pages/Start";
import Recomendations from "./pages/Recomendations";
import Recipe from "./pages/Recipe";
import NotFound from "./pages/NotFound";
import Browse from "./pages/Browse";
import Layout from "./pages/Layout";
import KitchenList from "./pages/KitchenList";
import ShoppingList from "./pages/ShoppingList";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
// import { getAllRecipes } from "./api/getRecipe";
import { useGetRecipes } from "./hooks/useGetRecepies";

// React-komponent
const App = () => {
  const context = useContext(AppContext);

  const { recipes } = useContext(AppContext);

  console.log(context.testvariabel);

  useGetRecipes();

  setTimeout(() => {
    console.log(recipes);
    console.log("timeout");
  }, 3000);

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
      {/* {" "}
      <div className="hero-section">
        <div className="page-section-content-container">
          <h1>Things to Learn</h1>

          <button
            type="button"
            onClick={() => {
              fetch("http://localhost:8000/")
                .then((response) => response.json())
                .then((payload) => {
                  console.log(payload);
                });
            }}
          >
            Fetch List
          </button>
        </div>
      </div> */}
    </>
  );
};

export default App;
