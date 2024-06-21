// package com.nguyenngoctrinh.backend.entity;

// import jakarta.persistence.*;
// import lombok.AllArgsConstructor;
// import lombok.Getter;
// import lombok.NoArgsConstructor;
// import lombok.Setter;
// import java.util.List;

// import com.fasterxml.jackson.annotation.JsonIgnore;

// @Getter
// @Setter
// @NoArgsConstructor
// @AllArgsConstructor
// @Entity
// @Table(name = "collections")
// public class Collection {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;
//     private String name;
//     private int isHome;

//     @JsonIgnore
//     @OneToMany(mappedBy = "collection", cascade = CascadeType.REMOVE)
//     private List<Product> product;

//     @JsonIgnore
//     @OneToMany(mappedBy = "collection", cascade = CascadeType.REMOVE)
//     private List<Lines> line;
// }
