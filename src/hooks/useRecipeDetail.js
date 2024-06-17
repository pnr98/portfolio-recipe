import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState, useCallback } from "react"
import { db } from "../firebase"

export default function useRecipeDetail (id){
    const [recipe, setRecipe] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchRecipe = useCallback(async () => {
        try {
            const recipeDoc = doc(db, 'recipes', id)
            const recipeData = await getDoc(recipeDoc)
            
            if(recipeData.exists()) {
                setRecipe({ id: recipeDoc.id, ...recipeData.data() })
            } else {
                setError('No such document!');
            }
            setLoading(false)

        } catch(err) {
            setError(`Error fetching recipe: ${err.message}`)
        }
    }, [id])

    useEffect(() => {
        fetchRecipe()
    }, [fetchRecipe])

    return { recipe, loading, error, fetchRecipe}
}