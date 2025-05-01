import axios from "axios";
import { RecipeSchema } from "../schemas/recipeSchema";

// Gör den här funktionen asynkron
export async function getAllRecipes() {

    try {
        // Vänta på att axios ska få svar
        const result = await axios.get(`${import.meta.env.VITE_API_URL}/recipes/all-recipes-structured`);
        // Logga resultatet från API-anropet

        const validate = RecipeSchema.array().safeParse(result.data)
        if (!validate.success) {
            console.error("Fel vid datavalidering:", validate.error);
        } else {
            console.log("Data är giltig:", validate.data);
        }

        // Returnera den hämtade datan
        return result.data;  // Förutsatt att data är det du behöver från API:et
    } catch (err) {
        // Fångar och loggar eventuella fel
        console.error("Fel vid hämtning av recept", err);
        throw err;  // Kasta felet för att kunna hantera det i anroparen
    }
}




// https://dev.to/alexeagleson/how-to-connect-a-react-app-to-a-notion-database-51mc