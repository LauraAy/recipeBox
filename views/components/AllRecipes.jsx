const React = require('react')

const AllRecipes = props => {
  return (
    <div>
        <h1 style="text-align: center">All Recipes</h1>
    </div>
    <div>
      <p uk-margin>
        <center>
          <form action="javascript:void(0)"> 
          <input id="input_text" class="uk-input uk-form-width-1-1"  
            type="text" placeholder="Search For All Recipes" 
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
      
module.exports = AllRecipes