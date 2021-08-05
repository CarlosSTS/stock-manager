const bcryptjs = require('bcryptjs')
const User = require('../models/Users');

module.exports = {

  async create(request, response) {
    let { name, email, password } = request.body;

    password = await bcryptjs.hash(password, 8)

    await User.create({
      name,
      email,
      password

    }).then((User) => {
      return response.json({
        error: false,
        User
      });
    }).catch(() => {
      return response.status(400).json({
        error: true,
        message: 'User not created'
      })
    })
  },

  async index(request, response) {
    await User.findAll({
      attributes: ['id', 'name', 'email'],
      order: [['id', 'DESC']]
    })
      .then((User) => {
        return response.json({
          error: false,
          User
        });
      }).catch(() => {
        return response.status(400).json({
          error: true,
          message: 'Users not exists or not found'
        })
      })
  },

  async show(request, response) {
    const { id } = request.params;

    await User.findByPk(id)
      .then((User) => {
        return response.json({
          error: false,
          User
        });
      }).catch(() => {
        return response.status(400).json({
          error: true,
          message: 'User not found'
        })
      })
  },

  async edit(request, response) {
    let { name, email, password } = request.body;
    const { id } = request.body;

    password = await bcryptjs.hash(password, 8)

    await User.update({name, email, password}, {
      where: { id }
    })
      .then(() => {
        return response.json({
          error: false,
          message: 'User edited successfully!'
        });
      }).catch(() => {
        return response.status(400).json({
          error: true,
          message: 'Unedited User'
        })
      })
  },

  async delete(request, response) {
    const { id } = request.params;

    await User.destroy({
      where: { id }
    })
      .then(() => {
        return response.json({
          error: false,
          message: 'Successfully deleted User!'
        });
      }).catch(() => {
        return response.status(400).json({
          error: true,
          message: 'User not deleted'
        })
      })
  },
};