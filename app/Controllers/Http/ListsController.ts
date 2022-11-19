import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import List from '../../Models/List'

export default class ListsController {
  async index() {
    const lists = await List.all()
    const listsJSON = lists.map((list) => list.serialize())

    return {
      message: 'All Lists',
      data: listsJSON,
    }
  }

  async store({ request }) {
    const { title } = request.body()
    const list = new List()

    await list.fill({ title }).save()
    return {
      message: 'Create List',
      data: '',
    }
  }
  async show({ request }: HttpContextContract) {
    const id = request.param('id')

    const list = await List.findOrFail(id)
    return {
      message: 'Success',
      data: list,
    }
  }
  async update({ request }: HttpContextContract) {
    const id = request.param('id')
    const list = await List.findOrFail(id)
    await list.merge(request.body()).save()

    return {
      message: 'Update List',
      data: '',
    }
  }
  async destroy({ request }) {
    const id = request.param('id')
    const list = await List.findOrFail(id)
    await list.delete()

    return
  }
}
