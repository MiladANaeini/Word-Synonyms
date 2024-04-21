import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from "react-router";

const HomePage = React.lazy(() => import("../components/pages/HomePage"))
const SearchPage = React.lazy(() => import("../components/pages/SearchPage"))
const AddPage = React.lazy(() => import("../components/pages/AddPage"))

const AppRoutes = () => {

 const navigate = useNavigate();
  return (
    <Suspense fallback={null}>
        <Routes basenase="/">
        <Route path='/homepage' element={<HomePage navigate={navigate}/>}/>
        <Route path='/search' element={<SearchPage navigate={navigate}/>}/>
        <Route path='/add' element={<AddPage navigate={navigate}/>}/>
        </Routes>
    </Suspense>
  )
}

export default AppRoutes