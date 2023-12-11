import { Routes, Route } from "react-router-dom";
import { Sign } from "./Pages/Sign";
import { Dashboard } from "./Pages/Dashboard";
import { GenerateTuto } from "./Pages/GenerateTuto";
import { SearchCourse } from "./Pages/SearchCourse";

export function Path() {
  return (
    <Routes>
      <Route
        path="/Dashboard/*"
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

      <Route
        path="/GenerateTuto"
        element={
          <GenerateTuto />
        }
      />

      <Route
        path="/SearchCourse"
        element={
          <SearchCourse />
        }
      />
    </Routes>
  );
}
