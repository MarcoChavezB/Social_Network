import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
    email: schema.string({}, [
      rules.required(),
      rules.email(),
      rules.unique({ table: 'users', column: 'email' }) 
    ]),
    username: schema.string({}, [
      rules.required(),
      rules.minLength(6)
    ]),
    password: schema.string({}, [
      rules.required(),
      rules.minLength(6)
    ])
  });

  public messages: CustomMessages = {
    'email.required': 'El campo de correo electrónico es obligatorio.',
    'email.email': 'Por favor, ingresa una dirección de correo electrónico válida.',
    'email.unique': 'El correo electrónico ya está en uso.',
    'username.required': 'El campo de nombre de usuario es obligatorio.',
    'username.min': 'El nombre de usuario debe tener al menos 6 caracteres.', 
    'password.required': 'El campo de contraseña es obligatorio.',
    'password.min': 'La contraseña debe tener al menos 6 caracteres.', 

  }
}
