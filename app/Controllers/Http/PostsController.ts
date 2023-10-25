import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
    public async index({response}: HttpContextContract){
        const posts = await Post.all()
        return response.status(200).json({msg: "posts:", posts})
    }    
}
