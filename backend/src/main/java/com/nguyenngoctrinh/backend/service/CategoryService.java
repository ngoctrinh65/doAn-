package com.nguyenngoctrinh.backend.service;

import java.util.List;
import com.nguyenngoctrinh.backend.entity.Category;

public interface CategoryService {
      Category createCategory(Category category);
      Category getCategoryById(Long categoryId);
      Category updateCategory( Category category);
      void deleteCategory(Long categoryId);
      List<Category> getAllCategories();
}
