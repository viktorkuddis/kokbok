import { Recipe } from "../../../schemas/recipeSchema";

type Props = {
  recipe: Recipe;
};

export const CardMetaRow = ({ recipe }: Props) => {
  // const metaToShow = [recipe.]

  return (
    <div>
      <small>{recipe.created_time}</small>
    </div>
  );
};
