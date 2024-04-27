import TopNav from "./TopNav";
import AppRoutes from "../../routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ScrollToTop } from "./ScrollToTop";

function Layout() {
  return (
    <>
      <TopNav />
      <ToastContainer theme={"colored"} />
      <main className="w-full flex items-center justify-center p-5">
        <AppRoutes />
      </main>
      <ScrollToTop />
    </>
  );
}

export default Layout;
