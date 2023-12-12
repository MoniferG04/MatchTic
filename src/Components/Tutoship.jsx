import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'Hora', label: 'Hora', maxWidth: 20, align: 'center' },
  { id: 'Lunes', label: 'Lunes', maxWidth: 50, align: 'center' },
  { id: 'Martes', label: 'Martes', maxWidth: 50, align: 'center' },
  { id: 'Miercoles', label: 'Miercoles', maxWidth: 50, align: 'center' },
  { id: 'Jueves', label: 'Jueves', maxWidth: 50, align: 'center' },
  { id: 'Viernes', label: 'Viernes', maxWidth: 50, align: 'center' },
];

export function Tutoship(props) {

  const generateHoursArray = () => {
    const hoursArray = [];
    for (let hour = 6; hour <= 17; hour++) {
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
                  style={{ maxWidth: column.maxWidth, background: '#0a2342', color:'white' }}>
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
                    backgroundColor: column[index] === 0 ? '#2ca58dcc' : 'transparent',
                  }}
                >
                  {column[index] === 0 ? 'Disponible' : 'No Disponible'}
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