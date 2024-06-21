package com.nguyenngoctrinh.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.nguyenngoctrinh.backend.entity.ProductSize;
import com.nguyenngoctrinh.backend.service.ProductSizeService;

@RestController
@AllArgsConstructor
@RequestMapping("/api/product_sizes")
@CrossOrigin(origins = "*", exposedHeaders = "Content-Range ")
public class ProductSizeController {
    private ProductSizeService productSizeService;

    // Create ProductSize REST API
    @PostMapping
    public ResponseEntity<ProductSize> createProductSize(@RequestBody ProductSize productSize) {
        ProductSize savedProductSize = productSizeService.createProductSize(productSize);
        return new ResponseEntity<>(savedProductSize, HttpStatus.CREATED);
    }

    // Get ProductSize by ID REST API
    @GetMapping("/{id}")
    public ResponseEntity<ProductSize> getProductSizeById(@PathVariable Long id) {
        ProductSize productSize = productSizeService.getProductSizeById(id);
        return new ResponseEntity<>(productSize, HttpStatus.OK);
    }

    // Update ProductSize REST API
    @PutMapping("/{id}")
    public ResponseEntity<ProductSize> updateProductSize(@PathVariable Long id, @RequestBody ProductSize productSizeDetails) {
        ProductSize updatedProductSize = productSizeService.updateProductSize(id, productSizeDetails);
        return new ResponseEntity<>(updatedProductSize, HttpStatus.OK);
    }

    // Delete ProductSize REST API
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProductSize(@PathVariable Long id) {
        productSizeService.deleteProductSize(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
