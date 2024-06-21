package com.nguyenngoctrinh.backend.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.nguyenngoctrinh.backend.entity.Product;

public interface ProductService {
    Product createProduct(Product product);

    Product getProductById(Long productId);

    Page<Product> getAllProducts(Pageable pageable);

    Product updateProduct(Product product);

    void deleteProduct(Long productId);
    
    Page<Product> getProductsByLinesId(Long lineId, Pageable pageable);

    List<Product> getProductsByCondition(String title, Long lineId);

    List<Product> getLatestProductsInLines(int pageSize);
    
    List<Product> getTopDiscountedProducts(int limit);
}
