import TopNav from "./TopNav";
import AppRoutes from "../../routes/Routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ScrollToTop } from "./ScrollToTop";

function Layout() {
  return (
    <div className="roboto-medium">
      <TopNav />
      <ScrollToTop />
      <ToastContainer theme={"colored"} />
      <div>
        <AppRoutes />
      </div>
    </div>
  );
}

export default Layout;
