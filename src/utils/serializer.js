import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import React from 'react'
import { urlFor } from './client'

const ImageRenderer = (props) => {
  return <img src={urlFor(props.node.asset._ref)} alt='' />
}

const LinkRenderer = (props) => {
  const { mark, children } = props
  return (
    <a href={mark.href} target={`${mark.blank}?'_blank':''`}>
      {children}
    </a>
  )
}

const CodeRenderer = ({ node = {} }) => {
  const { language, code } = node
  if (!code) return null
  return (
    <pre className='dark:border-light border-dark border bg-gray-300 dark:bg-gray-900'>
      <SyntaxHighlighter
        useInlineStyles={false}
        className='text-dark dark:text-light my-2 w-full rounded bg-gray-300 text-sm dark:bg-gray-900 md:text-base'
        wrapLines={true}
        language={language || 'text'}>
        {code}
      </SyntaxHighlighter>
    </pre>
  )
}

const serializer = {
  types: {
    code: CodeRenderer,
    image: ImageRenderer,
  },
  marks: {
    link: LinkRenderer,
  },
}

export default serializer
