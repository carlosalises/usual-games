import React from 'react'

export default function Square({mole, index, hitMole}) {

  const moleClass = mole.status ? " active " + mole.status : "";

  return (
    <div className='square'>
        <span className={"mole" + moleClass} onClick={() => {hitMole(index)}}>O</span>
    </div>
  )
}
