

const Navbar = () => {
    return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black/20 backdrop-blur-sm shadow-lg">
      <h1 className="text-2xl font-bold">Casino Simulator</h1>
      <div className="flex gap-4">
        <button className="hover:text-indigo-300 transition">About Us</button>
        <button className="hover:text-indigo-300 transition">Projects</button>
        <button className="hover:text-indigo-300 transition">Contact</button>
      </div>
    </nav>
  );
};

export default Navbar