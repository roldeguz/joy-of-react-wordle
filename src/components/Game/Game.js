import React, { useState } from "react"

import { sample } from "../../utils"
import { WORDS } from "../../data"
import { checkGuess } from "../../game-helpers"

import Banner from "../Banner/Banner"
import GuessInput from "../GuessInput/GuessInput"
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
  const [gameStatus, setGameStatus] = useState("running")
  const [correct, setCorrect] = useState(false)
  const [gameFinished, setGameFinished] = useState(false)

  function addGuessList(guess) {
    const newGuess = {
      value: guess,
      result: checkGuess(answer, guess)
    }
    const newGuessList = [...guessList, newGuess]
    setGuessList(newGuessList)

    setCorrect(answer == guess)
    setGameFinished(answer == guess || guessList.length + 1 == NUM_OF_GUESSES_ALLOWED)

    if (answer === guess) {
      setGameStatus("won")
    } else if (newGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost")
    }
  }

  function restartGame() {
    setAnswer(sample(WORDS))
    console.log({ answer })
    setGuessList([])
    setGameStatus("running")
  }

  // The Banner component can still be broken down to specific result banners (WonBanner, LostBanner)
  // Only the status to control the className and the children will be passed to Banner
  return (
    <>
      <GuessList guessList={guessList} />
      <GuessInput addGuessList={addGuessList} gameStatus={gameStatus} />
      {gameStatus != "running" && <Banner answer={answer} numTries={guessList.length} gameStatus={gameStatus} restartGame={restartGame} />}
    </>
  )
}

export default Game
