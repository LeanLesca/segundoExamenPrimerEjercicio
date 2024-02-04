package com.examen.primerEjercicio.controller;

import com.examen.primerEjercicio.repository.usuario.Usuarios;
import com.examen.primerEjercicio.service.usuarios.UsuariosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MainController {

    @Autowired
    UsuariosService usuarioService;

    @GetMapping(value="/validarUsuario/{nombreUsuario}/{passwordUsuario}")
    public String validarUsuario(@PathVariable("nombreUsuario")String nombreUsuario,
                                 @PathVariable("passwordUsuario")String passwordUsuario) {
        try {
            System.out.println("pase por aca!");
            Usuarios user = usuarioService.getUsuarioByNombre(nombreUsuario);
            System.out.println(user);
            if (user != null && user.getPasswordUsuario().equals(passwordUsuario)) {
                System.out.println("funco!");
                // Autenticación exitosa
                return "true";
            } else {
                // Autenticación falla
                return "usuario no existe o contraseña incorrectos";
            }
        } catch (DataAccessException e) {
            e.printStackTrace();
            return "Error al acceder a los datos";
        }
    }
}
