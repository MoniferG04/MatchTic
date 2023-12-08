import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "../Styles/Menu.module.css";
import { Box, Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer } from "@mui/material";
import { FaHome } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdPersonSearch } from "react-icons/md";
import { FaThList } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { BiSolidAnalyse } from "react-icons/bi";
import { BsBoxArrowLeft } from "react-icons/bs";

export function NavBar() {
    const [state, setState] = React.useState(false);


    const list = () => (
        <Box
            sx={{ 'auto': 250 }}
            role="presentation"
            onClick={() => setState(true)}
            onKeyDown={() => setState(false)}
        >
            <List>

                <ul className="flex flex-col gap-5 mx-3">
                    <li>
                        <Link to="/" replace className="flex items-center gap-2">
                            <h1><b>MatchTic</b></h1>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" replace className="flex items-center gap-2">
                            <FaHome />
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to="/Dashboard/CargueDatos" replace className="flex items-center gap-2">
                            <BiSolidAnalyse />
                            Generar tutoria
                        </Link>
                    </li>
                    <li>
                        <Link to="/Dashboard/Estadisticas" replace className="flex items-center gap-2">
                            <FaSearch />
                            Buscar Curso
                        </Link>
                    </li>
                    <li>
                        <Link to="/Dashboard/Estadisticas" replace className="flex items-center gap-2">
                            <MdPersonSearch />
                            Buscar horario estudiante
                        </Link>
                    </li>
                    <li>
                        <Link to="/Dashboard/Reporte" replace className="flex items-center gap-2">
                            <FaBook />
                            Horario inscrito
                        </Link>
                    </li>
                    <li>
                        <Link to="/" replace className="flex items-center gap-2">
                            <BsBoxArrowLeft />
                            Cerra Sesión
                        </Link>
                    </li>
                    <li>
                        <Link to="/" replace className="flex items-center gap-2">
                            <FaUserTie />
                            Monica Gomez
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
            </List>
            <Divider />
        </Box>
    );


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
        <div>
            <Button onClick={() => setState(true)} style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, }}>
                <FaThList style={{ fontSize: '30px' }} />
            </Button>
            <SwipeableDrawer
                anchor='left'
                open={state}
                onClose={() => setState(false)}
                onOpen={() => setState(true)}
            >
                {list()}
            </SwipeableDrawer>
        </div>

    );
}
