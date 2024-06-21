package com.nguyenngoctrinh.backend.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nguyenngoctrinh.backend.entity.Cart;

public interface CartRepository extends JpaRepository<Cart, Long> {
    List<Cart> findByUserId(Long userId); 
}
