const React = require('react')

const MapInfo = props => {
  return (
    <div>
        <h1 style="text-align: center">Recipes Around the World!</h1>
    </div>
    <div>
      <ul class="uk-grid-large uk-child-width-1-1 uk-child-width-1-1@s 
        uk-text-center" uk-sortable="handle: .uk-sortable-handle" uk-grid>
      <li>
          <div class="uk-card uk-card-default uk-card-body">
              <span class="uk-sortable-handle uk-margin-large-center" 
                uk-icon="icon: bookmark"></span>(Info About Recipe)
          </div>
      </li>
      </ul>
    </div>
  )
}
      
module.exports = MapInfo