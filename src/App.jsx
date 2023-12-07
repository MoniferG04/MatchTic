import { BrowserRouter, useLocation } from "react-router-dom";
import { Path } from './Paths';
import { NavBar } from './Components/Menu';
import styles from "./Styles/App.module.css";

function Base() {
  const location = useLocation();
  return (
    <div className={styles.app}>
     <Path/>
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
