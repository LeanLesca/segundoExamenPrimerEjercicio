import React from 'react';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { AgregarEditarEmpleado } from './AgregarEditarEmpleado';
import {useNavigate} from "react-router-dom";
import Table from "react-bootstrap/Table"
import { Button } from 'react-bootstrap';

function ListaEmpleados() {

  const navigate = useNavigate();
  const [empleado, setEmpleado] = useState({});
  const [listaEmpleados, setListaEmpleados] = useState([]);
  const [visibleFromEmpleado,setSisibleFromEmpleado]=useState(false);

  const empleadoDefault={
    legajo:0,
    nombreUsuario:'',
    apellidoUsuario:'',
    cargo:'',
    sucursal:'',
    antiguedadAnios:0
  }

  const BuscarListaEmpleados=()=>{
    useEffect(() => {
      console.log("me llaman!")
      Axios({
        url: "http://localhost:8081/listaEmpleados",
      })
        .then((response) => {
          setListaEmpleados(response.data);
          console.log(listaEmpleados)
        })
        .catch((error) => {
          console.log(error);
        });
    }, [setListaEmpleados]);
  }

  const BuscarNuevamenteListaEmpleados=()=>{
    
      console.log("me llaman desde aca!")
      Axios({
        url: "http://localhost:8081/listaEmpleados",
      })
        .then((response) => {
          setListaEmpleados(response.data);
          console.log(listaEmpleados)
        })
        .catch((error) => {
          console.log(error);
        });
    
  }

  const GuardarEmpleado=(empleado)=>{
      Axios({
        url: "http://localhost:8081/guardarEmpleado/"+empleado.legajo+
        "/"+empleado.nombreEmpleado+"/"+empleado.apellidoEmpleado+"/"+empleado.cargo+
        "/"+empleado.sucursal+"/"+empleado.antiguedadAnios,
      })
        .then((response) => {
          console.log(response.data)
          BuscarNuevamenteListaEmpleados();
        })
        .catch((error) => {
          console.log(error);
        });   
    setEmpleado(empleadoDefault);
    setSisibleFromEmpleado(false);  
  }   

  const editarEmpleado=(legajo)=>{
    console.log(legajo)
    Axios({
      url: "http://localhost:8081/buscarEmpleado/"+legajo,
    })
      .then((response) => {
        setEmpleado(response.data);
        console.log(response.data);
        console.log(empleado);
        abrirForm();
      })
      .catch((error) => {
        console.log(error);
      });   
  }

  const eliminarEmpleado=(legajo)=>{
    console.log(legajo)  
    Axios({
      url: "http://localhost:8081/eliminarEmpleado/"+legajo,
    })
      .then((response) => {
        console.log(response.data);
        BuscarNuevamenteListaEmpleados();
      })
      .catch((error) => {
        console.log(error);
      });     
  }

  const abrirForm=()=>{
    setSisibleFromEmpleado(true);
  }

  const cerrarFormu=()=>{
    setEmpleado(empleadoDefault);
    setSisibleFromEmpleado(false);
  }

  const volver=()=>{
    navigate("/");
  }
  
  BuscarListaEmpleados();

  return ( 
    <div className="container">
      <h1 className="row justify-content-md-center"> Lista Empleados</h1>
      <Table  border = "1" class="table table-striped">
        <thead>
          <tr>
            <th scope="col">nombre</th>
            <th scope="col">apellido</th>
            <th scope="col">cargo</th>
            <th scope="col">sucursal</th>
            <th scope="col">antiguedad</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {listaEmpleados.map((empleado) => (
          <tr key={empleado.legajo} className="p-3 mb-2 bg-light text-black" >
            <th>{empleado.nombreEmpleado}</th>
            <th>{empleado.apellidoEmpleado}</th>
            <th>{empleado.cargo}</th>
            <th>{empleado.sucursal}</th>
            <th>{empleado.antiguedadAnios}</th>
            <td><Button onClick={ () => editarEmpleado(empleado.legajo) }>editar</Button></td>
            <td><Button className="btn btn-danger" onClick={ () => eliminarEmpleado(empleado.legajo) }>eliminar</Button></td>
          </tr>
        ))}
      </Table>
      {visibleFromEmpleado||<Button className="btn btn-primary btn-lg active" style={{marginRight:"10px"}} onClick={abrirForm}>agregar</Button>}
      {visibleFromEmpleado||<Button className="btn btn-secondary btn-lg active" onClick={volver}>salir</Button>}
      {!visibleFromEmpleado||<AgregarEditarEmpleado
      GuardarEmpleado={GuardarEmpleado} cerrarFormu={cerrarFormu} empleadoInicial={empleado} />}
    </div>
  );
}export default ListaEmpleados;