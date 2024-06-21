package com.nguyenngoctrinh.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nguyenngoctrinh.backend.entity.Cart;
import com.nguyenngoctrinh.backend.entity.CartItem;
import com.nguyenngoctrinh.backend.entity.Product;
import java.util.List;
import java.util.Optional;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    // List<CartItem> findByCartIdAndProductId(Long cartId, Long productId); // Add this method
    List<CartItem> findByCartId(Long cartId);
    void deleteByCartId(Long cartId);
    Optional<CartItem> findByCartAndProduct(Cart cart, Product product);
    Optional<CartItem> findByCartIdAndProductId(Long cartId, Long productId); // Add this method

}
