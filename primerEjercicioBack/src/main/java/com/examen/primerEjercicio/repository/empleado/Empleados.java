package com.examen.primerEjercicio.repository.empleado;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "empleados")
public class Empleados {

    @Id
    private int legajo;

    private String nombreEmpleado;

    private String apellidoEmpleado;

    private String cargo;

    private String sucursal;

    private int antiguedadAnios;

}
