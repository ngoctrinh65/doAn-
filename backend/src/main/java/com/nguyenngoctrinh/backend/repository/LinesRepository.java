package com.nguyenngoctrinh.backend.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import com.nguyenngoctrinh.backend.entity.Lines;
public interface LinesRepository extends JpaRepository<Lines, Long>{
    Page<Lines> findByCategory_Id(Long categoryId, Pageable pageable);
}

