import { useContext } from "react";
import { RecipeCard } from "../components/Card/RecipeCard";
import { AppContext } from "../context/AppContext";

const Start = () => {
  const { recipes } = useContext(AppContext);

  return (
    <div className="page-section-content-container">
      Start
      {recipes.map((recipe, i) => (
        <>
          {" "}
          br
          <RecipeCard key={i} recipe={recipe} />
        </>
      ))}
    </div>
  );
};

export default Start;
