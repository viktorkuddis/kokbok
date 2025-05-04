import CardContainer from "../CardContainer/CardContainer";
import styles from "./RecepieCard.module.css";
import { Recipe } from "../../../schemas/recipeSchema";
import Cover from "../../Cover/Cover";
import { CardMetaRow } from "../CardMetaRow/CardMetaRow";

interface Props {
  headingLevel?: "h2" | "h3" | "h4";
  recipe: Recipe;
}
export const RecipeCard = ({ headingLevel = "h2", recipe }: Props) => {
  const Heading = headingLevel;

  const senast = recipe.lastMealPrep?.mostRecentTimestamp
    ? new Date(recipe.lastMealPrep.mostRecentTimestamp).toLocaleDateString(
        "sv-SE",
        {
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      )
    : "";

  return (
    <>
      <div>
        <CardContainer shadow isInverted className={styles.cardContainer}>
          <Heading>{recipe.title}</Heading>
          <div>
            <span className={styles[`rating${recipe.rating?.value}`]}>
              {recipe.rating?.label}
            </span>

            {recipe.source && ` | ${recipe.source}`}
            {senast && ` | ${senast}`}
          </div>

          <div className={`${styles.categppriesContainer}`}>
            {recipe.categories?.map((cat) => (
              <div className={`${styles.chip}`}>
                <small>{cat}</small>
              </div>
            ))}{" "}
          </div>
          <br />
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
        </CardContainer>
      </div>

      {/* {recipe.rating ? recipe.rating : "hej"} */}
      <CardMetaRow recipe={recipe} />
    </>
  );
};
