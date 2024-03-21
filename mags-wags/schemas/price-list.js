export default {
  name: 'price',
  type: 'document',
  title: 'Price List',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description'
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{type: 'service'}]

    }
  ]
}