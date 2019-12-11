let array = [2,3,5,1];

array.forEach(element => {
    console.log('Elemento: ' + element);
    
});
/* 
const http = require('http');

http.createServer(
    function(req, res){
        res.writeHead(200, {'Content-Type':'text/plain; charset=utf8'});
        res.write('Respuesta desde HTTP á´eŕŕŕ´r');
        res.end();
    }
).listen(3000) */

const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send('<h1>Hola Mundo!</h1>');
});

app.get('/about', (req,res) => {
    res.send('<h1>Esta pagina es el About!</h1>');
});


app.listen(3000);