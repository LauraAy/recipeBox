const express = require('express')
const { join } = require('path')
const app = express()
const { Region } = require('./models')



app.use(express.static(join(__dirname,'public')))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(require('./routes'))

app.get('/',(req,res) =>{
    res.render('')
})


require('./config').sync()
.then(() => app.listen(3000))
.catch(e => console.error(e))