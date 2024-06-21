package com.nguyenngoctrinh.backend.service.impl;

import lombok.AllArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import com.nguyenngoctrinh.backend.entity.Product;
import com.nguyenngoctrinh.backend.service.ProductService;
import com.nguyenngoctrinh.backend.repository.ProductRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductService {
    private ProductRepository productRepository;

    @Override
    public List<Product> getProductsByCondition(String title, Long lineId) {
        if (title != null && lineId != null) {
            return productRepository.findByTitleAndLineId(title, lineId);
        } else if (title != null) {
            return productRepository.findByTitle(title);
        } else if (lineId != null) {
            return productRepository.findByLineId(lineId);
        } else {
            return new ArrayList<>(); // Trả về danh sách trống nếu không có điều kiện
        }
    }

    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product getProductById(Long productId) {
        Optional<Product> optionalProduct = productRepository.findById(productId);
        return optionalProduct.orElse(null);
    }

    @Override
    public Page<Product> getAllProducts(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    @Override
    public Product updateProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public void deleteProduct(Long productId) {
        productRepository.deleteById(productId);
    }
    @Override
    public Page<Product> getProductsByLinesId(Long lineId, Pageable pageable) {
        return productRepository.findProductsByLineId(lineId, pageable); // Triển khai phương thức này
    }

    public List<Product> getLatestProductsInLines(int pageSize) {
        PageRequest pageRequest = PageRequest.of(0, pageSize, Sort.by(Sort.Direction.DESC, "created_at"));
        return productRepository.findLatestProducts(pageRequest);
    }
    @Override
    public List<Product> getTopDiscountedProducts(int limit) {
        PageRequest pageRequest = PageRequest.of(0, limit, Sort.by(Sort.Direction.DESC, "discount"));
        return productRepository.findAll(pageRequest).getContent();
    }

}
