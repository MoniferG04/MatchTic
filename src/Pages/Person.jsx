import React from 'react';
import styles from '../Styles/Person.module.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { PathsPerson } from '../Paths';


export function Person() {

    return (
        <div className={styles.container}>
            <div className={styles.acciones}>
                <Button variant="contained" >
                    <Link to="/Dashboard/Person/Createperson" replace style={{ color: '#0A2342', textDecoration: 'none' }}>Crear Estudiante</Link>
                </Button>
                <Button variant="contained">
                    <Link to="/Dashboard/Person/EditPerson" replace style={{ color: '#0A2342', textDecoration: 'none' }}>Editar Estudiante</Link>
                </Button>
            </div>

            <PathsPerson />
        </div>
    );
}
