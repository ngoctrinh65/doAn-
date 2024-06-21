package com.nguyenngoctrinh.backend.service.impl;

import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.nguyenngoctrinh.backend.entity.User;
import com.nguyenngoctrinh.backend.service.UserService;
import com.nguyenngoctrinh.backend.repository.UserRepository;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    // @Autowired
    // PasswordEncoder passwordEncoder;

        @Autowired
    private UserRepository userRepository;
    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getUserById(Long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        return optionalUser.get();
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User updateUser(User user) {
        User existingUser = userRepository.findById(user.getId()).get();
        existingUser.setUsername(user.getUsername());
        existingUser.setPassword(user.getPassword());
        existingUser.setFullname(user.getFullname());
        existingUser.setToken(user.getToken());
        existingUser.setOrders(user.getOrders());
        existingUser.setRole(user.getRole());

        User updateUser = userRepository.save(existingUser);
        return updateUser;
    }

    @Override
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }



    // public User registerUser(User user) {
    //     // Check if username already exists
    //     // if (userRepository.findByUsername(user.getUsername()).isPresent()) {
    //     //     throw new RuntimeException("Username already exists");
    //     // }
    //     // Ideally, hash the password here before saving
    //     return userRepository.save(user);
    // }


    
    // @Override
    // public User findByUsername(String username) {
    //     return userRepository.findByUsername(username);//.orElse(null)
    // }

    // @Override
    // public User save(UserDto userDto) {
    //     User user = new User(userDto.getFullname(),userDto.getUsername() , passwordEncoder.encode(userDto.getPassword()));
    //     return userRepository.save(user);
//}
}
