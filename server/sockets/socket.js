const { io } = require('../server')

io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'brrrrrrrrrrrrrrrrr'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado')
    })

    //escuchar el cliente
    client.on('enviarMensaje', ({ usuario, mensaje }, callback) => {
        console.log(usuario + ' es ' + mensaje);

        client.broadcast.emit('enviarMensaje', data);

        /*         if (mensaje) {
                    callback({
                        resp: 'TODO BIEN'
                    })
                } else {
                    callback({
                        resp: 'TODO SALIO MAL!!!!'
                    })
                } */

    })
})