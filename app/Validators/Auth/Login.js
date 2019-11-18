'use strict'

class Login {
  get rules () {
    return {
        email: 'required|email',
        password: 'required'
    }
  }

  get messages() {
    return {
      'email.required': 'Informe o seu E-mail!',
      'email.email': 'E-mail inválido!',
      'password.required': 'Informe a sua Senha!'
    }
  }
}

module.exports = Login
