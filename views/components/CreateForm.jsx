const React = require('react')

const createForm = props => {
  return (
    <div class="uk-card uk-card-large uk-card-default uk-padding-large">
      <form class="uk-form-stacked">
        <h1>Create Recipes</h1>
        <div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-text">Title</label>
          <div class="uk-form-controls">
            <input class="uk-input" id="form-stacked-text" type="text" placeholder="Name of your recipe!">
        </div>
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="form-stacked-select">Recipe Types</label>
            <div class="uk-form-controls">
              <select class="uk-select" id="form-stacked-select">
                <option><Select: disabled></Select: disabled></option>
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
              <option>Appetizers/Snacks</option>
              <option>Drinks</option>
          </select>
          </div>
        </div>

        <div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-text">Serving Size</label>
          <div class="uk-form-controls">
            <input class="uk-input" id="form-stacked-text" type="text" placeholder="How many will this serve?">
        </div>
          </div>


          <div class="uk-margin">
            <label class="uk-form-label" for="form-stacked-text">Directions</label>
            <div class="uk-form-controls uk-form-width-large"></div>
            <input type="text" id="txtbox">

              <p uk-margin>
                <button class="uk-button uk-button-primary uk-button-small">Submit Recipe!</button>
              </p>
      </div>
          </div>
  </form>
  </div>
  )
}

module.exports = createForm