import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import Coin from "../components/coin";
import TextBox from "../components/textBox";

export default function CoinPage() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [finalRotation, setFinalRotation] = useState(0);
  const [playerChoice, setPlayerChoice] = useState("");
  const navigate = useNavigate();

  const spinCoin = () => {
    const player = parseInt(playerChoice);
    if(player < 0 || player > 1 || isNaN(player))
    {
      setResult("Number between 0 and 1");
      return;
    }
    setResult(null);
    setSpinning(true);

    // Random result: heads (0) or tails (1)
    const isHeads = Math.random() < 0.5;
    const rotation = isHeads ? 0 : Math.PI; // heads = 0deg, tails = 180deg
    
    setTimeout(() => {
      setSpinning(false);
      setFinalRotation(rotation);
      if(isHeads == true && player == 0 || isHeads == false && player == 1)
        setResult("You won!")
      else
        setResult("You lost!")    
    }, 2000);

    console.log(isHeads);
  };

  return (
    <div className="relative h-screen bg-linear-to-br from-purple-900 via-indigo-800 to-blue-600 flex flex-col items-center justify-center text-white">
      <Canvas camera={{ position: [0, 3, 6] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Coin spinning={spinning} finalRotation={finalRotation} />
        <OrbitControls />
      </Canvas>

      {/* Buttons */}
      <div className="absolute bottom-45 left-1/2 -translate-x-1/2 flex gap-4">
        <TextBox
          value={playerChoice}
          onChange={setPlayerChoice}
          placeholder="Head = 0 Tails = 1"
        ></TextBox>
      </div>
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-4">
        <Button label="Spin" onClick={spinCoin} />
        <Button label="Back" onClick={() => navigate("/games")} />
      </div>

      {/* Result */}
      {result && (
        <div className="absolute bottom-65 text-3xl font-semibold drop-shadow-lg animate-bounce">
          {result}
        </div>
      )}
    </div>
  );
}
