import { DateTime } from 'luxon'
import { BaseModel, hasMany, column, HasMany} from '@ioc:Adonis/Lucid/Orm'
import Comment from 'App/Models/Comment'


export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public content: string

  @column()
  public is_published: boolean 

  @column()
  public user_id: number 

  @hasMany(() => Comment, {
    foreignKey: 'post_id' // Llave foránea en la tabla Comment
  })
  public comments: HasMany<typeof Comment>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime  
}
