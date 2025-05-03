import styles from "./Cover.module.css";

type Props = {
  mainIngredient: string | null;
  cookingMethod: string[] | null;
  categories: string[] | null;
  mealType: string[] | null;
  scale?: number; // 1 = 100%
  widthInScaleUnits?: number; // 2 = 200%
  heightRatio?: number;
};

// Funktion för att extrahera alla emojis från en sträng
function extractAllEmojis(str: string) {
  const emojiRegex =
    /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2300}-\u{23FF}\u{2B50}]/gu;

  // Matchar alla emojis i strängen
  const matches = str.match(emojiRegex);

  // Om det finns emojis, returnera en array med alla matchningar, annars returnera en tom array
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
          {cookingMethod.map((symbol) => (
            <div>{symbol}</div>
          ))}
        </div>
        <div className={styles.mainIndgredient}>
          {mainIndgredient.map((symbol) => (
            <div>{symbol}</div>
          ))}
        </div>

        <div className={styles.categories}>
          {categories.map((symbol) => (
            <div>{symbol}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cover;
