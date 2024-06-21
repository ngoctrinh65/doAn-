package com.nguyenngoctrinh.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenngoctrinh.backend.entity.ProductSize;

public interface ProductSizeRepository extends JpaRepository<ProductSize, Long> {
}
