
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../Styles/Sign.module.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


export function Sign() {
    const [correo, setCorreo] = useState("");
    const [contraseña, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            navigate("/Dashboard", { replace: true });
        } catch (error) {

        } finally {
        }
    };

    return (
        <div className={styles.loginContainer}>
            <form className={styles.loginCard} onSubmit={handleSubmit}>
                <h1>LOGIN</h1>

                <TextField
                    id="correo"
                    label="correo"
                    type="email"
                    placeholder="Correo"
                    minLength={13}
                    required
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                />

                <TextField
                    required
                    id="password"
                    label="Contraseña"
                    type="password"
                    placeholder="contraseña"
                    autoComplete="current-password"
                    minLength={8}
                    maxLength={20}
                    value={contraseña}
                    onChange={(e) => setPassword(e.target.value)}
                />


                <Button type='submit' variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
                <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <a
                    >
                        ¿No tienes cuenta? Registrate aquí
                    </a>
                    <a
                    >
                        Recuperar constraseña
                    </a>
                </div>
            </form>


        </div>
    );
};

export default Sign;
