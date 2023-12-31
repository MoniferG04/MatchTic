import React from 'react';
import { Tutoship } from '../Components/Tutoship';
import { Search } from '../Components/Search';
import ServerRequest from '../Components/Api';
import styles from "../Styles/GenerateTuto.module.css";



export function GenerateTuto() {

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
            const data = await serverRequest.getCoursesTutoship(id);
            setHorario(data);
            console.log(horario);
            console.log(data);
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
            <h1><b>Generar Tutorias</b></h1>
            <Tutoship horario={horario} />
        </div>
    );
}
