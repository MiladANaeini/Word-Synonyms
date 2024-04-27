import TopNav from "./TopNav";
import AppRoutes from "../../routes/Routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ScrollToTop } from "./ScrollToTop";

function Layout() {
  return (
    <>
      <TopNav />
      <ScrollToTop />
      <ToastContainer theme={"colored"} />
      <main className="w-full flex items-center justify-center p-5">
        <AppRoutes />
      </main>
    </>
  );
}

export default Layout;
