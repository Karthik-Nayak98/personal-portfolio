const projects = {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      title: 'Project Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    { name: 'summary', type: 'string', title: 'Summary' },
    {
      name: 'banner',
      title: 'Banner',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'date',
      options: {
        dateFormat: 'MMMM, YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },

    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'github_url',
      type: 'url',
      title: 'Github URL',
    },
    {
      name: 'demo_url',
      type: 'url',
      title: 'Demo URL',
    },
  ],
}

export default projects
