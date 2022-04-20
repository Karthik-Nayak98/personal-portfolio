import React from 'react'
import Header from './header'

function Container(props) {
  return (
    <main className='container mx-auto max-w-4xl'>
      <Header title={props.title} />
      {props.children}
    </main>
  )
}

export default Container
