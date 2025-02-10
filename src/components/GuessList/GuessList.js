import React from "react"

import Guess from "../Guess/Guess"

import { range } from "../../utils"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

function GuessList({ guessList }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map(index => {
        const value = guessList[index] ? guessList[index].value : undefined
        const result = guessList[index] ? guessList[index].result : undefined

        return <Guess key={index} value={value} result={result} />
      })}
    </div>
  )
}

export default GuessList
