import { ReactNode } from "react";
import styles from "./CardContainer.module.css";

import cn from "classnames";

interface Props {
  isInverted?: boolean;
  shadow?: boolean;
  children?: ReactNode;
  className?: string;
}

const CardContainer = ({
  isInverted = false,
  shadow = false,
  children,
  className,
}: Props) => {
  return (
    <>
      <div
        className={cn(className, styles.card, {
          [styles.inverted]: isInverted,
          [styles.shadow]: shadow,
        })}
      >
        {children}
      </div>
    </>
  );
};

export default CardContainer;
