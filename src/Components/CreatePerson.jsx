import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ServerRequest from './Api';


export function CreatePerson() {

    const serverRequest = new ServerRequest();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const data = serverRequest.postCreatePerson(formData);
            navigate("/Dashboard/Person", { replace: true });
        } catch (error) {

        } finally {
        }
    };

    return (
        <Container>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '40vw',
                    margin: 'auto',
                    marginTop: '5vh',
                }}
                onSubmit={handleSubmit}
            >
                <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', color:'#0A2342' }}>
                    Crear Perfil para Estudiante
                </Typography>
                <TextField
                    label="Nombre"
                    variant="outlined"
                    name="nombre"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    margin="normal"
                    required
                />
                <TextField
                    label="Apellido"
                    variant="outlined"
                    name="apellido"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    margin="normal"
                    required
                />
                <Button variant="contained" color="primary" type="submit" sx={{ marginTop: '20px' }}>
                    Enviar
                </Button>
            </Box>
        </Container>
    );
}