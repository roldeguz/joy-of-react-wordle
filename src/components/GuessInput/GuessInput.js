import React, { useState } from "react"

function GuessInput({ addGuessList, gameStatus }) {
  const [guess, setGuess] = useState("")

  function handleFormSubmit(e) {
    e.preventDefault()

    addGuessList(guess)
    setGuess("")
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleFormSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={e => {
          const nextGuess = e.target.value.toUpperCase()
          setGuess(nextGuess)
        }}
        pattern="[A-Za-z]{5,5}"
        minLength={5}
        maxLength={5}
        required
        disabled={gameStatus != "running"}
      />
    </form>
  )
}

export default GuessInput
