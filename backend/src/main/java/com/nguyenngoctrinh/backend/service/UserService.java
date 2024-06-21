package com.nguyenngoctrinh.backend.service;
import java.util.List;
import com.nguyenngoctrinh.backend.entity.User;

public interface UserService {
    public  User createUser(User user);
    public  User getUserById(Long userId);
    public  User updateUser( User user);
    public  void deleteUser(Long userId);
    public  List <User> getAllUsers();
}