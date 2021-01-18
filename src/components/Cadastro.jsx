import {React, useContext} from 'react';
import {StateContext} from './StateContext';
import { Form, Button } from 'react-bootstrap';


const Cadastro = () =>{

    const [usuario, setUsuario] = useContext(StateContext);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUsuario(oldVal => {
            return(
                {...oldVal,
                [name]: value 
                }
            )
        })
    }

    return( 

        <div className="wrapper-cadastro"> 
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Insira seu nome" 
                        name="nome"
                        onChange={handleChange}
                    />
                   
                </Form.Group>

                <Form.Group controlId="formBasicSurname">
                    <Form.Label>Sobrenome</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Insira seu sobrenome" 
                        name="sobrenome"   
                        onChange={handleChange} 
                    />
                </Form.Group>
               
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </div>

    );

}

export default Cadastro;