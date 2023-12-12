import React from 'react';
import { Tutoship } from '../Components/Tutoship';
import { Search } from '../Components/Search';
import ServerRequest from '../Components/Api';
import styles from "../Styles/GenerateTuto.module.css";



export function StudentSchedule() {

    const [id, setId] = React.useState(null);
    const [students, setStudents] = React.useState(null);
    const [horario, setHorario] = React.useState([]);
    const serverRequest = new ServerRequest();
    const mensaje = "Seleccione al estudiante...";

    const fetchOptions = async () => {

        try {
            const data = await serverRequest.getStudent();
            setStudents(data.estudiantes);
        } catch (error) {
            console.error("Error en la solicitud de carga:", error);
        }
    };

    React.useEffect(() => {
        fetchOptions();
    }, []);

    const fetchTutoships = async () => {
        try {
            const data = await serverRequest.getStudentTutoship(id);
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
                    data={students}
                    mensaje={mensaje}
                    onIdChange={(newId) => {
                        setId(newId);
                    }}
                />            
            </div>
            <h1><b>Buscar Horario</b></h1>
            <Tutoship horario={horario} />
        </div>
    );
}
