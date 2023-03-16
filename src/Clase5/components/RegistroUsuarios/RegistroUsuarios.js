
// Importar Dependencias
import { useState } from 'react'

import ListUser from '../ListUser';
import FormUser from '../FormUser';

import './RegistroUsuarios.css'

export const RegistroUsuarios = () => {
    const [usuariosRegistrados, setUsuariosRegistrados] = useState([])
    const onFormSubmitCallBack = (newUser) => {
        const newUserList = [...usuariosRegistrados, newUser];
        setUsuariosRegistrados(newUserList);
    }
    return (
        <div className="container-fluid registro-container">
            <div className="row">

                <div className="col-4">
                    <h2>Formulario de Registro</h2>
                    <FormUser onFormSubmitCallBack={onFormSubmitCallBack}/>                    
                </div>
                <div className="col">
                    <h2>Lista de Usuarios</h2>
                    <ListUser usuariosRegistrados={usuariosRegistrados}/>
                 </div>
            </div>
        </div>
    )
}