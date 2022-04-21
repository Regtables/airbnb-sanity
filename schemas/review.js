export default {
  name: 'review',
  title: 'Review',
  type: 'object',
  fields: [
    {
      name: 'reviewDescription',
      title: 'Reivew Description',
      type: 'string'
    },
    {
      name: 'traveller',
      title: 'Traveller',
      type: 'traveller'
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'string',
      options: {
        list: [
          { title: '5 Stars', value: '5'},
          { title: '4 Stars', value: '4'},
          { title: '3 Stars', value: '3'},
          { title: '2 Stars', value: '2'},
          { title: '1 Star', value: '1'},
        ],
        layout: 'radio'
      },
    },
  ]
}