import CardContainer from "./CardContainer/RecepieCard/CardContainer";
import styles from "./RecepieCard.module.css";
import { Recipe } from "../../schemas/recipeSchema";

interface Props {
  headingLevel?: "h2" | "h3" | "h4";
  recipe: Recipe;
}
export const RecipeCard = ({ headingLevel = "h2", recipe }: Props) => {
  const Heading = headingLevel;

  return (
    <div>
      <CardContainer className={styles.cardContainer}>
        <Heading>{recipe.title}</Heading>
      </CardContainer>
    </div>
  );
};
