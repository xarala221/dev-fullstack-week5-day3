const express = require('express')
const path = require('path')
const { pool } = require('./config/pool')

const app = express()

app.set('view engine', 'ejs')
// app.set('views', __dirname + '/views')

app.set('views', path.join(__dirname, 'views'))

app.get('/', function (req, res) {
  const sql = 'SELECT * FROM public."Contacts"'
  pool.query(sql, function (err, resultats) {
    if (err) {
      return console.error(err.message)
    }
    const data = { title: 'Gestion de contacte', contacts: resultats.rows }
    res.render('index', { data })
  })

  /***
   *
   * {
    title: 'Gestion de contacte',
    contacts: [
      { id: 1, fullName: 'Ousseynou', phone: '763772260' },
      { id: 2, fullName: 'Modou', phone: '763772260' },
      { id: 3, fullName: 'King Kong', phone: '763772260' },
    ],
  }
   */
})

app.listen(3000, function () {
  console.log('Le serveur est demarre au http://localhost:3000')
})
