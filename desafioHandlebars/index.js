const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql2')
const app = express()

//CONFIG PARTIALS E HANDLEBARS
const hbs = exphbs.create({
    partialsDir: ["views/partials"],
});
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.use(
    express.urlencoded({
      extended: true,
    }),
  )
  app.use(express.json())

//CONFIG CSS
app.use(express.static("public"));

//CONEXÃO BANCO DE DADOS
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'thayanne',
    database: 'orders',
  })  
conn.connect(function (err) {
    if (err) {
      console.log(err)
    } else {  
    console.log('Conectado ao MySQL!')
    }
})



//ROTAS

//PAGINA INICIAL
app.get('/', function(req, res) {
    res.render('home')
})

//PAGINA LISTA DE PEDIDOS
app.get('/orders', function (req, res) {
    const order = req.params.number
    const query = `SELECT number FROM especificorder`
    conn.query(query, function (err, data){
      if (err) {
        console.log(err)     
    }
      //CLICANDO E ABRINDO PEDIDO     
     
      const especificorder = data
      console.log(data)
      res.render('orders', {especificorder})
    })    
})

//PEDIDOS INDIVIDUALIZADOS
app.get('/order/:number', function (req, res) {
    const number = req.params.number
    const query = `SELECT * FROM especificorder WHERE number = ${number}`
    conn.query(query, function (error, data) {
      if (error) {
        console.log(error)
      }
      const especificorder = data[0]
      console.log(data[0])
      res.render('order', {especificorder})
    })    
})


app.listen(5000)


