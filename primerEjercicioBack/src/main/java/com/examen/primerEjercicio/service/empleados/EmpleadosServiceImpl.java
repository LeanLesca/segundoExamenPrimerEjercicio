package com.examen.primerEjercicio.service.empleados;

import com.examen.primerEjercicio.repository.empleado.Empleados;
import com.examen.primerEjercicio.repository.empleado.EmpleadosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmpleadosServiceImpl implements EmpleadosService{

    @Autowired
    EmpleadosRepository empleadosRepository;
    @Override
    public List<Empleados> recuperarListaEmpleados() {
        return (List<Empleados>)empleadosRepository.findAll();
    }

    @Override
    public void guardarEmpleado(Empleados empleado) {
        empleadosRepository.save(empleado);
    }

    @Override
    public void eliminarEmpleado(Empleados empleado) {
        empleadosRepository.delete(empleado);
    }

    @Override
    public Empleados buscarEmpleado(int legajo) {
        return empleadosRepository.findByLegajo(legajo);
    }
}
