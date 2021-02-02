var socket = io();

socket.on('connect', function() {
    console.log('death grips is online')
})

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor')
})

socket.emit('enviarMensaje', {
    usuario: 'Anuel',
    mensaje: 'Real hasta la muerte'
}, function(resp) {
    console.log('respuesta server', resp);
})

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);

})