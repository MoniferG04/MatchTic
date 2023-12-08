import { BrowserRouter, useLocation } from "react-router-dom";
import { Path } from './Paths';
import styles from "./Styles/App.module.css";

export function App() {
 const location = useLocation();
  return (
    <div className={styles.app}>
     <Path/>
    </div>
  );
}
