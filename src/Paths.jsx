import { Routes, Route } from "react-router-dom";
import { Sign } from "./Pages/Sign";
import { Dashboard } from "./Pages/Dashboard";

export function Path() {
  return (
    <Routes>
      <Route
        path="/Dashboard"
        element={
          <Dashboard />
        }
      />
      <Route path="/*" element={<Sign />} />
    </Routes>
  );
}

export function PathsDashboard() {

  return (
    <Routes>

      {/* <Route
        path="/Reportes"
        element={
          <Dashboard />
        }
      /> */}
    </Routes>
  );
}
