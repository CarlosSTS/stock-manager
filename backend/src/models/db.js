const Sequelize = require('sequelize');

const sequelize = new Sequelize('stockManager', 'carlos', 'c1a2r3s4#A', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate().then(function () {
  console.log('Conexão realizada com sucesso!')
}).catch(function () {
  console.log('Erro: Conexão não realizada')

});

module.exports = sequelize;