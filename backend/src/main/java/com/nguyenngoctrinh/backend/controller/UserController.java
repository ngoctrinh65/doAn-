package com.nguyenngoctrinh.backend.controller;

import java.util.List;
import lombok.AllArgsConstructor;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nguyenngoctrinh.backend.entity.User;
import com.nguyenngoctrinh.backend.service.UserService;

@RestController
@AllArgsConstructor
@RequestMapping("api/users")
@CrossOrigin(origins =  "*" , exposedHeaders = "Content-Range    ")

public class UserController {

    // @Autowired
    // private UserDetailsService userDetailsService;

    private UserService userService;

    // Create User REST API
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User User) {
        User savedUser = userService.createUser(User);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    // Get User by id REST API
    // http://localhost:8080/api/users/1
    @GetMapping("{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long UserId) {
        User User = userService.getUserById(UserId);
        return new ResponseEntity<>(User, HttpStatus.OK);
    }

    // Get All Users REST API
    // http://localhost:8080/api/users
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> Users = userService.getAllUsers();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "item 0-" + Users.size() + "/" + Users.size());
        return ResponseEntity.ok().headers(headers).body(Users);
    }

    // Update User REST API
    @PutMapping("{id}")
    // http://localhost:8080/api/users/1
    public ResponseEntity<User> updateUser(@PathVariable("id") Long UserId,
            @RequestBody User User) {
        User.setId(UserId);
        User updatedUser = userService.updateUser(User);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }

    // Delete User REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Long UserId) {
        userService.deleteUser(UserId);
        return new ResponseEntity<>("User successfully deleted", HttpStatus.OK);
    }

    // @PostMapping("/register")
    // public ResponseEntity<User> registerUser(@RequestBody User user) {
    //     try {
    //         User registeredUser = userService.registerUser(user);
    //         return ResponseEntity.ok(registeredUser);
    //     } catch (RuntimeException e) {
    //         return ResponseEntity.badRequest().build();
    //     }
    // }

    // @GetMapping("/home")
    // public String home(Model model, Principal principal) {
    //     UserDetails userDetails = userDetailsService.loadUserByUsername(principal.getName());
    //     model.addAttribute("userdetail", userDetails);
    //     return "home";
    // }

    // @GetMapping("/login")
    // public String login(Model model, UserDto userDto) {
    //     model.addAttribute("user", userDto);
    //     return "login";
    // }

    // @GetMapping("/register")
    //     public String register(Model model , UserDto userDto){
    //         model.addAttribute("user", userDto);
    //         return "register";
    //     }

    // @PostMapping("/register")
    // public String registerSave(@ModelAttribute("user") UserDto userDto , Model model){
    //     User user = userService.findByUsername(userDto.getUsername());
    //     if(user != null){
    //         model.addAttribute("userexit", user);
    //         return "register";
    //     }
    //     userService.save(userDto);
    //     return "register";
    // }
}

// @PostMapping("/login")
// public ResponseEntity<?> login(@RequestBody User user) {
// User userInDb = userService.findByUsername(user.getUsername());
// if (userInDb != null && userInDb.getPassword().equals(user.getPassword())) {
// // This is a simple check, in a real application you'd use encrypted
// passwords and JWT tokens or sessions
// return ResponseEntity.ok("Logged in successfully");
// }
// return ResponseEntity.badRequest().body("Invalid credentials");
// }
