const React = require('react')

const MyRecipes = props => {
  return (  
    <div>
      <h1 style="text-align: center">My Recipes</h1>
    </div>
    <div>
    <p uk-margin>
      <button class="uk-button uk-button-primary uk-button-large 
        uk-width-1-1">Create A Recipe</button>
    </p>
    <hr class="uk-divider-icon" />
    <p>
      <center>
        <form action="javascript:void(0)"> 
        <input id="input_text" class="uk-input uk-form-width-1-1"  
          type="text" placeholder="Search For My Saved Recipes" 
          style="text-align: center"/>
        <button id="submit" class="uk-button uk-button-default">Search</button>       
      </form>
      </center>
    </p>   
  </div>
  <div>
    <ul class="uk-grid-large uk-child-width-1-1 uk-child-width-1-1@s 
      uk-text-center" uk-sortable="handle: .uk-sortable-handle" uk-grid>
    <li>
        <div class="uk-card uk-card-default uk-card-body">
            <span class="uk-sortable-handle uk-margin-large-center" 
              uk-icon="icon: bookmark"></span>Recipe 1
        </div>
    </li>
    <li>
        <div class="uk-card uk-card-default uk-card-body">
            <span class="uk-sortable-handle uk-margin-large-center" 
              uk-icon="icon: bookmark"></span>Recipe 2
        </div>
    </li>
    <li>
        <div class="uk-card uk-card-default uk-card-body">
            <span class="uk-sortable-handle uk-margin-large-center" 
              uk-icon="icon: bookmark"></span>Recipe 3
        </div>
    </li>
    </ul>
  </div>
  )
}
      
module.exports = MyRecipes