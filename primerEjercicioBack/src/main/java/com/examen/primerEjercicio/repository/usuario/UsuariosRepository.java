package com.examen.primerEjercicio.repository.usuario;

import org.springframework.data.repository.CrudRepository;

public interface UsuariosRepository extends CrudRepository<Usuarios,Integer> {

    public Usuarios findByNombreUsuario(String nombreUsuario);

}
