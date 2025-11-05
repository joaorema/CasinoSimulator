import { Routes, Route} from "react-router-dom";
import HomePage from "./assets/pages/home";
import Navbar from "./assets/components/navbar";
import Footer from "./assets/components/footer";
import GamePage from "./assets/pages/gamePage";
import DiceGame from "./assets/pages/dicePage";


export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-linear-to-br from-purple-900 via-indigo-800 to-blue-600 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamePage />} />
        <Route path="/dice" element={<DiceGame />} />
      </Routes>
      <Footer />
    </div>
  );
}


