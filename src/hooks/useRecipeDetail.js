import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase"

export default function useRecipeDetail (id){
    const [recipe, setRecipe] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchRecipe = async () => {
        try {
            const recipeDoc = doc(db, 'recipes', id)
            const recipeData = await getDoc(recipeDoc)
            
            if(recipeData.exists()) {
                setRecipe({ id, ...recipeData.data() })
            } else {
                
                setError('No such document!');
            }
            setLoading(false)

        } catch(err) {
            setError(`Error fetching recipe: ${err.message}`)
        }
    }
    useEffect(() => {
        fetchRecipe()
    }, [id])

    return { recipe, loading, error}
}