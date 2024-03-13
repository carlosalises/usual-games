import React from 'react'

export default function Card({card, index, onClickCard}) {

  const itemClass = card.status ? " active " + card.status : "";

  return (
    <div className={"card" + itemClass}onClick={() => onClickCard(index)}>
        <span>{card.id}</span>
    </div>
  )
}
