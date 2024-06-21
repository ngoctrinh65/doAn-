package com.nguyenngoctrinh.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenngoctrinh.backend.entity.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {
    List<Sale> findAllByOrderBySaleDateDesc();
}