import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import UserValidator from 'App/Validators/UserValidator'

export default class UsersController {
    public async index({response}: HttpContextContract){
        const users = await User.all()
        return response.status(200).json({msg: "users:", users})
    }

    

    public async getUserInfo({ params, response }) {
        try {
          const userId = params.id;
          const user = await User.findOrFail(userId);

          if(!user){
            return response.status(404).json({ message: "User not found" });    
          }
          
          const posts = await user.related('posts').query();
          const comments = await user.related('comments').query();
          return response.status(200).json({ user, posts, comments });


        } catch (error) {
          return response.status(400).json({ message: "Failed to fetch user data", error: error.message });
        }
      }



      public async getAllInfo({ response }: HttpContextContract) {
        try {
          const users = await User.all();
      
          const usersWithPostsAndComments = await Promise.all(
            users.map(async (user) => {
              await user.load('posts', (query) => {
                query.preload('comments');
              });
      
            })
          );
          return response.status(200).json(usersWithPostsAndComments);
       } catch (error) {
          return response
            .status(400)
            .json({ message: "Failed to fetch user data", error: error.message });
        }
      }


      public async actionUser({request, params , response}:HttpContextContract){
        
        const method = request.method();  
        const data = request.all()
        try {
            switch (method) {

              case 'GET':
                // * GET /users/return/method/:id? 
                    if(params.id){
                      const user = await User.findOrFail(params.id)
                      return response.status(200).json({msg:"User found", user})
                    }

                    if(!params.id){
                      const users = await User.all()        
                      return response.status(404).json({msg:"User found", users})
                    }
                break;

              case 'POST':
                
                    await request.validate(UserValidator)
                    
                    const user = await User.create(data)
                    return response.status(201).json({msg:"User created", user})
                break;

              case 'PUT':
                    const userUpdate = await User.findOrFail(data.id)
                    userUpdate.merge(data)
                    userUpdate.save()
                    return response.status(200).json({msg:"User updated", userUpdate})
                    
                break;
              case 'DELETE':
                    const userDelete = await User.findOrFail(params.id)
                    userDelete.is_active = false
                    userDelete.save()

                    return response.status(200).json({msg:"User deleted", userDelete})
                break;

              default:
                response.status(400).json({msg:"Method not found"});
                break;
            }
        
          } catch (error) {
            return response.status(500).json({msg: "error", error, method: method})
          }
      }
}




