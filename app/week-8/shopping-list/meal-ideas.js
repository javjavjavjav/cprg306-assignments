'use client';
import { useState,useEffect } from "react";

async function fetchMealIdeas(ingredient){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
}

export default function MealIdeas({ingredient}){
    const [mealIdeas,setMealIdeas] = useState([]);   

    
 
    

    const loadMealIdeas= async(ingredient) => {
        try{ 
        const  data= await fetchMealIdeas(ingredient);
        console.log("API Response:", data);
        setMealIdeas(data);
    }
    catch(error){
        console.error("Error fetching meal ideas", error);
    }
    };
    

    useEffect(() => {
        loadMealIdeas(ingredient);
    }, [ingredient]);

  


    return (
        <div >
            <h3 className="text-xl font-bold"> Meal Ideas</h3>
            <p>Here are some meal ideas using {ingredient}:</p>
            <ul>
                
                {mealIdeas && mealIdeas.map(meal => (
                    <li  key={meal.idMeal}>{meal.strMeal}</li>
                ))}
                
            </ul>
            
        </div>
    );
}