package com.nguyenngoctrinh.backend.service;

import com.nguyenngoctrinh.backend.entity.CartItem;
import java.util.List;
import java.util.Optional; // Import Optional

public interface CartItemService {
    CartItem createCartItem(CartItem cartItem);

    CartItem getCartItemById(Long cartItemId);

    List<CartItem> getAllCartItems();

    Optional<CartItem> updateCartItem(Long cartId, Long productId, int newQuantity); // Change return type

    void deleteAllCartItems(Long cartId);

    List<CartItem> getCartItemsByCartId(Long cartId);

    void deleteCartItemByCartIdAndProductId(Long cartId, Long productId); // New method
    // Thêm phương thức mới để xóa CartItem dựa trên cartId và productId

    Optional<CartItem> getCartItemByCartIdAndProductId(Long cartId, Long productId);
}
