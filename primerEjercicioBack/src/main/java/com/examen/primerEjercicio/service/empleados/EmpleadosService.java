package com.examen.primerEjercicio.service.empleados;

import com.examen.primerEjercicio.repository.empleado.Empleados;

import java.util.List;

public interface EmpleadosService {

    public List<Empleados> recuperarListaEmpleados();

    public void guardarEmpleado(Empleados empleado);


    public void eliminarEmpleado(Empleados empleado);

    public Empleados buscarEmpleado(int legajo);
}

