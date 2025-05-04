import { useContext } from "react";
import { RecipeCard } from "../components/Card/RecepieCard/RecipeCard";
import { AppContext } from "../context/AppContext";

const Start = () => {
  const { recipes } = useContext(AppContext);

  return (
    <div className="page-section-content-container">
      Start
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <p>Paragraf</p>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
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
