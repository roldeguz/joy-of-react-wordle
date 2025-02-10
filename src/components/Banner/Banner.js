import React from "react"

function Banner({ answer, numTries, gameStatus, restartGame }) {
  return (
    <div className={gameStatus == "won" ? "happy banner" : "sad banner"}>
      {gameStatus == "won" && (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {numTries} {numTries == 1 ? " guess" : " guesses"}
          </strong>
          .
        </p>
      )}
      {gameStatus == "lost" && (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
      <button onClick={restartGame}>Restart Game</button>
    </div>
  )
}

export default Banner
