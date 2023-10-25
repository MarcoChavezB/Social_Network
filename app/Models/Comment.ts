import { DateTime } from 'luxon'
import { BaseModel,belongsTo,BelongsTo, column} from '@ioc:Adonis/Lucid/Orm'
import Post from 'App/Models/Post';
import User from 'App/Models/User'


export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public content: string

  @column()
  public is_published: boolean

  @column()
  public user_id: number

  @column()
  public post_id: number

  @belongsTo(() => User, {
    foreignKey: 'user_id' 
  })
  public user: BelongsTo<typeof User>

  @belongsTo(() => Post, {
    foreignKey: 'post_id' 
  })
  public post: BelongsTo<typeof Post>

  

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
