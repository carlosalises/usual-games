import React from 'react'

export default function Game({title, subtitle=" ", children}) {
  return (
    <section className="game">
        <h3>{title}</h3>
        <h5>{subtitle}</h5>
        {children}
    </section>
  )
}
