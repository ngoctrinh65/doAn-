package com.nguyenngoctrinh.backend.service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.nguyenngoctrinh.backend.entity.Lines;

public interface LinesService {
      Lines createLines(Lines line);
      Lines getLinesById(Long lineId);
      Lines updateLines( Lines line);
      void deleteLines(Long lineId);
      public Page<Lines> getAllLines(Pageable pageable);

      // List<Lines> getLinesByCategoryId(Long categoryId);
      public Page<Lines> getLinesByCategoryId(Long categoryId,Pageable pageable);


}
