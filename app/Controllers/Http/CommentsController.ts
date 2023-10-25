import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Comment from 'App/Models/Comment';


export default class CommentsController {
  public async index({ response }: HttpContextContract) {
    try {
      const comments = await Comment.all();
      return response.status(200).json({ msg: "Comments:", comments });
    } catch (error) {
      return response.status(400).json({ message: "Failed to get comments", error: error.message });
    }
  }


    public async store({request, response}: HttpContextContract){

        try {
        const data = request.only(['content', 'is_published', 'user_id']);
        const commentStore = await Comment.create(data);

        return response.status(200).json({msg: "Message:", commentStore})
            
        } catch (error) {
            return response.status(400).json({ message: "Failed to create comment", error: error.message })    
        }
        
    }

    public async delete(params, {response}: HttpContextContract){
       try {
        const ifExists = await Comment.find(params.id);
        if(!ifExists){
            return response.status(404).json({
                msg: "comment not found"
            })
        }
        await ifExists.delete();
        return response.status(200).json({
            msg: "comment deleted"
        })
       } catch (error) {
              return response.status(400).json({ message: "Failed to delete comment", error: error.message })
       }
    }

    public async update(request, {response}: HttpContextContract){
        try {
            const data = request.only(['content', 'is_published', 'user_id']);

            const ifExists = await Comment.find(request.id)
    
            if(!ifExists){
                return response.status(404).json({
                    msg: "comment not found"
                })
            }
    
            ifExists.merge(data);
            return response.status(200).json({
                msg: "comment updated",
                ifExists
            })
        } catch (error) {
            return response.status(400).json({ message: "Failed to update comment", error: error.message })
        }
    }
}
