const jwt = require('jsonwebtoken');
const {promisify} = require('util');
require('dotenv').config();

module.exports = {
    eAdmin: async function (request, response, next){
        const authHeader = request.headers.authorization;
        if(!authHeader){
            return response.status(400).json({
                erro: true,
                mensage: "Erro: Necessário realizar o login para acessar a página!"
            });
        }
        const [, token] = authHeader.split(' ');
    
        if(!token){
            return response.status(400).json({
                erro: true,
                mensage: "Erro: Necessário realizar o login para acessar a página!"
            });
        }
    
        try{
            const decoded = await promisify(jwt.verify)(token, process.env.SECRET);
            request.userId = decoded.id;
            return next();
        }catch(err){
            return response.status(400).json({
                erro: true,
                mensage: "Erro: Necessário realizar o login para acessar a página!"
            });
        }
    }
    
}