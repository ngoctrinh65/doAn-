package com.nguyenngoctrinh.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.nguyenngoctrinh.backend.entity.Token;
public interface TokenRepository extends JpaRepository<Token, Long>{
    
}

