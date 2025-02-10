import React, { useState } from "react"

function Guess({ addGuessList, correct, gameFinsished }) {
  const [guess, setGuess] = useState("")

  function handleFormSubmit(e) {
    e.preventDefault()

    //console.log({ guess: guess.toUpperCase() })
    addGuessList(guess.toUpperCase())
    setGuess("")
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleFormSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={guess} onChange={e => setGuess(e.target.value)} pattern="[A-Za-z]{5,5}" minLength={5} maxLength={5} required disabled={correct || gameFinsished ? true : false} />
    </form>
  )
}

export default Guess
