let array = [2,3,5,1];

array.forEach(element => {
    console.log('Elemento: ' + element);
    
});

const http = require('http');

http.createServer(
    function(req, res){
        res.writeHead(200, {'Content-Type':'text/plain; charset=utf8'});
        res.write('Respuesta desde HTTP á´eŕŕŕ´r');
        res.end();
    }
).listen(3000)