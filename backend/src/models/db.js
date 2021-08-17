const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'sqlite',
  storage: './src/models/db.sqlite'
});

sequelize.authenticate().then(function () {
  console.log('Conexão realizada com sucesso!')
}).catch(function () {
  console.log('Erro: Conexão não realizada')

});

module.exports = sequelize;