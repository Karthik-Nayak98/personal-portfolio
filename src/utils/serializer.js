import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import React from 'react';
import { urlFor } from './client';

const ImageRenderer = (props) => {
  return <img src={urlFor(props.node.asset._ref)} alt='' />;
};

const CodeRenderer = ({ node = {} }) => {
  const { language, code } = node;
  if (!code) return null;
  return (
    <pre className=''>
      <SyntaxHighlighter
        useInlineStyles={false}
        className='my-2 w-full rounded bg-transparent text-sm md:w-96 md:text-base'
        wrapLines={true}
        language={language || 'text'}>
        {code}
      </SyntaxHighlighter>
    </pre>
  );
};

const serializer = {
  types: {
    code: CodeRenderer,
    image: ImageRenderer,
  },
};

export default serializer;
