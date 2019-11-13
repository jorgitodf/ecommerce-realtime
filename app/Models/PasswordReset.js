'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PasswordReset extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeCreate', async model => {
      model.token = await str_random(25)
      const expires_at = new Date()
      expires_at.setMinutes(expires_at.getMinutes() + (1440 * 5))
      model.expires_at = expires_at
    })
  }

  // formata os valores das Datas para o padrão do MySQL
  static get dates() {
    return ['created_at', 'updated_at', 'expires_at']
  }

}

module.exports = PasswordReset
