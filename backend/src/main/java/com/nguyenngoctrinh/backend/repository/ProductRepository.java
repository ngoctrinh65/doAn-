package com.nguyenngoctrinh.backend.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nguyenngoctrinh.backend.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM Product p WHERE p.line.id = :lineId")
    List<Product> findByLineId(Long lineId);

    @Query("SELECT p FROM Product p WHERE p.title = :title")
    List<Product> findByTitle(String title);

    @Query("SELECT p FROM Product p WHERE p.title = :title AND p.line.id = :lineId")
    List<Product> findByTitleAndLineId(String title, Long lineId);

    Page<Product> findAll(Pageable pageable);

    @Query("SELECT p FROM Product p ORDER BY created_at DESC")
    List<Product> findLatestProducts(Pageable pageable);


    Page<Product> findProductsByLineId(Long lineId, Pageable pageable);
}
