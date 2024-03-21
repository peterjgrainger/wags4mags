export default {
  name: 'terms',
  title: 'Terms',
  type: 'document',
  fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string'
      },
      {
        title: 'Term',
        name: 'term',
        type: 'array',
        of: [{type: 'string'}]
      } 
    ]
}