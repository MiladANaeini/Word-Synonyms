import { NavLink } from "react-router-dom";

const TopNav = () => {
  return (
    <header className="header">
      <NavLink to="/homepage">
        <p className="to-blue-500">Home Page</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive ? "text-blue-800" : "text-black"
          }
        >
          Search
        </NavLink>
      </nav>
    </header>
  );
};

export default TopNav;