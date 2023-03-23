const http=require('http')
fs = require('fs')


http.createServer(function(request,response){

    response.writeHead(200, {'Content-Type':'text/html'})

    switch(request.url){
        case '/':
            page = 'index.html'
            break
        case '/nosotros.html':
            page = 'nosotros.html'
            break
        case '/nosotros.html':
            page = 'nosotros.html'
            break
        case '/catalogo.html':
            page = 'catalogo.html'
            break
        case '/servicios.html':
            page = 'servicios.html'
            break
        case '/contacto.html':
            page = 'contacto.html'
            break
        default:
            page = 'index.html'
            break
    }

    fs.readFile('./'+page, function(error,html){
        response.write(html)
        response.end()
    })
    
}).listen(8080);