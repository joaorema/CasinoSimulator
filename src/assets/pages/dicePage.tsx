import { use, useState } from "react";
import Button from "../components/button";
import TextBox from "../components/textBox";
import { useNavigate } from "react-router-dom";

function DiceGame() {
  const [diceValue, setDiceValue] = useState<number | null>(null);
  const [guess, setGuess] = useState("");
  const [range, setRange] = useState("");
  const [message, setMessage] = useState("");
  const [rolling, setRolling] = useState(false);
  const [iswinner, setWinner] = useState<boolean | null>(null);
  const navigate = useNavigate();


  const messageColor =
    iswinner === true
      ? "text-emerald-400"
      : iswinner === false
      ? "text-rose-400"
      : "text-slate-100";

  const rollDice = () => {
    if (guess == "" && range == "") {
      setMessage("Set range and pick number");
      return;
    }
    if (guess == "") {
      setMessage("Pick number");
      return;
    }
    if (range == "") {
      setMessage("Set range");
      return;
    }
    const playernbr = parseInt(guess);
    const currentRange = parseInt(range);
    if (playernbr < 0 || playernbr > currentRange) {
      setMessage("Pick a number between 0 and Range");
      setWinner(null);
      return;
    }
    setRolling(true);
    setMessage("");
    setTimeout(() => {
      const newRoll = Math.floor(Math.random() * currentRange) + 1;
      setDiceValue(newRoll);
      setRolling(false);
      if (playernbr === newRoll) {
        setMessage("You guessed it right!");
        setWinner(true);
      } else {
        setMessage(`Nope! It was ${newRoll}.`);
        setWinner(false);
      }
    }, 600);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-purple-900 via-indigo-800 to-blue-600 text-white space-y-6">
      <h1 className="text-3xl text-indigo-300 font-bold mb-4">🎲 Guess the Number!</h1>

      <TextBox
        value={range}
        onChange={setRange}
        placeholder="Pick a new Range"
      ></TextBox>
      <TextBox
        value={guess}
        onChange={setGuess}
        placeholder="Enter a number "
      />

      <Button label="Roll Dice" onClick={rollDice} />
      <Button label="Back" onClick={() => navigate(-1)} />

      {rolling ? (
        <p className="text-lg text-amber-500 mt-4 animate-pulse">Rolling...</p>
      ) : message ? (
        <p className={`text-lg mt-4 ${messageColor}`}>{message}</p>
      ) : null}
    </div>
  );
}

export default DiceGame;
