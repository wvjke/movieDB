/* eslint-disable react/prop-types */
import "./index.scss";
const Header = ({ children }) => {
  return (
    <header className="header">
      <h1 className="header_link">{children}</h1>
    </header>
  );
};

export default Header;
