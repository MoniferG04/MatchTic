import * as React from 'react';
import { Tutoship } from '../Components/Tutoship';
import { Search } from '../Components/Search';
import styles from "../Styles/GenerateTuto.module.css";
import ServerRequest from '../Components/Api';
import Typography from '@mui/material/Typography';

export function SearchCourse() {

    const [id, setId] = React.useState(null);
    const [courses, setCourses] = React.useState(null);
    const [horario, setHorario] = React.useState([]);
    const serverRequest = new ServerRequest();
    const mensaje = "Seleccione la materia...";

    const fetchOptions = async () => {

        try {
            const data = await serverRequest.getCourses();
            setCourses(data.materias);
        } catch (error) {
            console.error("Error en la solicitud de carga:", error);
        }
    };

    React.useEffect(() => {
        fetchOptions();
    }, []);


    const fetchTutoships = async () => {
        try {
            const data = await serverRequest.getViewCourses(id);
            setHorario(data);
        } catch (error) {
            console.error("Error en la solicitud de carga:", error);
        }
    };

    React.useEffect(() => {
        fetchTutoships();
    }, [id]);


    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <Search
                    data={courses}
                    mensaje={mensaje}
                    onIdChange={(newId) => {
                        setId(newId);
                    }}
                />
            </div>
            <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', color: '#0A2342' }}>
                <b>Buscar Horario</b>
            </Typography>

            <Tutoship horario={horario} />
        </div>
    );
}
