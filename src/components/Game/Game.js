import React, { useState } from "react"

import { sample } from "../../utils"
import { WORDS } from "../../data"
import { checkGuess } from "../../game-helpers"

import Banner from "../Banner/Banner"
import Guess from "../Guess/Guess"
import GuessList from "../GuessList/GuessList"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

// Pick a random word on every pageload.
//const answer = sample(WORDS)

// To make debugging easier, we'll log the solution in the console.
//console.info({ answer })

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS))
  console.log({ answer })
  const [guessList, setGuessList] = useState([])
  const [correct, setCorrect] = useState(false)
  const [gameFinished, setGameFinished] = useState(false)

  function addGuessList(guess) {
    const newGuess = {
      guess: guess,
      result: checkGuess(answer, guess)
    }
    const newGuessList = [...guessList, newGuess]
    setGuessList(newGuessList)

    setCorrect(answer == guess)
    setGameFinished(answer == guess || guessList.length + 1 == NUM_OF_GUESSES_ALLOWED)
  }

  function retryGame() {
    setAnswer(sample(WORDS))
    console.log({ answer })
    setGuessList([])

    setCorrect(false)
    setGameFinished(false)
  }

  return (
    <>
      {gameFinished && <Banner answer={answer} correct={correct} numTries={guessList.length} retryGame={retryGame} />}
      <GuessList guessList={guessList} />
      <Guess addGuessList={addGuessList} correct={correct} gameFinished={gameFinished} />
    </>
  )
}

export default Game
