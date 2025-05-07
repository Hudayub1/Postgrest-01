const express = require('express')
const app = express()
const path = require('path')
const Router = require('./Router/Route')
const PORT = 5000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))
app.use('/', Router)



app.listen(PORT, () => 
    console.log(`Server is listening on port ${PORT}`)
)
