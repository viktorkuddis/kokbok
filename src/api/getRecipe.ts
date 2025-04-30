import axios from "axios";

// Gör den här funktionen asynkron
export async function getAllRecipes() {
    try {
        // Vänta på att axios ska få svar
        const result = await axios.get("http://localhost:8000/all-structured-recepie-cards");

        // Logga resultatet från API-anropet
        console.log("Data hämtad:", result.data);

        // Returnera den hämtade datan
        return result.data;  // Förutsatt att data är det du behöver från API:et
    } catch (err) {
        // Fångar och loggar eventuella fel
        console.error("Fel vid hämtning av recept", err);
        throw err;  // Kasta felet för att kunna hantera det i anroparen
    }
}






// https://dev.to/alexeagleson/how-to-connect-a-react-app-to-a-notion-database-51mc