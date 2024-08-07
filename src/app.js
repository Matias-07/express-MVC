let express = require('express'); 
let rutasProductos = require('./routes/productos.js');
let rutasMain = require ('./routes/main.js')    


let app = express(); 

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/../public'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.listen(3000, () => console.log('el servidor funciona!'));

app.use('/productos',rutasProductos); 
app.use('/', rutasMain);
