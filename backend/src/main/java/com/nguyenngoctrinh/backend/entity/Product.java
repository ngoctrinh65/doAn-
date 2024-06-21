package com.nguyenngoctrinh.backend.entity;

import java.sql.Date;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date created_at;

    private Date updated_at;

    private int deleted;

    private String description;

    private String title;

    private Long discount;

    private Long price;

    private String thumbnail;
    
    private Long quantity;

    @ManyToOne
    private Lines line;

    @JsonIgnore
    @OneToMany(mappedBy = "product")
    private List<Gallery> gallery;

    @JsonIgnore
    @OneToMany(mappedBy = "product")
    private List<OrderDetail> orderdetail;

    @JsonIgnore
    @OneToMany(mappedBy = "product")
    private List<Sale> sale;

    
    @JsonIgnore
    @OneToMany(mappedBy = "product")
    private List<CartItem> cartItems;
}
