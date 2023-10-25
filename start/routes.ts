import Route from '@ioc:Adonis/Core/Route'
import UsersController from 'App/Models/User'
import PostsController from 'App/Models/Post'
import CommentsController from 'App/Models/Comment'


Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/users/get', 'UsersController.index')
Route.get('/users/get/info/:id', 'UsersController.getUserInfo')
Route.get('/users/get/all', 'UsersController.getAllInfo')



Route.any('/users/return/method/:id?', 'UsersController.actionUser')
          .where('id', /^[0-9]+$/)


// get = retornar usuario
// post = crear usuario
// put = actualizar usuario 
// delete = cambiar isActive a false