import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Post from 'App/Models/Post'
import Comment from 'App/Models/Comment'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        "email": "john@gmail.com",
        "username": "user1",
        "first_name": "John",
        "last_name": "Smith",
        "avatar_url": "https://example.com/avatar1.jpg",
        "is_admin": false,
        "is_active": true,
        "cellphone": "555-123-4567",
        "password": "password123"
     },
     {
      "email": "jane@yahoo.com",
      "username": "user2",
      "first_name": "Jane",
      "last_name": "Doe",
      "avatar_url": "https://example.com/avatar2.jpg",
      "is_admin": true,
      "is_active": true,
      "cellphone": "555-987-6543",
      "password": "secret456"
   },
   {
    "email": "david@hotmail.com",
    "username": "user3",
    "first_name": "David",
    "last_name": "Johnson",
    "avatar_url": "https://example.com/avatar3.jpg",
    "is_admin": false,
    "is_active": true,
    "cellphone": "555-555-5555",
    "password": "mypass789"
 }, 
 {
  "email": "emily@gmail.com",
  "username": "user4",
  "first_name": "Emily",
  "last_name": "Brown",
  "avatar_url": "https://example.com/avatar4.jpg",
  "is_admin": true,
  "is_active": false,
  "cellphone": "555-111-2222",
  "password": "letmein2021"
},
{
  "email": "michael@yahoo.com",
  "username": "user5",
  "first_name": "Michael",
  "last_name": "White",
  "avatar_url": "https://example.com/avatar5.jpg",
  "is_admin": false,
  "is_active": true,
  "cellphone": "555-888-7777",
  "password": "p@ssw0rd"
},
{
  "email": "sarah@hotmail.com",
  "username": "user6",
  "first_name": "Sarah",
  "last_name": "Taylor",
  "avatar_url": "https://example.com/avatar6.jpg",
  "is_admin": false,
  "is_active": true,
  "cellphone": "555-999-3333",
  "password": "1234abcd"
},
{
  "email": "james@gmail.com",
  "username": "user7",
  "first_name": "James",
  "last_name": "Wilson",
  "avatar_url": "https://example.com/avatar7.jpg",
  "is_admin": false,
  "is_active": true,
  "cellphone": "555-444-8888",
  "password": "newuser2023"
},
{
  "email": "maria@yahoo.com",
  "username": "user8",
  "first_name": "Maria",
  "last_name": "Garcia",
  "avatar_url": "https://example.com/avatar8.jpg",
  "is_admin": true,
  "is_active": true,
  "cellphone": "555-222-1111",
  "password": "passw0rd!"
},
{
  "email": "robert@hotmail.com",
  "username": "user9",
  "first_name": "Robert",
  "last_name": "Anderson",
  "avatar_url": "https://example.com/avatar9.jpg",
  "is_admin": false,
  "is_active": true,
  "cellphone": "555-777-9999",
  "password": "mySecretPass"
},
{
  "email": "laura@gmail.com",
  "username": "user10",
  "first_name": "Laura",
  "last_name": "Thomas",
  "avatar_url": "https://example.com/avatar10.jpg",
  "is_admin": false,
  "is_active": true,
  "cellphone": "555-666-5555",
  "password": "testing123"
},
   
    ])
    await Post.createMany([
      {
        user_id: 4,
        title: 'Mi viaje a París',
        content: 'Recientemente visité París y quedé asombrado por la Torre Eiffel y el Louvre. ¡Una experiencia increíble!',
        is_published: true,
      },
      {
        user_id: 5,
        title: 'Recetas de cocina francesa',
        content: 'Explorando la deliciosa cocina francesa con recetas tradicionales como coq au vin y crème brûlée.',
        is_published: true,
      },
      {
        user_id: 6,
        is_published: true,
        title: 'Consejos para aprender un nuevo idioma',
        content: 'Compartiendo algunos consejos útiles para aprender un nuevo idioma, como practicar a diario y usar aplicaciones de aprendizaje.',
      },
      {
        user_id: 7,
        title: 'Desarrollo web con AdonisJS',
        content: 'Explorando AdonisJS para el desarrollo de aplicaciones web. ¡Una herramienta poderosa para construir aplicaciones!',
        is_published: true,

      },
      {
        user_id: 8,
        title: 'Los mejores destinos para hacer senderismo',
        content: 'Descubriendo algunos de los mejores destinos para hacer senderismo, como el Gran Cañón y los Alpes suizos.',
        is_published: true,
      },
      {
        user_id: 9,
        title: 'Consejos para mantenerse en forma',
        content: 'Compartiendo consejos para mantenerse en forma, incluyendo ejercicios, dieta equilibrada y descanso adecuado.',
        is_published: true,
      },
    ])

    await Comment.createMany([
      {
        user_id: 4,
        post_id: 1,
        content: '¡Gran artículo! Me encantó la forma en que abordaste el tema.',
        is_published: true,
      },
      {
        user_id: 5,
        post_id: 2,
        content: 'Estoy de acuerdo contigo. Este es un tema muy importante en la actualidad.',
        is_published: true,
      },
      {
        user_id: 6,
        post_id: 3,
        content: '¿Alguien ha probado la última versión de esta aplicación? Me gustaría saber sus opiniones.',
        is_published: true,
      },
      {
        user_id: 7,
        post_id: 4,
        content: 'Excelente trabajo. Tus esfuerzos son evidentes en este artículo.',
        is_published: true,
      },
      {
        user_id: 8,
        post_id: 5,
        content: 'Este lugar es impresionante. Las vistas son increíbles.',
        is_published: true,
      },
      {
        user_id: 9,
        post_id: 6,
        content: 'Necesito recomendaciones de libros para leer. ¿Alguna sugerencia?',
        is_published: true,
      },
    ])
  }
}
