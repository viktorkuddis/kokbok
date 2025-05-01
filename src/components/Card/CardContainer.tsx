import { ReactNode } from "react";
import styles from "./CardContainer.module.css";

import cn from "classnames";

interface Props {
  isInverted?: boolean;
  shadow?: boolean;
  headingLevel?: "h2" | "h3" | "h4";
  heading?: string;
  children: ReactNode;
}

const CardContainer = ({
  isInverted = false,
  shadow = false,
  headingLevel = "h2",
  heading,
  children,
}: Props) => {
  const Heading = headingLevel;
  return (
    <>
      <div
        className={cn(styles.card, {
          [styles.inverted]: isInverted,
          [styles.shadow]: shadow,
        })}
      >
        <Heading>{heading}</Heading>
        {children}
      </div>
    </>
  );
};

export default CardContainer;
