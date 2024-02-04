import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export const AgregarEditarEmpleado = ({cerrarFormu,GuardarEmpleado,empleadoInicial}) =>{

    const [empleado,setEmpleado]= useState(empleadoInicial)
    const {legajo,nombreEmpleado,apellidoEmpleado,cargo,sucursal,antiguedadAnios} = empleado;

    const onInputChange = ({target}) =>{
        const{name , value} = target;
        setEmpleado({
            ...empleado,
            [name]:value
        })
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if(legajo == 0|| !nombreEmpleado||!apellidoEmpleado||!cargo||!sucursal){return}
        GuardarEmpleado(empleado);
        setEmpleado(empleadoInicial);
    }

    const onClose = ()=>{
        cerrarFormu();
    }
    return(
        <Form onSubmit={onSubmit}>
            <Form.Group>
                <Form.Control value = {legajo} type="number" name="legajo" 
                id="1" placeholder="legajo" onChange={onInputChange}/>
                <br/>
                <Form.Control value = {nombreEmpleado} type="text" name="nombreEmpleado" 
                id="2" placeholder="nombreEmpleadoe" onChange={onInputChange}/>
                <br/>
                <Form.Control value = {apellidoEmpleado} type="text" name="apellidoEmpleado" 
                id="3" placeholder="apellidoEmpleado" onChange={onInputChange}/>
                <br/>
                <Form.Control value = {cargo} type="text" name="cargo" 
                id="4" placeholder="cargo" onChange={onInputChange}/>
                <br/>
                <Form.Control value = {sucursal} type="text" name="sucursal" 
                id="5" placeholder="sucursal" onChange={onInputChange}/>
                <br/>
                <Form.Control value = {antiguedadAnios} type="number" name="antiguedadAnios" 
                id="6" placeholder="antiguedadAnios" onChange={onInputChange}/>
                <br/>
                <Button className="btn btn-success" type="submit" style={{marginRight:"10px"}}>aceptar</Button> 
                <Button className="btn btn-secondary"  onClick={onClose} >cancelar</Button>
            </Form.Group> 
        </Form>
    )
}