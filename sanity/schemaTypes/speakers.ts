import {defineField, defineType} from 'sanity'

export const speakers = defineType({
  name: 'speakers',
  title: 'Speakers',
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
      name: 'id',
      type: 'string',
    },
    {
      name: 'featureOne',
      type: 'string',
    },
    {
      name: 'featureTwo',
      type: 'string',
    },
    {
      name: 'itemsOne',
      type: 'string',
    },
    {
      name: 'itemsTwo',
      type: 'string',
    },
    {
      name: 'itemsThree',
      type: 'string',
    },
    {
      name: 'itemsFour',
      type: 'string',
    },
    {
      name: 'itemsFive',
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
