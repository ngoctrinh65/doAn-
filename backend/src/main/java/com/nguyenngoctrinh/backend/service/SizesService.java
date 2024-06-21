package com.nguyenngoctrinh.backend.service;

import java.util.List;
import com.nguyenngoctrinh.backend.entity.Sizes;

public interface SizesService {
      Sizes createSizes(Sizes Sizes);
      Sizes getSizesById(Long SizesId);
      Sizes updateSizes( Sizes Sizes);
      void deleteSizes(Long SizesId);
      List<Sizes> getAllSizes();
}
