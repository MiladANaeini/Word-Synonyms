import { NavLink } from "react-router-dom";
import { ROUTES_URL } from "../../constants/RoutesUrl";
const TopNav = () => {
  return (
    <header className="flex items-center justify-between text-sm font-normal bg-white px-5 leading-10 shadow-xl">
      <NavLink to={ROUTES_URL.HOME}>Home</NavLink>
      <NavLink
        to={ROUTES_URL.SEARCH}
        className={({ isActive }) =>
          isActive ? "text-blue-800" : "text-black"
        }
      >
        Search
      </NavLink>
    </header>
  );
};

export default TopNav;
