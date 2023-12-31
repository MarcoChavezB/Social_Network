import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Post from 'App/Models/Post'
import Comment from 'App/Models/Comment'
import UserValidator from 'App/Validators/UserValidator'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column()
  public username: string

  @column()
  public first_name: string

  @column()
  public last_name: string

  @column()
  public avatar_url: string

  @column()
  public is_admin: boolean

  @column()
  public is_active: boolean

  @column()
  public cellphone: string

  @column()
  public password: string

  @column()
  public rememberMeToken: string | null

  @hasMany(() => Post, {
    foreignKey: 'user_id' 
  })
  public posts: HasMany<typeof Post>

  @hasMany(() => Comment, {
    foreignKey: 'user_id' 
  })
  public comments: HasMany<typeof Comment>


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }




}
