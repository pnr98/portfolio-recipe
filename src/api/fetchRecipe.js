// firestore에 레시피 업로드하기
// 패키지.json에 type:module로 에러를 피했지만, 다른 코드에 확장명을 하나하나 입력해야하는 문제가 있어 무시하고 진행
// 이후 다시 type:modul을 삭제하는 방향으로 했음. 해결필요

import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";
import recipesData from '../dummyData/recipes.json' assert { type: "json" };

// const { collection, addDoc, getDocs } = require('firebase/firestore');
// const firebase = require('../firebase.js');
// const db = firebase.db;
// const recipesData = require('../dummyData/recipes.json');

// recipe 파일 업로드
// const recipesData = require('./dummyData/recipes.json');
const recipeCollectionRef = collection(db, "recipes"); //Firestore에서 레시피 데이터를 저장할 컬렉션을 참조

// 레시피 데이터 Firestore에 업로드
async function uploadRecipes() {
    try {
        for (const recipe of recipesData) {
            await addDoc(recipeCollectionRef, recipe);
            console.log("레시피 업로드 완료:", recipe.recipe_name);
        }
    } catch (error) {
        console.error("Error uploading recipes:", error);
    }
}

// 애플리케이션 로드 시 레시피 데이터 가져오기
async function fetchRecipes() {
    try {
        const querySnapshot = await getDocs(recipeCollectionRef);
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${JSON.stringify(doc.data())}`)
        })
    } catch (error) {
        console.error("Error fetching recipes:", error);
    }
}

// 레시피 업로드 실행
uploadRecipes()
    .then(() => {
        // 애플리케이션 로드 시 레시피 데이터 가져오기 실행
        fetchRecipes();
    })
    .catch((error) => {
        console.error("Error uploading recipes:", error);
    });