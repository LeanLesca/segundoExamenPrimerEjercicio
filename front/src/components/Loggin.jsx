import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { Button, Form } from 'react-bootstrap';


function Loggin(){

  const usuarioInicial = {
    nombreUsuario: '',
    passwordUsuario: ''
  } 
  
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(usuarioInicial);
  const {nombreUsuario,passwordUsuario}=usuario;

  const validaUsuario=()=>{
      console.log("paso por log!");
      Axios({
        url: "http://localhost:8081/validarUsuario/"+usuario.nombreUsuario+"/"+usuario.passwordUsuario,
      })
        .then((response) => {
          console.log(response.data);
        if(response.data==true){
          navigate("/ListaEmpleados");
        }else{
          alert(response.data);
        }
        })
        .catch((error) => {
          console.log(error);
        });
   }

  const onSubmit = (event) =>{
    event.preventDefault();
    validaUsuario();
  }

  const cambioUsuario=({target})=>{
    const{name , value} = target;
    setUsuario({
        ...usuario,
        [name]:value
    })
  }
  return(
    <div className="container">
    <h1> Login </h1>
    <Form onSubmit={onSubmit}> 
        <Form.Group id = 'nombreUsuario'>
          <label>Username : </label>
          <Form.Control value={nombreUsuario} placeholder="Enter Username" type="text"
          name="nombreUsuario"  onChange={cambioUsuario}/> 
        </Form.Group>
        <br/>
        <Form.Group id = 'passwordUsuario'>
          <label>Password : </label>
          <Form.Control value={passwordUsuario} placeholder="Enter Password" type="password"
          name="passwordUsuario" onChange={cambioUsuario}/> 
          <br/>
          <Button className="btn btn-primary btn-lg active" type="submit" onClick={onSubmit}>Login</Button> 
        </Form.Group>
    </Form>
    <span></span>
   </div>
  )

}export default Loggin;


