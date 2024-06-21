package com.nguyenngoctrinh.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.nguyenngoctrinh.backend.entity.Category;
public interface CategoryRepository extends JpaRepository<Category, Long>{
    

    
}

