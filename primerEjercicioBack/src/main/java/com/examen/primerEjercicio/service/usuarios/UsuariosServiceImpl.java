package com.examen.primerEjercicio.service.usuarios;

import com.examen.primerEjercicio.repository.usuario.Usuarios;
import com.examen.primerEjercicio.repository.usuario.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UsuariosServiceImpl implements UsuariosService{

    @Autowired
    private UsuariosRepository usuariosRepository;

    @Override
    public Usuarios getUsuarioByNombre(String nombre) {
        return usuariosRepository.findByNombreUsuario(nombre);

    }
}

