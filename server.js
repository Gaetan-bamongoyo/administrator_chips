const express = require('express')
const cors = require('cors')
// const sequelize = require('./sequelize/connector')

// sequelize.sync().then(()=> console.log('logging'))

const app = express()

var corOption = {
    origin: 'https://localhost:8081'
}

app.use(cors(corOption))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// route
const routersession  = require('./routes/sessionR')
const routedepense = require('./routes/depenseR')
const routemotif = require('./routes/motifR')
const routervente = require('./routes/venteR')
app.use('/admin/session', routersession)
app.use('/admin/depense', routedepense)
app.use('/admin/motif', routemotif)
app.use('/admin/ventepersonnel', routervente)

// test api
app.get('/', (req, res)=>{
    res.json({ message: 'hello from api' })
})

// port
const PORT = process.env.PORT || 8080

// server
app.listen(PORT, ()=>{
    console.log('server is running on port')
})