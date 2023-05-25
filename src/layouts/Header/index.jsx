import "./index.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header_link">
        Movie DB
      </Link>
    </header>
  );
};

export default Header;
