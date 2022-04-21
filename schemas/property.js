export default {
  name: 'property',
  title: 'Property',
  type: 'document',
  fieldsets: [
    {
      name: 'propertyInfo',
      title: 'Property Information'
    }
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'propertyInfo'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint'
    },
    {
      name: 'propertyType',
      title: 'Property Type',
      type: 'string',
      options: {
        list: [
          { title: 'House', value: 'house' },
          { title: 'Flat', value: 'flat' },
          { title: 'B & B', value: 'bedAndBreakfast' },
          { title: 'Boutique Hotel', value: 'boutiqueHotel' }
        ],
        layout: 'radio'
      }
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        { type: 'propertyImage'}
      ]
    },
    {
      name: 'pricePerNight',
      title: 'Price Per Night',
      type: 'number'
    },
    {
      name: 'beds',
      title: 'Beds',
      type: 'number'
    },
    {
      name: 'bedrooms',
      title: 'Bedrooms',
      type: 'number'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100
      }
    },
    {
      name: 'id',
      title: 'ID',
      type: 'number'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'host',
      title: 'Host',
      type: 'host'
    },
    {
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [
        {type: 'review'}
      ]
    },
  ]
}