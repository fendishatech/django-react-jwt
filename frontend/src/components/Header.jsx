import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-8 py-4 flex justify-end gap-4">
      <Link
        className="px-6 py-2 text-2xl text-gray-600 hover:bg-gray-300"
        to="/home"
      >
        Home
      </Link>
      <Link
        className="px-6 py-2 text-2xl text-gray-600 hover:bg-gray-300"
        to="/"
      >
        Login
      </Link>
    </header>
  );
};

export default Header;
