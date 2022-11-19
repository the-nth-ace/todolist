import Route from '@ioc:Adonis/Core/Route'
import 'App/Modules/TodoList/routes'

Route.get('/', async () => {
  return { hello: 'world' }
})
