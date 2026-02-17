const express = require('express');

const app = express();


app.use('/users', (req, res, next) => {
    console.log('Add product')
    res.send('<h1>Add Product</h1>')
})


app.use('/', (req, res, next) => {
    console.log('Main')
    res.send('<h1>Main page</h1>')
})

app.listen(8080)