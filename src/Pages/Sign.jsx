
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../Styles/Sign.module.css";


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
        <div className={styles.form}>
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <input
                    name="correo"
                    type="email"
                    placeholder="Correo"
                    minLength={13}
                    required
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Contraseña"
                    minLength={8}
                    maxLength={20}
                    required
                    value={contraseña}
                    onChange={(e) => setPassword(e.target.value)}
                />


                <button className={styles.Blogin} type="submit">
                    Iniciar Sesión
                </button>

            </form>

            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                <button
                    className={styles.Bregistro}
                >
                    ¿No tienes cuenta? Registrate aquí
                </button>
                <button
                    className={styles.Bregistro}
                >
                    Recuperar constraseña
                </button>
            </div>
        </div>
    );
};

export default Sign;
