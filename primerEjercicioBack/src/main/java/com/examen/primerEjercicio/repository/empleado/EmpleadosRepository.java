package com.examen.primerEjercicio.repository.empleado;

import org.springframework.data.repository.CrudRepository;

public interface EmpleadosRepository extends CrudRepository<Empleados,Integer> {

    public Empleados findByLegajo(int legajo);
}
