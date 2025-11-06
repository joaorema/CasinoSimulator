import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();
    const onTopbtn = () =>{
        navigate("/")
    };
    
    return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black/20 backdrop-blur-sm shadow-lg">
      <button className="text-2xl font-bold" onClick={onTopbtn}>Casino Simulator</button>
      <div className="flex gap-4">
        <button className="hover:text-indigo-300 transition">About Us</button>
        <button className="hover:text-indigo-300 transition">Projects</button>
        <button className="hover:text-indigo-300 transition">Contact</button>
      </div>
    </nav>
  );
};

export default Navbar