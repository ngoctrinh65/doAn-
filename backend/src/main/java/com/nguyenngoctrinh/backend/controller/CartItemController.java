package com.nguyenngoctrinh.backend.controller;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.nguyenngoctrinh.backend.entity.CartItem;
import com.nguyenngoctrinh.backend.service.CartItemService;
import java.util.List;
import java.util.Map; // Import Map here
import java.util.Optional;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" }, exposedHeaders = "Content-Range")
@RequestMapping("api/cartItems")
public class CartItemController {
    private final CartItemService cartItemService;

    // Create CartItem REST API
    @PostMapping
    public ResponseEntity<CartItem> createCartItem(@RequestBody CartItem cartItem) {
        CartItem savedCartItem = cartItemService.createCartItem(cartItem);
        return new ResponseEntity<>(savedCartItem, HttpStatus.CREATED);
    }

    // Get CartItem by id REST API
    @GetMapping("{id}")
    public ResponseEntity<CartItem> getCartItemById(@PathVariable("id") Long cartItemId) {
        CartItem cartItem = cartItemService.getCartItemById(cartItemId);
        return new ResponseEntity<>(cartItem, HttpStatus.OK);
    }

    // Get All CartItems or CartItems by CartId REST API
    // http://localhost:8080/api/cartItems?cartId=40
    @GetMapping
    public ResponseEntity<List<CartItem>> getCartItems(@RequestParam(value = "cartId", required = false) Long cartId) {
        List<CartItem> cartItems;
        if (cartId != null) {
            cartItems = cartItemService.getCartItemsByCartId(cartId);
        } else {
            cartItems = cartItemService.getAllCartItems();
        }

        if (cartItems.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "items 0-" + cartItems.size() + "/" + cartItems.size());
        return ResponseEntity.ok().headers(headers).body(cartItems);
    }

    @PutMapping("/{cartId}/{productId}")
    public ResponseEntity<CartItem> updateCartItem(
            @PathVariable("cartId") Long cartId,
            @PathVariable("productId") Long productId,
            @RequestBody Map<String, Integer> update) {
        Integer newQuantity = update.get("quantity");
        if (newQuantity != null) {
            Optional<CartItem> updatedCartItem = cartItemService.updateCartItem(cartId, productId, newQuantity);
            if (updatedCartItem.isPresent()) {
                return new ResponseEntity<>(updatedCartItem.get(), HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{cartId}/{productId}")
    public ResponseEntity<String> deleteCartItemByCartIdAndProductId(
            @PathVariable("cartId") Long cartId,
            @PathVariable("productId") Long productId) {
        cartItemService.deleteCartItemByCartIdAndProductId(cartId, productId);
        return new ResponseEntity<>("CartItem successfully deleted!", HttpStatus.OK);
    }

    @DeleteMapping("/delete")
public ResponseEntity<String> deleteAllCartItems(@RequestParam("cartId") Long cartId) {
    try {
        cartItemService.deleteAllCartItems(cartId);
        return new ResponseEntity<>("Cart items for cart ID " + cartId + " deleted successfully!", HttpStatus.OK);
    } catch (Exception e) {
        // Log the exception (you can use a logger instead of System.out)
        System.err.println("Error occurred while deleting cart items: " + e.getMessage());
        e.printStackTrace();

        return new ResponseEntity<>("An error occurred while deleting cart items.", HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
}
