const {axios, localStorage} = window

const renderAllRec = display => {

  document.getElementById('display').innerHTML = ''
  
display.forEach(({ title, User }) => {
  const itemElemTwo = document.createElement('div')
  
  itemElem.innerHTML= `Title: ${title} User: ${User.username}`

  // display.forEach(({data}) => {
  //   const itemElem = document.createElement('li')

  // itemElem.innerHTML = `Title: ${display.title}`

  document.getElementById('display').append(itemElem)

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

