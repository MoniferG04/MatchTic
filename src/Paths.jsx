import { Routes, Route } from "react-router-dom";
import { Sign } from "./Pages/Sign";
import { Dashboard } from "./Pages/Dashboard";
import { GenerateTuto } from "./Pages/GenerateTuto";
import { SearchCourse } from "./Pages/SearchCourse";
import { Person } from "./Pages/Person";
import { CreatePerson } from "./Components/CreatePerson";
import { EditPerson } from "./Components/EditPerson";
import { StudentSchedule } from "./Pages/StudentSchedule";

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

<Route
        path="/StudentSchedule"
        element={
          <StudentSchedule />
        }
      />

      <Route
        path="/Person/*"
        element={
          <Person />
        }
      />
    </Routes>
  );
}

export function PathsPerson() {

  return (
    <Routes>
      <Route
        path="/CreatePerson"
        element={
          <CreatePerson />
        }
      />

      <Route
        path="/EditPerson"
        element={
          <EditPerson />
        }
      />
    </Routes>
  );
}
