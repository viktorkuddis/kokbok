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

import { useEffect } from "react";
const App = () => {
  const fetchAndStoreRecipes = useRecipeFetcher();

  // useEffect för att anropa funktionen när appen först monteras
  useEffect(() => {
    fetchAndStoreRecipes();
  }, [fetchAndStoreRecipes]);

  return (
    <>
      <div className="appcontainer">
        <div className="sidansInnehall">
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          voluptates velit ad amet laudantium at, unde voluptatem obcaecati
          veritatis minima saepe possimus aperiam, suscipit delectus culpa qui
          maxime quaerat eaque? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugiat voluptates velit ad amet laudantium at, unde
          voluptatem obcaecati veritatis minima saepe possimus aperiam, suscipit
          delectus culpa qui maxime quaerat eaque? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Fugiat voluptates velit ad amet
          laudantium at, unde voluptatem obcaecati veritatis minima saepe
          possimus aperiam, suscipit delectus culpa qui maxime quaerat eaque?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          voluptates velit ad amet laudantium at, unde voluptatem obcaecati
          veritatis minima saepe possimus aperiam, suscipit delectus veritatis
          minima saepe possimus aperiam, suscipit delectus culpa qui maxime
          quaerat eaque? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Fugiat voluptates velit ad amet laudantium at, unde voluptatem
          obcaecati veritatis minima saepe possimus aperiam, suscipit delectus
          culpa qui maxime quaerat eaque? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugiat voluptates velit ad amet laudantium at, unde
          voluptatem obcaecati veritatis minima saepe possimus aperiam, suscipit
          delectus culpa qui maxime quaerat eaque? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Fugiat voluptates velit ad amet
          laudantium at, unde voluptatem obcaecati veritatis minima saepe
          possimus aperiam, suscipit delectus veritatis minima saepe possimus
          aperiam, suscipit delectus culpa qui maxime quaerat eaque? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Fugiat voluptates velit
          ad amet laudantium at, unde voluptatem obcaecati veritatis minima
          saepe possimus aperiam, suscipit delectus culpa qui maxime quaerat
          eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          voluptates velit ad amet laudantium at, unde voluptatem obcaecati
          veritatis minima saepe possimus aperiam, suscipit delectus culpa qui
          maxime quaerat eaque? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugiat voluptates velit ad amet laudantium at, unde
          voluptatem obcaecati veritatis minima saepe possimus aperiam, suscipit
          delectus veritatis minima saepe possimus aperiam, suscipit delectus
          culpa qui maxime quaerat eaque? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugiat voluptates velit ad amet laudantium at, unde
          voluptatem obcaecati veritatis minima saepe possimus aperiam, suscipit
          delectus culpa qui maxime quaerat eaque? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Fugiat voluptates velit ad amet
          laudantium at, unde voluptatem obcaecati veritatis minima saepe
          possimus aperiam, suscipit delectus culpa qui maxime quaerat eaque?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          voluptates velit ad amet laudantium at, unde voluptatem obcaecati
          veritatis minima saepe possimus aperiam, suscipit delectus culpa qui
          maxime quaerat eaque? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugiat voluptates velit ad amet
        </div>
        <footer>DETTA ÄR footern</footer>
      </div>
    </>
  );
};

export default App;
