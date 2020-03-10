const { axios, localStorage } = window

const createRegion = () => {
  axios.post('/api/regions', {
    regionName: document.getElementById('regionName').value,
    lat: document.getElementById('latitude').value,
    long: document.getElementById('longitude').value
  })
  }

  document.getElementById('createRegion').addEventListener('click', event => {
    // Stop the form from refreshing the page
    event.preventDefault()
    // Runs the createRecipe function
    createRegion()
    console.log('you created a region')

    const regionVal = document.getElementById('regionName').value

    axios.get(`/api/users/${regionVal}`)
      .then(({ data }) => {
        localStorage.setItem('regname', data.regionName)
        localStorage.setItem('lat', data.lat)
        localStorage.setItem('lat', data.long)

        console.log(data.regionName)


        // window.location.replace("/createRecipe");
  })
})
