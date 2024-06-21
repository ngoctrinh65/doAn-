package com.nguyenngoctrinh.backend.service;
// package com.nguyenngoctrinh.backend.service;

// import java.util.Arrays;
// import java.util.Collection;

// import org.springframework.security.core.GrantedAuthority;
// import org.springframework.security.core.authority.SimpleGrantedAuthority;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.security.core.userdetails.UsernameNotFoundException;
// import org.springframework.stereotype.Service;

// import com.nguyenngoctrinh.backend.entity.User;
// import com.nguyenngoctrinh.backend.repository.UserRepository;


// @Service
// public class CustomUserDetailService implements UserDetailsService {
//     private UserRepository userRepository ; 
//     @Override
//     public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//         User user = userRepository.findByUsername(username);
//         if (user == null ){
//             throw new UsernameNotFoundException("Usename or Password not found");
//         }
//         return new CustomUserDetail(user.getFullname(),user.getUsername(),authorities(),user.getPassword());
//     }
//     public Collection <? extends GrantedAuthority> authorities()
//     {
//         return Arrays.asList(new SimpleGrantedAuthority("USER"));

//     }
// }
