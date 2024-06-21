package com.nguyenngoctrinh.backend.service;

import java.util.List;
import com.nguyenngoctrinh.backend.entity.Role;

public interface RoleService {
    public  Role createRole(Role role);
    public  Role getRoleById(Long roleId);
    public  Role updateRole( Role role);
    public  void deleteRole(Long roleId);
    public  List <Role> getAllRoles();
}



    

