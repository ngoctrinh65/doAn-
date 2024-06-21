package com.nguyenngoctrinh.backend.service.impl;
import lombok.AllArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.nguyenngoctrinh.backend.entity.Lines;
import com.nguyenngoctrinh.backend.service.LinesService;
import com.nguyenngoctrinh.backend.repository.LinesRepository;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class LinesServiceImpl implements LinesService {

    private LinesRepository linesRepository;

    @Override
    public Lines createLines(Lines lines) {
        return linesRepository.save(lines);
    }

    @Override
    public Lines getLinesById(Long lineId) {
        Optional<Lines> optionalLines = linesRepository.findById(lineId);
        return optionalLines.get();
    }

 
    @Override
    public Page<Lines> getAllLines(Pageable pageable) {
        return linesRepository.findAll(pageable);
    }

    @Override
    public Lines updateLines(Lines lines) {
        Lines existingLines = linesRepository.findById(lines.getId()).get();
        existingLines.setName(lines.getName());
        existingLines.setIsHome(lines.getIsHome());
        existingLines.setCategory(lines.getCategory());
        existingLines.setProduct(lines.getProduct());

        Lines updateLines = linesRepository.save(existingLines);
        return updateLines;
    }

    @Override
    public void deleteLines(Long lineId) {
        linesRepository.deleteById(lineId);
    }

    @Override
    public Page<Lines> getLinesByCategoryId(Long categoryId, Pageable pageable) {
        return linesRepository.findByCategory_Id(categoryId, pageable);
    }
   
   
}
