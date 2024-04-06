import React, { Suspense, lazy } from "react";
import MainLayout from "./Layout/MainLayout";
import { Loading } from "./components/utils/Loading";
import { Outlet, Route, Routes } from "react-router-dom";
import AddNewCaseForm from "./components/Case/AddNewCaseForm";
const DashBoard = lazy(() => import("./components/DashBoard"));
const State = lazy(() => import("./components/MasterData/State"));
const District = lazy(() => import("./components/MasterData/District"));
const City = lazy(() => import("./components/MasterData/City"));
const Taluk = lazy(() => import("./components/MasterData/Taluk"));
const Village = lazy(() => import("./components/MasterData/Village"));

function App() {
  return (
    <MainLayout>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/master-data" element={<Outlet />}>
            <Route path="Village" element={<Village />} />
            <Route path="District" element={<District />} />
            <Route path="State" element={<State />} />
            <Route path="Taluk" element={<Taluk />} />
            <Route path="City" element={<City />} />
          </Route>
          <Route path="/case" element={<Outlet />}>
          <Route path="new-case/" element={<AddNewCaseForm />} />
          <Route path="new-case/:id" element={<AddNewCaseForm />} />

          </Route>
        </Routes>
      </Suspense>
    </MainLayout>
  );
}

export default App;
