import { z } from "zod";

// Zod-schema för att definiera strukturen av Recipe
export const RecipeSchema = z.object({
    id: z.string().nullable(),
    title: z.string().nullable(),
    url: z.string().nullable(),
    created_time: z.string().nullable(),
    last_edited_time: z.string().nullable(),
    source: z.string().nullable(),
    mainIngredient: z.string().nullable(),
    categories: z.array(z.string()).nullable(),
    lastMealPrep: z
        .object({
            start: z.string().nullable(),
            end: z.string().nullable(),
            mostRecentTimestamp: z.string().nullable(),
        })
        .nullable(),
    rating: z
        .object({
            label: z.string().nullable(),
            value: z.number().nullable(),
        })
        .nullable(),
    mealType: z.array(z.string()).nullable(),
    cookingMethod: z.array(z.string()).nullable(),
    introduction: z.string().nullable(),
    instructions: z.string().nullable(),
    chefNotes: z.string().nullable(),
    personalNotes: z.string().nullable(),
    variants: z
        .array(
            z.object({
                isOriginal: z.boolean().nullable(),
                title: z.string().nullable(),
                personalComment: z.string().nullable(),
                ingredients: z.string().nullable(),
                macrosPerServing: z
                    .object({
                        calories: z.number().nullable(),
                        protein: z.number().nullable(),
                        fat: z.number().nullable(),
                        carbohydrates: z.number().nullable(),
                    })
                    .nullable(),
                servings: z.number().nullable(),
            })
        )
        .nullable(),
});

// Exportera Recipe-typen från Zod-schemat
export type Recipe = z.infer<typeof RecipeSchema>;
