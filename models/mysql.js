const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
  })

//sequelize.authenticate().then(function(){
//    console.log('Banco de dados conectado com sucesso.');
//}).catch(function(error){
//    console.log('Falha ao conectar ao banco de dados. Error: ' + error);
//});

//Noticias.create({
//    title: "Adoção de animais aumenta na pandemia",
//    news: "ONGs e protetores dos animais afirmam que a procura por adoção de cães e gatos teve um aumento de até 50% nos primeiros meses de pandemia."
//})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}