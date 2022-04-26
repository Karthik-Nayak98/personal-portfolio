const skills = {
  name: 'skills',
  type: 'document',
  title: 'Skills',
  fields: [
    {
      name: 'skill',
      type: 'string',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
  ],
}

export default skills
