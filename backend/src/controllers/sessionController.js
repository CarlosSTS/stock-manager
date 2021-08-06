const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const User = require('../models/Users');

module.exports = {

  async create(request, response) {
    const { email, password } = request.body;

    const user = await User.findOne({
      attributes: ['id', 'name', 'email','password'],
      where: {
        email,
      }
    });

    if (!user) {
      return response.status(400).json({
        error: true,
        message: 'Incorrect e-mail or password'
      })
    }

    if (!(await bcryptjs.compare(password, user.password))) {
      return response.status(400).json({
        error: true,
        message: 'Incorrect e-mail or password'
      })
    }
    var token = jwt.sign({id: user.id}, process.env.SECRET,{
      expiresIn: '1d'
    })

    return response.json({
      token,
      user
    })
  },
}