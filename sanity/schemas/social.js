const social = {
  name: 'social',
  type: 'document',
  title: 'Social',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'social_url',
      type: 'url',
      title: 'Social Media URL',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
    {
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
export default social
