package com.nguyenngoctrinh.backend.service.impl;

import com.nguyenngoctrinh.backend.entity.Cart;
import com.nguyenngoctrinh.backend.entity.CartItem;
import com.nguyenngoctrinh.backend.entity.Product;
import com.nguyenngoctrinh.backend.repository.CartItemRepository;
import com.nguyenngoctrinh.backend.service.CartItemService;
import com.nguyenngoctrinh.backend.service.CartService;
import com.nguyenngoctrinh.backend.service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CartItemServiceImpl implements CartItemService {

    @Autowired
    private CartItemRepository cartItemRepository;
  
    @Override
    public CartItem createCartItem(CartItem cartItem) {
        // Lấy thông tin về sản phẩm từ cơ sở dữ liệu
        Product product = cartItem.getProduct();

        // Lấy thông tin về giỏ hàng từ cơ sở dữ liệu
        Cart cart = cartItem.getCart();

        // Thiết lập thông tin về sản phẩm và giỏ hàng cho đối tượng CartItem
        cartItem.setProduct(product);
        cartItem.setCart(cart);

        // Lưu đối tượng CartItem vào cơ sở dữ liệu
        return cartItemRepository.save(cartItem);
    }

    @Override
    public CartItem getCartItemById(Long cartItemId) {
        return cartItemRepository.findById(cartItemId).orElse(null);
    }

    @Override
    public List<CartItem> getAllCartItems() {
        return cartItemRepository.findAll();
    }

    @Override
    public Optional<CartItem> updateCartItem(Long cartId, Long productId, int newQuantity) {
        Optional<CartItem> existingCartItem = cartItemRepository.findByCartIdAndProductId(cartId, productId);

        if (existingCartItem.isPresent()) {
            CartItem cartItem = existingCartItem.get();
            // Update the cart item with new quantity
            cartItem.setQuantity(newQuantity);
            // Save the updated cart item
            return Optional.of(cartItemRepository.save(cartItem));
        } else {
            return Optional.empty(); // Return empty optional if the cart item doesn't exist
        }
    }

    @Override
    public void deleteAllCartItems(Long cartId) {
        List<CartItem> cartItems = cartItemRepository.findByCartId(cartId);
        for (CartItem cartItem : cartItems) {
            cartItemRepository.delete(cartItem);
        }
    }

    @Override
    public List<CartItem> getCartItemsByCartId(Long cartId) {
        return cartItemRepository.findByCartId(cartId); // Assuming this method exists in your repository
    }

    @Override
    public void deleteCartItemByCartIdAndProductId(Long cartId, Long productId) {
        Optional<CartItem> cartItem = cartItemRepository.findByCartIdAndProductId(cartId, productId);
        cartItem.ifPresent(cartItemRepository::delete);
    }

    @Override
    public Optional<CartItem> getCartItemByCartIdAndProductId(Long cartId, Long productId) {
        return cartItemRepository.findByCartIdAndProductId(cartId, productId);
    }
}
