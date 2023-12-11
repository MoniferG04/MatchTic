import React from 'react';
import { Tutoship } from '../Components/Tutoship';
import styles from "../Styles/GenerateTuto.module.css";

export function SearchCourse() {
    return (
        <div className={styles.container}>
            <h1><b>Buscar Curso</b></h1>
            
            <Tutoship/>
        </div>
    );
}
