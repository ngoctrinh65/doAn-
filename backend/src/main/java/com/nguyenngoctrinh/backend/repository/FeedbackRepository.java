package com.nguyenngoctrinh.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.nguyenngoctrinh.backend.entity.Feedback;
public interface FeedbackRepository extends JpaRepository<Feedback, Long>{
    
}

