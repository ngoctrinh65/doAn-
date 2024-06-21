package com.nguyenngoctrinh.backend.entity;

import java.util.List;
import java.sql.Date;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // @Column(nullable = false)
    private String address;

    // @Column(nullable = false)
    private String email;

    // @Column(nullable = false)
    private String fullname;

    // @Column(nullable = false)
    private String note;

    // @Column(nullable = false)
    private Date order_date;

    // @Column(nullable = false)
    private String phone_number;

    // @Column(nullable = false)
    private Integer status;

    // @Column(nullable = false)
    private Integer total_money;

    // //@Column(nullable = false)
    // private Integer user_id;

    @ManyToOne
    private User user;

    @JsonIgnore
    @OneToMany(mappedBy = "order")
    private List<OrderDetail> orderdetail;

}
