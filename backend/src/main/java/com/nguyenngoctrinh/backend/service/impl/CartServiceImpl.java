package com.nguyenngoctrinh.backend.service.impl;

import com.nguyenngoctrinh.backend.entity.Cart;
import com.nguyenngoctrinh.backend.entity.CartItem;
import com.nguyenngoctrinh.backend.entity.Product;
import com.nguyenngoctrinh.backend.entity.User;

import com.nguyenngoctrinh.backend.repository.CartItemRepository;
import com.nguyenngoctrinh.backend.repository.CartRepository;
import com.nguyenngoctrinh.backend.repository.ProductRepository;
import com.nguyenngoctrinh.backend.repository.UserRepository;
import com.nguyenngoctrinh.backend.service.CartService;
import org.springframework.stereotype.Service;
import lombok.AllArgsConstructor;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CartServiceImpl implements CartService {
    private final CartRepository cartRepository;
    private final CartItemRepository cartItemRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    @Override
    public Cart addToCart(Long cartId, Long productId, int quantity) {
        Cart cart;
        if (cartId == null) {
            // Create a new cart if cartId is not provided
            cart = new Cart();
            cart = cartRepository.save(cart);
            cartId = cart.getId();
        } else {
            // Find cart by cartId
            cart = cartRepository.findById(cartId)
                    .orElseThrow(() -> new RuntimeException("Cart not found"));
        }
    
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    
        Optional<CartItem> existingCartItem = cartItemRepository.findByCartAndProduct(cart, product);
        if (existingCartItem.isPresent()) {
            CartItem cartItem = existingCartItem.get();
            cartItem.setQuantity(cartItem.getQuantity() + quantity);
            cartItemRepository.save(cartItem);
        } else {
            CartItem cartItem = new CartItem();
            cartItem.setCart(cart);
            cartItem.setProduct(product);
            cartItem.setQuantity(quantity);
            cartItemRepository.save(cartItem);
        }
    
        return cart;
    }
    
    @Override
    public Cart createCart(Cart cart) {
        User user = cart.getUser();
        cart.setUser(user);
        return cartRepository.save(cart);
    }

    @Override
    public Cart getCartById(Long cartId) {
        return cartRepository.findById(cartId)
                .orElseThrow(() -> new RuntimeException("Cart not found"));
    }

    @Override
    public Cart updateCart(Cart cart) {
        if (!cartRepository.existsById(cart.getId())) {
            throw new RuntimeException("Cart not found");
        }
        return cartRepository.save(cart);
    }

    @Override
    public void deleteCart(Long userId) {
        List<Cart> carts = cartRepository.findByUserId(userId);
        cartRepository.deleteAll(carts);
    }

    @Override
    public List<Cart> getAllCarts() {
        return cartRepository.findAll();
    }

    @Override
    public List<Cart> getCartsByUserId(Long userId) {
        return cartRepository.findByUserId(userId);
    }
}
