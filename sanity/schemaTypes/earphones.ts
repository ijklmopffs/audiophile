import {defineField, defineType} from 'sanity'

export const earphones = defineType({
  name: 'earphones',
  title: 'Earphones',
  type: 'document',
  fields: [
    {
      name: 'product',
      type: 'image',
    },
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'details',
      type: 'string',
    },
    {
      name: 'price',
      type: 'number',
    },
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
    }),
    {
      name: 'features',
      type: 'string',
    },
    {
      name: 'items',
      type: 'string',
    },
    {
      name: 'displayOne',
      type: 'image',
    },
    {
      name: 'displayTwo',
      type: 'image',
    },
    {
      name: 'displayThree',
      type: 'image',
    },
  ],
})
