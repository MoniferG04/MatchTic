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

                <ul className="flex flex-col gap-3 mx-3 width-auto">
                    <li>
                        <h1 className="text-2xl flex justify-center"><b>MatchTic</b></h1>

                    </li>
                    <li>
                        <Link to="/Dashboard" replace className="flex items-center gap-1">
                            <FaHome />
                            Inicio
                        </Link>
                    </li>

                    {/* Aqui va validacion de visualizacion */}
                    <li>
                        <Link to="/Dashboard/GenerateTuto" replace className="flex items-center gap-1">
                            <BiSolidAnalyse />
                            Generar tutoria
                        </Link>
                    </li>
                    <li>
                        <Link to="/Dashboard/SearchCourse" replace className="flex items-center gap-1">
                            <FaSearch />
                            Buscar Curso
                        </Link>
                    </li>
                    <li>
                        <Link to="/Dashboard/StudentSchedule" replace className="flex items-center gap-1">
                            <FaUserTie />
                            Buscar horario estudiante
                        </Link>
                    </li>

                    {/*Hasta aqui va validacion de visualizacion */}


                    <li>
                        <Link to="/Dashboard/Person" replace className="flex items-center gap-1">
                            <MdPersonSearch />
                            Estudiante
                        </Link>
                    </li>
                   
                    <li>
                        <Link to="/" replace className="flex items-center gap-1">
                            <BsBoxArrowLeft />
                            Cerra Sesión
                        </Link>
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
            <Button onClick={() => setState(true)} style={{ padding: '0', minWidth: '10vh', marginTop: '3vh' }}>
                <FaThList style={{ fontSize: '5vh', color: 'black' }} />
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