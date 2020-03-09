const { axios, localStorage } = window
// const uidCreate = localStorage.getItem('uid')


const createRecipe = () => {
  axios.post('/api/recipes', {
    title: document.getElementById('title').value,
    recipeType: document.getElementById('recipeType').value,
    servingSize: document.getElementById('servingSize').value,
    recipeText: document.getElementById('recipeText').value,
    UserId: localStorage.getItem('uid')
})
}

document.getElementById('createRecipe').addEventListener('click', event => {
  // Stop the form from refreshing the page
  event.preventDefault()
  // Runs the createRecipe function
  createRecipe()
  console.log("you created a recipe!")
  // .then(function() {
  // window.location.replace("/myRecipes")
  //
  // })
})
  
