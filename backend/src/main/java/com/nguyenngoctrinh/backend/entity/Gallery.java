package com.nguyenngoctrinh.backend.entity;


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
@Table(name="gallery")
public class Gallery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    //@Column(nullable = false)
    private String thumbnail;
    private String note;


    //@Column(nullable = false)
    // private Integer product_id;
    @ManyToOne
    private Product product;
}



