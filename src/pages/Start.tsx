import { useContext } from "react";
import { RecipeCard } from "../components/Card/RecipeCard";
import { AppContext } from "../context/AppContext";

const Start = () => {
  const { recipes } = useContext(AppContext);

  return (
    <div className="page-section-content-container">
      Start
      {recipes.map((recipe, i) => (
        <RecipeCard key={i} recipe={recipe}>
          hej
        </RecipeCard>
      ))}
    </div>
  );
};

export default Start;
