var express = require('express'),
    app = express(),
    port= 3000,
    bodyParser = require('body-parser');

var todoRoutes = require('./routes/todo')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.get('/', (req,res) => {
    res.send("HELLO FROM THE ROOT ROUTE"); 
    //res.json({message:"HI THERE FROM EXPRESS!!!"})
})
app.use('/api/todos', todoRoutes)

app.listen(port, () => {
    console.log(`APP IS RUNNING ON PORT ${port}`)
 
})