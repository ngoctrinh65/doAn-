package com.nguyenngoctrinh.backend.service;

import java.util.List;
import com.nguyenngoctrinh.backend.entity.Cart;

public interface CartService {
    Cart createCart(Cart cart);
    Cart getCartById(Long cartId);
    Cart updateCart(Cart cart);
    void deleteCart(Long cartId);
    List<Cart> getAllCarts();
    Cart addToCart(Long cartId, Long productId, int quantity);
    List<Cart> getCartsByUserId(Long userId); // Add this method
}
