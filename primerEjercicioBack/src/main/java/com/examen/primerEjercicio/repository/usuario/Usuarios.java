package com.examen.primerEjercicio.repository.usuario;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
@Table(name = "usuarios")
public class Usuarios implements Serializable {

    @Id
    private int idUsuario;

    private String nombreUsuario;

    private String passwordUsuario;
}
