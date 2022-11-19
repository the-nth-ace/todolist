import { test } from '@japa/runner'

test('get all lists', async ({ client }) => {
  const response = await client.get('/')

  response.assertStatus(200)
  response.assertBodyContains({
    message: 'All Lists',
    data: [],
  })
})
