import { NavLink } from "react-router-dom";
import { ROUTES_URL } from "../../constants/routes_url";
const TopNav = () => {
  return (
    <header className="header">
      <NavLink to={ROUTES_URL.HOME}>
        <p className="to-blue-500">Home Page</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to={ROUTES_URL.SEARCH}
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
