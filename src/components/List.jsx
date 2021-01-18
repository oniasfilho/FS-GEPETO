import {React, useContext, useState} from 'react';
import { StateContext } from './StateContext';
import { Table } from "react-bootstrap";




const List = () =>{

    const [usuarios, setUsuarios] = useState([
        {
            "id": "01",
            "nome": "gabiru",
            "sobrenome":"dossa"
        },

        {
            "id": "02",
            "nome": "Onias",
            "sobrenome":"Rocha"
        }
    ])

    const [usuario] = useContext(StateContext);

    return(

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th style={{width: '100px'}}>Ações</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map(usuario =>{
                    
                    return(
                        <tr>
                            <td>{usuario.id}</td>
                            <td>{usuario.nome}</td>
                            <td>{usuario.sobrenome}</td>
                            <td>
                                <a href="">
                                <i
                                    className="material-icons"
                                    data-toggle="tooltip"
                                    title="editar"
                                >
                                    &#xE254;
                                </i>
                                </a>
                                <a href=''>
                                    <i
                                        className="material-icons"
                                        data-toggle="trash"
                                        title="deletar"
                                    >
                                        &#xE872;
                                    </i>
                                </a>
                            </td>
                        </tr>
                    )
                })}

                <input type="text" value={usuario.nome} disabled />

            </tbody>
        </Table>

    );

}

export default List;