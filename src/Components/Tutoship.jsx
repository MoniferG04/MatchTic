import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ServerRequest from './Api';

const columns = [
  { id: 'Hora', label: 'Hora', maxWidth: 20, align: 'center' },
  { id: 'Lunes', label: 'Lunes', maxWidth: 50, align: 'center' },
  { id: 'Martes', label: 'Martes', maxWidth: 50, align: 'center' },
  { id: 'Miercoles', label: 'Miercoles', maxWidth: 50, align: 'center' },
  { id: 'Jueves', label: 'Jueves', maxWidth: 50, align: 'center' },
  { id: 'Viernes', label: 'Viernes', maxWidth: 50, align: 'center' },
];

function createData(Hora, Lunes, Martes, Miercoles, Jueves, Viernes) {
  return { Hora, Lunes, Martes, Miercoles, Jueves, Viernes };
}

const rows = [
  createData('6am-7am', 'No hay', 'No hay', 'No hay', 'No hay', 'No hay'),
  createData('7am-8am', 'No hay', 'No hay', 'No hay', 'No hay', 'No hay'),
  createData('8am-9am', 'No hay', 'No hay', 'No hay', 'No hay', 'No hay'),
  createData('9am-10am', 'No hay', 'No hay', 'No hay', 'No hay', 'No hay'),
  createData('10am-11am', 'No hay', 'No hay', 'No hay', 'No hay', 'No hay'),
  createData('11am-12pm', 'No hay', 'No hay', 'No hay', 'No hay', 'No hay'),
  createData('12pm-1pm', 'No hay', 'No hay', 'No hay', 'No hay', 'No hay'),
  createData('1pm-2pm', 'No hay', 'No hay', 'No hay', 'No hay', 'No hay'),
  createData('2pm-3pm', 'No hay', 'No hay', 'No hay', 'No hay', 'No hay'),
  createData('3pm-4pm', 'No hay', 'No hay', 'No hay', 'No hay', 'No hay'),
  createData('4pm-5pm', 'No hay', 'No hay', 'No hay', 'No hay', 'No hay'),
  createData('5pm-6pm', 'No hay', 'No hay', 'No hay', 'No hay', 'No hay'),
];

export function Tutoship(props) {

  const generateHoursArray = () => {
    const hoursArray = [];
    for (let hour = 6; hour <= 18; hour++) {
      hoursArray.push(`${hour}am-${hour + 1}am`);
    }
    return hoursArray;
  };

  return (
    <Paper sx={{ width: '80vw', background: 'transparent', backdropFilter: 'blur(5px)' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ maxWidth: column.maxWidth, background: '#2CA58D' }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.horario && Array.isArray(props.horario) && generateHoursArray().map((hour, index) => (
              <TableRow key={index}>
                <TableCell align="center">{hour}</TableCell>
                {props.horario.map((column, rowIndex) => (
                  <TableCell
                  key={rowIndex}
                  align="center"
                  style={{
                    backgroundColor: column[index] === 1 ? 'transparent' : '#F46197',
                  }}
                >
                  {column[index] === 1 ? 'Disponible' : 'No Disponible'}
                </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}