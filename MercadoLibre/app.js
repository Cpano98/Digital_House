//Levantamos servidor
const express = require('express');
const app = express();

//Rutas absolutas
const path = require('path');

//MainPage
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname,'/views/index.html'));
});

//Página de error
app.get('/404', (req, res) => {
    res.send("Error. La página solicitada no esta disponible"); 
});


//Respuesta de nuestro servidor.
app.listen(3000, () =>
    console.log("Respuesta del servidor exitosa. Servidor arriba :D")
);