const {Router} = require('express');
const route = Router();

route.post('/send-mensaje',(request,respuesta) =>{
console.log(request.body);
respuesta.send('received');
});




module.exports = route;