import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router";

const HomePage = React.lazy(() => import("../pages/HomePage"));
const SearchPage = React.lazy(() => import("../pages/SearchPage"));
const AddPage = React.lazy(() => import("../pages/AddSynonymForm"));

const AppRoutes = () => {
  const navigate = useNavigate();
  return (
    <Suspense fallback={null}>
      <Routes basename="/">
        <Route path="/homepage" element={<HomePage navigate={navigate} />} />
        <Route path="/search" element={<SearchPage navigate={navigate} />} />
        <Route path="/add/:word" element={<AddPage navigate={navigate} />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
