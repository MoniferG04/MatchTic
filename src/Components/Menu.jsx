import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "../Styles/Menu.module.css";


export function NavBar() {
    const location = useLocation();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setIsMenuOpen(true);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setIsMenuOpen(false);
    };

    React.useEffect(() => {
        setIsMenuOpen(false); // Cerrar el menú al cargar la página
    }, [location.pathname]);

    return (
        <div style={{ width: '85%' }}>
            <ul>
                <li>
                    <Link to="/" replace>
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to="/Dashboard/CargueDatos" replace>
                        Datos
                    </Link>
                </li>
                <li>
                    <Link to="/Dashboard/Estadisticas" replace>
                        Estadísticas
                    </Link>
                </li>
                <li>
                    <Link to="/Dashboard/Reporte" replace>
                        Reporte
                    </Link>
                </li>
                <li
                    style={{ margin: "0 !important" }}
                    onMouseEnter={handleMenuOpen}
                    onMouseLeave={handleMenuClose}
                    className={style.menuLink}
                >
                </li>
            </ul>
        </div>
    );
}
