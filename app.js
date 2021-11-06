const express = require('express');
const News = require('./models/news');
const Alimentadores = require('./models/alimentadores');
const mysql = require('./models/mysql');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function updateTime(){
    Alimentadores.findAndCountAll().then(function (pet){
        var i = 0
        while (i < pet.count){
            if(pet.rows[i].left <= 0){
                Alimentadores.update(
                    { left: pet.rows[i].time },
                    { where: { id: i } }
                )
            }else{
                Alimentadores.update(
                    { left: --pet.rows[i].left },
                    { where: { id: i } }
                )
            }
            console.log("Pet " + pet.rows[i].pet)
            console.log("Left " + pet.rows[i].left)
            console.log("----------------")
            i++
        }
    }).catch(function (err) {
        res.json(err);
    }); 
}
//setInterval(updateTime,1000)
//updateTime()
app.get('/', (req, res) => {
      
    res.send('<h1>Projeto da Mostra do Conhecimento do 2B1</h1>');

})
//lista a versão (teste somente)
app.get('/version', (req, res) => {
    
    res.send("<h1>Server running: 13.0</h1><h2>Author: Gusttavo Sousa</h2>");

})
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//lista todas as noticias
app.get('/randomnews', (req, res) => {
    News.findAndCountAll().then(function (noticias){
        res.json(noticias.rows[getRandomIntInclusive(0, noticias.count)]);
    }).catch(function (err) {
        res.json(err);
    });
    
})

//lista todas as noticias
app.get('/news', (req, res) => {
    News.findAll().then(function (noticias){
        res.json(noticias);
    }).catch(function (err) {
        res.json(err);
    });
    
})
//lista uma noticia parametros id
app.get('/news/:id', (req, res) => {

    News.findAll({where: { "id": req.params.id}}).then(function (obj){
        res.send(obj)
    })
})

//adiciona um alimentador
app.get('/addpet/:pet', (req, res) => {

    Alimentadores.create({
        cat: req.params.pet
    }).then(function(){
        res.send('Alimentador registrado com sucesso!')
    })

})

//lista um alimentador parametros id e nome do gato
app.get('/pets/:id/:pet', (req, res) => {

    Alimentadores.findAll({where: { "id": req.params.id, "pet": req.params.pet}}).then(function (obj){
        res.send(obj)
    })
})
//lista todos os alimentadores
app.get('/pets', (req, res) => {

    Alimentadores.findAll().then(function (obj){
        res.send(obj)
    })

})

//talvez não vou utilizar
//adiciona uma noticia
app.get('/addnews/:title/:news', (req, res) => {
    
    News.create({ title: req.params.title, news: req.params.news}).then(function(){
        res.send(`Notícia sobre ${req.params.title} criada com sucesso!`);
    }).catch(function(){
        res.send(`Falha ao criar a notícia - ${req.params.title}!`);
    })

    
})

const PORT = process.env.PORT || 8081
//abre a porta web do servidor
app.listen(PORT, function () {
    console.log('Server running in http://127.0.0.1:'+PORT);
});

//https://127.0.0.1:PORT
//https://localhost:PORT