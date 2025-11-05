import Button from "../components/button";
import { useNavigate } from "react-router-dom";



function GamePage() {
    const navigate = useNavigate();
    const backBtnClick = () =>{
        navigate("/");
    };
    const game1btn = () =>{
        navigate("/dice");
    }
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-6">
      <h2 className="text-2xl font-semibold">Choose Your Game 🎮</h2>
      <div className="grid grid-cols-2 gap-6">
        <Button label="Game 1" onClick={game1btn}/>
        <Button label="Game 2" />
        <Button label="Game 3" />
        <Button label="Game 4" />
        <Button label="Back" onClick={backBtnClick} />
      </div>
    </div>
  );
}

export default GamePage