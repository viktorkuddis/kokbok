import styles from "./Cover.module.css";
import emojiRegex from "emoji-regex";

type Props = {
  mainIngredient: string | null;
  cookingMethod: string[] | null;
  categories: string[] | null;
  mealType: string[] | null;
  scale?: number; // 1 = 100%
  widthInScaleUnits?: number; // 2 = 200%
  heightRatio?: number;
};

function extractAllEmojis(str: string): string[] {
  const regex = emojiRegex();
  const matches = str.match(regex);
  return matches || [];
}

const Cover = (props: Props) => {
  const mainIndgredient = extractAllEmojis(props.mainIngredient || "");
  const cookingMethod = extractAllEmojis(props.cookingMethod?.join("") || "");
  const categories = extractAllEmojis(props.categories?.join("") || "");
  const mealType = extractAllEmojis(props.mealType?.join("") || "");

  const scale = props.scale ? `${props.scale}rem` : "1rem";

  const widthInScaleUnits = props.widthInScaleUnits
    ? props.widthInScaleUnits * 2
    : null;

  const width = widthInScaleUnits
    ? `calc(calc(1em * 10) * ${widthInScaleUnits})`
    : "unset";

  const heightRatio = props.heightRatio ? `1/${props.heightRatio}` : "unset";
  // const ratioH = props.ratioH ? `${props.ratioH}` : 1;

  return (
    <div
      // denna container finns för att sätta skala för css variabeln men också för att ha något att centrera hela gridet i visuellt, eftersom saker inuti gridet translatear sin position så känns hela komponenten lite förskjuten i position annars
      className={styles.container}
      style={{
        fontSize: scale,
      }}
    >
      <div
        className={styles.grid}
        style={{
          width: `${width}`,
          aspectRatio: heightRatio,
        }}
      >
        <div className={styles.mealType}>
          {mealType.map((symbol) => (
            <div>{symbol}</div>
          ))}
        </div>
        <div className={styles.cookingMethod}>
          {cookingMethod.map((symbol, i) => (
            <div key={i}>{symbol}</div>
          ))}
        </div>
        <div className={styles.mainIndgredient}>
          {mainIndgredient.map((symbol, i) => (
            <div key={i}>{symbol}</div>
          ))}
        </div>

        <div className={styles.categories}>
          {categories.map((symbol, i) => (
            <div key={i}>{symbol}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cover;
