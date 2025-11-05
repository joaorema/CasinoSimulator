import { useState } from "react";
import Button from "../components/button";
import TextBox from "../components/textBox";
import { useNavigate } from "react-router-dom";

function DiceGame() {
  const [diceValue, setDiceValue] = useState<number | null>(null);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [rolling, setRolling] = useState(false);
  const navigate = useNavigate();

  const rollDice = () => {
    setRolling(true);
    setMessage("");
    setTimeout(() => {
      const newRoll = Math.floor(Math.random() * 6) + 1;
      setDiceValue(newRoll);
      setRolling(false);

      if (guess.trim() === "") return;

      const guessNum = parseInt(guess);
      if (guessNum === newRoll) {
        setMessage("🎉 You guessed it right!");
      } else {
        setMessage(`❌ Nope! It was ${newRoll}.`);
      }
    }, 600);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-purple-900 via-indigo-800 to-blue-600 text-white space-y-6">
      <h1 className="text-3xl font-bold mb-4">🎲 Guess the Dice!</h1>

      <TextBox
        value={guess}
        onChange={setGuess}
        placeholder="Enter a number (1–6)"
      />

      <Button label="Roll Dice" onClick={rollDice} />
      <Button label="Back" onClick={() => navigate(-1)} />

      {rolling ? (
        <p className="text-lg mt-4 animate-pulse">Rolling...</p>
      ) : message ? (
        <p className="text-lg mt-4">{message}</p>
      ) : diceValue !== null ? (
        <p className="text-lg mt-4">You rolled a {diceValue}</p>
      ) : null}
    </div>
  );
}

export default DiceGame;
