import { string } from 'prop-types';

const author = {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      name: 'Name',
      type: 'string',
    },
    {
      name: 'Tagline',
      type: 'string',
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
};

export default author;
