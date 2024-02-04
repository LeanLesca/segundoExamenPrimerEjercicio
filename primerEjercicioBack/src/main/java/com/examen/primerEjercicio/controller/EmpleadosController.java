package com.examen.primerEjercicio.controller;

import com.examen.primerEjercicio.repository.empleado.Empleados;
import com.examen.primerEjercicio.service.empleados.EmpleadosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EmpleadosController {

    @Autowired
    private EmpleadosService empleadosService;

    @GetMapping("/listaEmpleados")
    public List<Empleados> listaProductos(){

        List<Empleados> listaEmpleados = empleadosService.recuperarListaEmpleados();
        return listaEmpleados;
    }

    @GetMapping("/buscarEmpleado/{legajo}")
    public Empleados buscarEmpleado(@PathVariable("legajo") int legajo){
       /* return new Empleados(3,"cdsc","dvs"
                ,"vsdv","dsvd",2);*/
        return empleadosService.buscarEmpleado(legajo);
    }

    @GetMapping("/guardarEmpleado/{legajo}/{nombreEmpleado}/{apellidoEmpleado}/{cargo}/" +
               "{sucursal}/{antiguedadAnios}")
    public String guardarCambios(@PathVariable("legajo") int legajo,
                                 @PathVariable("nombreEmpleado") String nombreEmpleado,
                                 @PathVariable("apellidoEmpleado") String apellidoEmpleado,
                                 @PathVariable("cargo") String cargo,
                                 @PathVariable("sucursal") String sucuarsal,
                                 @PathVariable("antiguedadAnios") int antiguedadAnios){

        empleadosService.guardarEmpleado(new Empleados(legajo,nombreEmpleado,apellidoEmpleado,
                cargo,sucuarsal,antiguedadAnios));

        return "exitoso";
    }

    @GetMapping("/eliminarEmpleado/{legajo}")
    public String eliminarEmpleado(Empleados empleado){
        Empleados empleadoEliminar = empleadosService.buscarEmpleado(empleado.getLegajo());
        empleadosService.eliminarEmpleado(empleadoEliminar);

        return "eliminacion exitosa";
    }



}
