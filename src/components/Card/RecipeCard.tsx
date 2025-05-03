import CardContainer from "./CardContainer/RecepieCard/CardContainer";
import styles from "./RecepieCard.module.css";
import { Recipe } from "../../schemas/recipeSchema";
import Cover from "../Cover/Cover";

interface Props {
  headingLevel?: "h2" | "h3" | "h4";
  recipe: Recipe;
}
export const RecipeCard = ({ headingLevel = "h2", recipe }: Props) => {
  const Heading = headingLevel;

  return (
    <div>
      <CardContainer shadow isInverted className={styles.cardContainer}>
        <Heading>{recipe.title}</Heading>
        <div className={styles.cover}>
          <Cover
            mainIngredient={recipe.mainIngredient}
            cookingMethod={recipe.cookingMethod}
            categories={recipe.categories}
            mealType={recipe.mealType}
            scale={0.3}
            widthInScaleUnits={1.2}
            heightRatio={0.7}
          />
        </div>
        hej Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        nesciunt nobis natus quidem. Quisquam, impedit, voluptatibus similique
        fugit quo atque voluptate adipisci qui eveniet, doloremque eos
        consequatur nesciunt libero cupiditate.
      </CardContainer>
    </div>
  );
};
