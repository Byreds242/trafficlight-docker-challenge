const express = require('express');
const path = require('path');
const app = express();

let data = {};
let jokes = {
    0: "What do you get when two giraffes collide? A giraffic jam",
    1: "Why was the squirrel late for work? Traffic was NUTS",
    2: "I hate sitting in traffic, because I always get run over",
    3: "What is the difference between blondes and traffic signs? Some traffic signs say stop.",
    4: "What did one traffic light say to the other. Stop looking I am changing",
    5: "What do you call a group of cars playing instruments? A Traffic Jam",
    6: "What do cars eat on their toast? Traffic Jam.",
    7: "I love the sound of traffic. It's my jam",
    8: "Steve Winwood began his solo career in 1977. He would have started sooner, but he was stuck in traffic.",
    9: "I think traffic lights might have a crush on me. They always turn red when I’m around"
};

// Cambiar la ruta de vistas para que apunte a la raíz del proyecto
app.set('views', path.join(__dirname));  // Ahora apunta al directorio raíz
app.set('view engine', 'pug');

// Asignar ruta
app.get('/green', (req, res) => {
    let joke_number = getRandomInt(10);
    data["joke"] = jokes[joke_number];
    res.render('index', data);  
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Arrancar servidor
app.listen(5000, () => {
    console.log('App listening on port 5000');
});
