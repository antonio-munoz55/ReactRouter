import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="flex items-center justify-around bg-pink-500 text-white p-4">
            <Link to="/" className="font-semibold hover:underline">
                Home
            </Link>
            <Link to="/list" className="font-semibold hover:underline">
                Recipient List
            </Link>
            <Link to="/add" className="font-semibold hover:underline">
                Add Gift
            </Link>
        </nav>
    );
}

export default NavBar;
