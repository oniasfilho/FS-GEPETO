import React from 'react';
import { Form, Button } from 'react-bootstrap';


const Cadastro = () =>{

    return( 

        <div className="wrapper-cadastro"> 
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Insira seu nome" />
                   
                </Form.Group>

                <Form.Group controlId="formBasicSurname">
                    <Form.Label>Sobrenome</Form.Label>
                    <Form.Control type="text" placeholder="Insira seu sobrenome" />
                </Form.Group>
               
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </div>

    );

}

export default Cadastro;