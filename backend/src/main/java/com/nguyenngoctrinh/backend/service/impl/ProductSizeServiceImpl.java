package com.nguyenngoctrinh.backend.service.impl;

import com.nguyenngoctrinh.backend.entity.ProductSize;
import com.nguyenngoctrinh.backend.repository.ProductSizeRepository;
import com.nguyenngoctrinh.backend.service.ProductSizeService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductSizeServiceImpl implements ProductSizeService {

    @Autowired
    private ProductSizeRepository productSizeRepository;

    @Override
    public ProductSize createProductSize(ProductSize productSize) {
        return productSizeRepository.save(productSize);
    }

    @Override
    public ProductSize getProductSizeById(Long productSizeId) {
        Optional<ProductSize> optionalProductSize = productSizeRepository.findById(productSizeId);
        return optionalProductSize.orElse(null);
    }

    @Override
    public List<ProductSize> getAllProductSizes() {
        return productSizeRepository.findAll();
    }

    @Override
    public ProductSize updateProductSize(Long productSizeId, ProductSize productSizeDetails) {
        Optional<ProductSize> optionalProductSize = productSizeRepository.findById(productSizeId);
        if (optionalProductSize.isPresent()) {
            ProductSize existingProductSize = optionalProductSize.get();
            existingProductSize.setSize(productSizeDetails.getSize());
            existingProductSize.setProduct(productSizeDetails.getProduct());
            return productSizeRepository.save(existingProductSize);
        }
        return null;
    }

    @Override
    public void deleteProductSize(Long productSizeId) {
        productSizeRepository.deleteById(productSizeId);
    }
}
