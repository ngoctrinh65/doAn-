package com.nguyenngoctrinh.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.nguyenngoctrinh.backend.entity.Gallery;
import java.util.List;

public interface GalleryRepository extends JpaRepository<Gallery, Long>{
    List<Gallery> findByNote(String note);
}

