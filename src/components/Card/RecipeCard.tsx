import { ReactNode } from "react";
import CardContainer from "./CardContainer/RecepieCard/CardContainer";
import styles from "./RecepieCard.module.css";

interface Props {
  headingLevel?: "h2" | "h3" | "h4";
  heading?: string;
  children?: ReactNode;
  recipe: object;
}
export const RecipeCard = ({ headingLevel = "h2", heading }: Props) => {
  const Heading = headingLevel;

  return (
    <div>
      <CardContainer className={styles.cardContainer}>
        <Heading>{heading}</Heading>
      </CardContainer>
    </div>
  );
};
