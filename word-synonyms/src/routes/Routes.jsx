import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import AddPage from "../pages/AddSynonymForm";
import { Loading } from "../components/common/Loading";

const AppRoutes = () => {
  const navigate = useNavigate();
  return (
    <Suspense fallback={Loading(true)}>
      <Routes basename="/">
        <Route path="/homepage" element={<HomePage navigate={navigate} />} />
        <Route path="/search" element={<SearchPage navigate={navigate} />} />
        <Route path="/add/:word" element={<AddPage navigate={navigate} />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
