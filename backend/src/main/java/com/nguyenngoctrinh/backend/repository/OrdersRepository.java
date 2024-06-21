package com.nguyenngoctrinh.backend.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenngoctrinh.backend.entity.Orders;
import java.util.List;

public interface OrdersRepository extends JpaRepository<Orders, Long>{
        List<Orders> findByUserId(Long userId); 

}

