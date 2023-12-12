import React from 'react';
import styles from '../Styles/Person.module.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { PathsPerson } from '../Paths';
import { Modals } from "../Components/Modals";
import ServerRequest from '../Components/Api';
import { FaUserEdit } from "react-icons/fa";
import { GrFormAdd } from "react-icons/gr";

const columns = [
  { id: 'Id', label: 'Id', maxWidth: 20, align: 'center' },
  { id: 'Nombre', label: 'Nombre', maxWidth: 50, align: 'center' },
  { id: 'Apellido', label: 'Apellido', maxWidth: 50, align: 'center' },
  { id: 'Acciones', label: 'Acciones', maxWidth: 50, align: 'center' },
];

export function Person() {
  const [openModal, setOpenModal] = React.useState(false);
  const serverRequest = new ServerRequest();
  const [personas, setPersonas] = React.useState([]);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleButtonClick = () => {
    setOpenModal(true);
  };
  
  const fetchOptions = async () => {

    try {
      const data = await serverRequest.getStudent();
      setPersonas(data.estudiantes);
      console.log("aqui estoy", data.estudiantes);
    } catch (error) {
      console.error("Error en la solicitud de carga:", error);
    }
  };

  React.useEffect(() => {
    fetchOptions();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.cabecera}>
        <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', color: '#0A2342' }}>
          <b>Lista de Estudiantes</b>
        </Typography>
        <Button variant="contained" style={{ background: '#0A2342', color: 'white' }}   onClick={handleButtonClick}
>
          <GrFormAdd /> Crear Estudiante
        </Button>
      </div>



      <Paper sx={{ width: '80vw', background: 'transparent', backdropFilter: 'blur(5px)' }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ maxWidth: column.maxWidth, background: '#0a2342', color: 'white' }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {personas.map((persona) => (
                <TableRow key={persona.data} >
                  <TableCell className={styles.celdas}>{persona.id}</TableCell>
                  <TableCell className={styles.celdas}>{persona.nombre}</TableCell>
                  <TableCell className={styles.celdas}>{persona.apellido}</TableCell>
                  <TableCell >
                    <Link to="/Dashboard/Person/EditPerson" replace ><FaUserEdit /></Link>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Modals
        openModal={openModal}
        handleCloseModal={handleCloseModal}
      />
      <PathsPerson />
    </div>
  );
}
