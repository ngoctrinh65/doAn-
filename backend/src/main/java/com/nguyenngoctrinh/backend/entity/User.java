package com.nguyenngoctrinh.backend.entity;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullname;
    private String username;
    private String password;
    private String email;

    private String address;

    public User(String fullname, String username, String password,String email,String address ) {
        this.fullname = fullname;
        this.username = username;
        this.password = password;
        this.email = email;
         this.address = address;
    }

    @ManyToOne
    private Role role;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Token> token;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Orders> orders;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Cart> cart;
}
