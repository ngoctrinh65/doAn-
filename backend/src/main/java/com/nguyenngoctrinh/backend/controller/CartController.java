package com.nguyenngoctrinh.backend.controller;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpHeaders;
import com.nguyenngoctrinh.backend.entity.Cart;

import com.nguyenngoctrinh.backend.service.CartService;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" }, exposedHeaders = "Content-Range")
@RequestMapping("api/carts")
public class CartController {
    private CartService CartService;
    // Create Cart REST API

    @PostMapping
    public ResponseEntity<Cart> createCart(@RequestBody Cart Cart) {
        Cart savedCart = CartService.createCart(Cart);
        return new ResponseEntity<>(savedCart, HttpStatus.CREATED);

    }

    // Get Cart by id REST API

    // http://localhost:8080/api/Carts/1

    @GetMapping("{id}")

    public ResponseEntity<Cart> getCartById(@PathVariable("id") Long CartId) {
        Cart Cart = CartService.getCartById(CartId);
        return new ResponseEntity<>(Cart, HttpStatus.OK);
    }
    // Get All Carts REST API

    // http://1ocalhost:8080/api/Carts

    @GetMapping

    public ResponseEntity<List<Cart>> getAllCarts() {

        List<Cart> users = CartService.getAllCarts();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "items 0-" + users.size() + "/" + users.size());
        return ResponseEntity.ok().headers(headers).body(users);

    }

    // Update Cart REST API
    @PutMapping("{id}")
    // http://localhost:8080/api/Carts/1
    public ResponseEntity<Cart> updateCart(@PathVariable("id") Long CartId, @RequestBody Cart Cart) {
        Cart.setId(CartId);
        Cart updatedCart = CartService.updateCart(Cart);
        return new ResponseEntity<>(updatedCart, HttpStatus.OK);
    }
    // Delete Cart REST API

    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteCartByUserId(@RequestParam("userId") Long userId) {
        CartService.deleteCart(userId);
        return new ResponseEntity<>("Cart successfully deleted for user " + userId, HttpStatus.OK);
    }

    // http://localhost:8080/api/carts/user/2
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Cart>> getCartsByUserId(@PathVariable("userId") Long userId) {
        List<Cart> carts = CartService.getCartsByUserId(userId);
        if (carts.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Handle empty cart list
        }
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "items 0-" + (carts.size() - 1) + "/" + carts.size());
        return ResponseEntity.ok().headers(headers).body(carts);
    }
}