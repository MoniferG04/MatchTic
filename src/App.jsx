import { BrowserRouter, useLocation } from "react-router-dom";
import { Path } from './Paths';
import { NavBar } from './Components/Menu';

function Base() {

  const location = useLocation();

  const mostrarMenu = location.pathname === "/";

  return (
    <div>
      {!mostrarMenu && (
        <header>
          <NavBar />
        </header>
      )}
      <div>
        < Path/>
      </div>

    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Base />
    </BrowserRouter>
  );
}
