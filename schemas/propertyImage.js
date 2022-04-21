export default {
  name: 'propertyImage',
  title: 'Propert Image',
  type: 'image',
  fields: [
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
  ],
  options: {
    hotspot: true
  }
}