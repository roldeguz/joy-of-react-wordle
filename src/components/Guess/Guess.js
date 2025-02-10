import React from "react"

import { range } from "../../utils"

function Guess({ value, result }) {
  return (
    <p className="guess">
      {range(5).map(index => {
        const className = result ? `cell ${result[index].status}` : `cell`
        return (
          <span key={index} className={className}>
            {value ? value[index] : undefined}
          </span>
        )
      })}
    </p>
  )
}

export default Guess
