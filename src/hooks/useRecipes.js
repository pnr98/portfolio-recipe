import { useState, useEffect, useCallback } from "react";
import { collection, getDocs, query, startAfter,orderBy, where, limit } from "firebase/firestore";
import { db } from "../firebase.js";

const PAGE_SIZE = 5; // 한번에 불러올 문서 수 
// const selectedFields = ["image_URL", "recipe_name", "cook_time", "difficulty", "food_type"]

export function useRecipes(category) {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const [lastRecipe, setLastRecipe] = useState(null);
    
    const fetchRecipes = useCallback(async () => {
        const q = query(
            collection(db, "recipes"),
            where("food_type", "==", category),
            orderBy("recipe_id"),
            limit(PAGE_SIZE),
        );
        try {
            setLoading(true)
            const querySnapshot = await getDocs(q)
            const newRecipes = querySnapshot.docs.map((doc) =>  ({ 
                id: doc.id, 
                ...doc.data()
            }));   
            setRecipes(newRecipes);
            setLastRecipe(querySnapshot.docs[querySnapshot.docs.length - 1]);
            setLoading(false);
        } catch (err) {
            console.error(`Error fetching ${category} recipes:`, err);
            setLoading(false);
        }
    }, [category]) 
    
    const fetchMoreRecipes = useCallback(async () => {
        if (!lastRecipe) return;
        
        const q = query(
            collection(db, "recipes"),
            where("food_type", "==", category),
            orderBy("recipe_id"), 
            startAfter(lastRecipe),
            limit(PAGE_SIZE),
        )
        try {
            setLoading(true)
            const querySnapshot = await getDocs(q)
            // querySnapshot.empty
            //     ? setHasMore(false) 
            //     : setLastRecipe(querySnapshot.docs[querySnapshot.docs.length - 1]);
            const newRecipes = querySnapshot.docs.map((doc) =>  ({ 
                id: doc.id, 
                ...doc.data()
            }));   
            setRecipes((prev) => [...prev, ...newRecipes]);
            setHasMore(querySnapshot.docs.length === PAGE_SIZE);
            setLoading(false);
        } catch (err) {
            console.error(`Error fetching ${category} recipes:`, err);
            setLoading(false);
        }
    }, [category, lastRecipe]) 

    // 처음 화면 랜더링 될 때 첫 번째 페이지
    useEffect(() => {
        fetchRecipes();
    }, [fetchRecipes]);
    
    return {recipes, loading, fetchMoreRecipes, hasMore}
}