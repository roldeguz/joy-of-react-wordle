import React from "react"

function Banner({ answer, correct, numTries, retryGame }) {
  function handleFormSubmit(e) {
    e.prreventDefault()

    retryGame()
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={correct ? "happy banner" : "sad banner"}>
        {correct && (
          <p>
            <strong>Congratulations!</strong> Got it in <strong>{numTries} guesses</strong>.
          </p>
        )}
        {!correct && (
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        )}
        <button type="submit">Restart Game</button>
      </div>
    </form>
  )
}

export default Banner
