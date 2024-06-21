package com.nguyenngoctrinh.backend.entity;
import java.sql.Date;
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
@Table(name="token")
public class Token {
   
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String token;

    //@Column(nullable = false)
    private Date created_at;

    // //@Column(nullable = false)
    // private Integer user_id;
    @ManyToOne
    private User user;
}



