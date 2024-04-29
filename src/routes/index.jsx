import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Loading } from "../components/shared/Loading";
import { ROUTES_URL } from "../common/constants/RoutesUrl";

// Used Lazy loading to improve performance
const HomePage = React.lazy(() => import("../pages/HomePage"));
const SearchPage = React.lazy(() => import("../pages/SearchPage"));
const AddPage = React.lazy(() => import("../pages/AddSynonymForm"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading loading={true} />}>
      <Routes>
        <Route path={ROUTES_URL.SEARCH} element={<SearchPage />} />
        <Route path={ROUTES_URL.ADD} element={<AddPage />} />
        <Route exact path={ROUTES_URL.HOME} element={<HomePage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
