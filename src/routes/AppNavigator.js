import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { MyLoader } from "../components";

const HomeScreen = lazy(() => import("../pages/Home"));
const NotFoundScreen = lazy(() => import("../pages/NotFound"));

const AppNavigator = () => {
  return (
    <Suspense fallback={<MyLoader />}>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </Suspense>
  );
};
export default AppNavigator;
