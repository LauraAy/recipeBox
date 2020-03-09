const { axios, localStorage } = window

const renderAllRec = display => {

  document.getElementById('allRecDisplay').innerHTML = ''

    display.forEach(({title, User, creatorName, recipeType, servingSize, recipeText}) => {
      const itemElem = document.createElement('div')

      itemElem.innerHTML = `
  <ul class="uk-grid-large uk-child-width-1-1 uk-child-width-1-1@suk-text-center" uk-sortable="handle: .uk-sortable-handle" uk-grid>
    <li>
        <div class="uk-card uk-card-default uk-card-body">
          <span class="uk-sortable-handle uk-margin-large-center" uk-icon="icon: bookmark"></span>
          <h2>${title}</h2>
            <p><b>User:</b> ${User.username}</p>
            <p><b>Recipe Creator:</b> ${creatorName}</p>
            <p><b>Recipe Type:</b> ${recipeType}</p>
            <p><b>Serving Size:</b>${servingSize}</p>
            <p><b>Ingredients and Directions:</b></p>
            <p>${recipeText}</p>
        </div>
      </li>
    <ul>
      `

    document.getElementById('allRecDisplay').append(itemElem)

  })
}

// $.ajax({
//   method: "GET",
//   url: "/api/recipes"
// }).then(function (data) {
//   console.log(data[0].title, data[1].User.username)
//   renderAllRec(data)
// })

axios.get('/api/recipes')
.then(({data}) => {
  renderAllRec(data)
})

const { axios } = window

var mymap = L.map('mapid').setView([33.6429445, -117.837059], 14);

var layer = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', { foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>' }).addTo(mymap);

axios.get('/api/regions')
  .then(({ data: region }) => {
    renderRegion(region)
  })
  .catch(e => console.error(e))


const renderRegion = region => {
  region.forEach(({ id, regionName, lat, long }) => {
    const regionElem = []
    regionElem.id = id
    regionElem.name = regionName
    regionElem.lat = lat
    regionElem.long = long
    console.log(regionElem)
    var popup = L.popup()

    function onMapClick(e) {

      switch (id) {
        case 1: {
          var marker = L.icon({
            iconUrl: './assets/images/india-flag-small.png',
            iconSize: [50, 50], // size of the icon
            iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
          })
          
          var regionName = L.marker([lat, long], { icon: marker }).addTo(mymap).bindPopup("<h3 style = 'color: red'>'Indian recipes'</h3>")
        }
          break
        case 2: {
          var marker = L.icon({
            iconUrl: './assets/images/recipe-icon-6.png',
            iconSize: [50, 50], // size of the icon
            iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
          })
          
          var regionName = L.marker([lat, long], { icon: marker }).addTo(mymap).bindPopup("<h3 style = 'color: red'>'Keto recipes'</h3>")
        }
          break
        case 3: {
          var marker = L.icon({
            iconUrl: './assets/images/china-flag-icon-256.png',
            iconSize: [50, 50], // size of the icon
            iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
          })
          
          var regionName = L.marker([lat, long], { icon: marker }).addTo(mymap).bindPopup("<h3 style = 'color: red'>'Chinese recipes'</h3>")
        }
          break
        case 4: {
          var marker = L.icon({
            iconUrl: './assets/images/sweden-flag-icon-256.png',
            iconSize: [50, 50], // size of the icon
            iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
          })
          
          var regionName = L.marker([lat, long], { icon: marker }).addTo(mymap).bindPopup("<h3 style = 'color: red'>'Swedish recipes'</h3>")
        }
          break
        case 5: {
          var marker = L.icon({
            iconUrl: './assets/images/iran-flag-icon-256.png',
            iconSize: [50, 50], // size of the icon
            iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
          })
          
          var regionName = L.marker([lat, long], { icon: marker }).addTo(mymap).bindPopup("<h3 style = 'color: red'>'Persian recipes'</h3>")
        }
          break
        case 6: {
          var marker = L.icon({
            iconUrl: './assets/images/american-flag-small.png',
            iconSize: [50, 50], // size of the icon
            iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
          })
          
          var regionName = L.marker([lat, long], { icon: marker }).addTo(mymap).bindPopup("<h3 style = 'color: red'>'American recipes'</h3>")
        }
          break
        case 7: {
          var marker = L.icon({
            iconUrl: './assets/images/mexico-flag-icon-256.png',
            iconSize: [50, 50], // size of the icon
            iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
          })
          
          var regionName = L.marker([lat, long], { icon: marker }).addTo(mymap).bindPopup("<h3 style = 'color: red'>'Mexican recipes'</h3>")
        }
          break
      }
    }

    mymap.on('click', onMapClick)

    // document.getElementById("regionRecipes").addEventListener("click",event =>{
    //   event.preventDefault()
    //  .then(console.log('ping'))
    //  })

  })
}



