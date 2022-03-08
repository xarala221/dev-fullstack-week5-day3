const express = require('express')
const MongoClient = require('mongodb').MongoClient

const path = require('path')

const app = express()

app.set('view engine', 'ejs')
// app.set('views', __dirname + '/views')

app.set('views', path.join(__dirname, 'views'))

MongoClient.connect(
  'mongodb+srv://devfull:31Esr7LepEdSA7aU@cluster0.pnppc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  function (err, client) {
    if (err) {
      return console.error(err.message)
    }
    const db = client.db('testNosql')
    db.collection('contacts')
      .find()
      .toArray()
      .then(function (resultats) {
        app.get('/', function (req, res) {
          res.render('index', {
            title: 'Gestion contacte NoSQL',
            contacts: resultats,
          })
        })
      })
      .catch(function (error) {
        console.error(err.message)
      })

    app.listen(3000, function () {
      console.log('listening on 3000')
    })
  }
)
