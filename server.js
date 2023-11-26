const express = require('express')
const mongoose = require('mongoose')
const uri = 'mongodb+srv://krzysztofkropopek:fXuius3yLuVu2gGF@pawelposting.xcuhi6f.mongodb.net/?retryWrites=true&w=majority'
const routerMiejsc = require('./routes/miejsca')
const app = express()

async function connect()
{
    try {
        await mongoose.connect(uri)
        console.log("Połączono z bazą danych!")
    }
    catch (error)
    {
        console.error(error)
    }
}

connect();

app.listen(6969, () =>
{
    console.log("Serwer został pomyślnie włączony.")
})

app.set('view engine', 'ejs')

app.use('/miejsca', routerMiejsc)

app.get('/', (req, res) =>
{
res.render('index')
})