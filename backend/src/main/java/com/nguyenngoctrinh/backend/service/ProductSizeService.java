package com.nguyenngoctrinh.backend.service;

import com.nguyenngoctrinh.backend.entity.ProductSize;
import java.util.List;

public interface ProductSizeService {
    ProductSize createProductSize(ProductSize productSize);
    ProductSize getProductSizeById(Long productSizeId);
    List<ProductSize> getAllProductSizes();
    ProductSize updateProductSize(Long productSizeId, ProductSize productSizeDetails);
    void deleteProductSize(Long productSizeId);
}
