    
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
@Table(name = "feedback")
public class Feedback {
   
  
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //@Column(nullable = false)
    private Date created_at;

    //@Column(nullable = false)
    private String email;

    //@Column(nullable = false)
    private String firstname;

    //@Column(nullable = false)
    private String lastname;

    //@Column(nullable = false)
    private String note;

    //@Column(nullable = false)
    private String phone_number;

    //@Column(nullable = false)
    private Integer status;

    //@Column(nullable = false)
    private String subject_name;

    //@Column(nullable = false)
    private Date update_at;
 

}

    
  