import React from "react"
import { range } from "../../utils"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

function GuessList({ guessList }) {
  const isGuessListEmpty = guessList.length == 0

  return (
    <div className="guess-results">
      {isGuessListEmpty &&
        range(0, NUM_OF_GUESSES_ALLOWED).map(index => {
          return (
            <p key={index} className="guess">
              {range(0, 5).map(index => {
                return (
                  <span key={index} className="cell">
                    &nbsp;
                  </span>
                )
              })}
            </p>
          )
        })}
      {!isGuessListEmpty &&
        range(0, NUM_OF_GUESSES_ALLOWED).map(index => {
          const guess = typeof guessList[index] != "undefined" ? guessList[index]["guess"].split("") : []
          const result = typeof guessList[index] != "undefined" ? guessList[index]["result"] : []

          return (
            <p key={index} className="guess">
              {guess.length == 0 &&
                range(0, 5).map((char, index) => {
                  return (
                    <span key={index} className={"cell "}>
                      &nbsp;
                    </span>
                  )
                })}
              {guess.length > 0 &&
                guess.map((char, index) => {
                  return (
                    <span key={index} className={"cell " + result[index].status}>
                      {char}
                    </span>
                  )
                })}
            </p>
          )
        })}
    </div>
  )
}

export default GuessList
