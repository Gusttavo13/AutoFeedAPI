const mysql = require('./mysql');

const Alimentadores = mysql.sequelize.define('alimentadores', {
    pet: {
        type: mysql.Sequelize.STRING
    },
    link: {
        type: mysql.Sequelize.STRING
    },
    time: {
        type: mysql.Sequelize.INTEGER
    },
    left: {
        type: mysql.Sequelize.INTEGER
    },
    repeat: {
        type: mysql.Sequelize.BOOLEAN,
        defaultValue: true
    }
});


//Alimentadores.create({
//    pet: "DogTest",
//    link: null,
//    time: 300,
//    left: 300,
//    repeat: true
//})
//Criar tabela Alimentadores
//Alimentadores.sync({force: true});

module.exports = Alimentadores;