import React from 'react';
import { Tutoship } from '../Components/Tutoship';
import { Search } from '../Components/Search';
import ServerRequest from '../Components/Api';
import styles from "../Styles/GenerateTuto.module.css";



export function GenerateTuto() {

    const [courses, setCourses] = React.useState(null);
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




    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <Search
                    data={courses}
                    mensaje={mensaje}
                    onIdChange={(newId) => {
                        // Aquí puedes capturar 'id' y hacer lo que necesites con él
                        console.log('Nuevo ID:', newId);
                        // Puedes almacenar el nuevo ID en un estado o realizar otras acciones necesarias
                    }}
                />            
            </div>
            <h1><b>Generar Tutorias</b></h1>
            <Tutoship />
        </div>
    );
}
