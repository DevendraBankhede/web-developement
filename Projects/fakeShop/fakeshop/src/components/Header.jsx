import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-blue-600 text-white p-4 flex gap-6 justify-center">
      <Link to="/home" className="hover:underline">Home</Link>
      <Link to="/about" className="hover:underline">About</Link>
    </div>
  );
}

export default Header;