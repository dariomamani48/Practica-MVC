let express = require('express');
let app = express();
let indexRouter = require('./routes/indexRouter')
let indexRouter = require('./routes/productsRouter')

app.use(express.static('public'));

app.listen(3000,()=>{
    console.log('Servidor Levantado');
})


app.use('/', indexRouter)
app.use('/produtcs', indexRouter)