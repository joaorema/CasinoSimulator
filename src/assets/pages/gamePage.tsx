import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import GameCard from "../components/gameCard";

function GamePage() {
  const navigate = useNavigate();
  const backBtnClick = () => {
    navigate("/");
  };

  const Games = [
    {
      title: "Dice Roll",
      videoSrc: "../../public/videos/dicerollvideo.webm",
      //imageSrc: "../../public/vite.svg",
      onClick: () => navigate("/dice"),
    },
    {
      title: "Coin Spin",
      videoSrc: "../../public/videos/coinVideo.webm",
      //imageSrc: "../../public/vite.svg",
      onClick: () => navigate("/coin"),
    },
    {
      title: "Game 3",
      imageSrc: "../../public/vite.svg",
      onClick: () => navigate("/"),
    },
    {
      title: "Game 4",
      imageSrc: "../../public/vite.svg",
      onClick: () => navigate("/"),
    },
  ];
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-6">
      <h2 className="text-2xl font-semibold">Choose Your Game 🎮</h2>
      <div className="grid grid-cols-2 gap-6">
        {Games.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </div>
      <Button label="Back" onClick={backBtnClick} />
    </div>
  );
}

export default GamePage;
