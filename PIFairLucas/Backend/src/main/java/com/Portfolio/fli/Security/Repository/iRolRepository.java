/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.Portfolio.fli.Security.Repository;

import com.Portfolio.fli.Security.Entity.Rol;
import com.Portfolio.fli.Security.Enum.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface iRolRepository extends JpaRepository<Rol, Integer>{
    Optional<Rol> findRolNombre (RolNombre rolNombre);

    public Optional<Rol> findByRolNombre(RolNombre rolNombre);
    
}
