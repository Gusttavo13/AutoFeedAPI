const mysql = require('./mysql');

const Noticias = mysql.sequelize.define('noticias', {
    title: {
        type: mysql.Sequelize.STRING
    },
    news: {
        type: mysql.Sequelize.STRING
    }
});
//Criar tabela Noticias
//Noticias.sync({force: true});
//Noticias.create({
//    title: "Projeto Mostra do Conhecimento",
//    news: "Criado por alunos do 2B1"
//})
//Noticias.create({
//    title: "Adoção de Pets na pandemia",
//    news: `Segundo a pesquisa Radar Pet 2021, apresentada pela Comissão de Animais de Companhia (COMAC), 30% dos pets foram adquiridos durante o período de isolamento social e 23% dos tutores o fizeram pela primeira vez. Os dados revelam que, no período, a adoção superou a compra....`
//})

module.exports = Noticias;