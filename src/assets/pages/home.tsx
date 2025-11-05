import { useNavigate } from "react-router-dom";
import Button from "../components/button";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-1 flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to Casino Simulator</h1>
      <Button label="Start Games" onClick={() => navigate("/games")} />
    </div>
  );
}

export default HomePage