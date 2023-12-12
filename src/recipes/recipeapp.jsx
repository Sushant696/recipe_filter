/* eslint-disable react/prop-types */
import recipeArr from "./recipes"
function RecipeApp() {
    if(!recipeArr){
        console.log("cannot import the recipe array ")
    }
  return (
    <div>
      {recipeArr.map((recipe,i)=>{
        return (
            <div key={i}>
            <h2>{recipe.id}</h2>
            </div>
        )
      })}
    </div>
  )
}

export default RecipeApp
