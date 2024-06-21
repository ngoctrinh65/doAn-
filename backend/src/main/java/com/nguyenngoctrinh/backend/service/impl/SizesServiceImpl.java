package com.nguyenngoctrinh.backend.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.nguyenngoctrinh.backend.entity.Sizes;
import com.nguyenngoctrinh.backend.service.SizesService;
import com.nguyenngoctrinh.backend.repository.SizesRepository;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class SizesServiceImpl implements SizesService {

    private SizesRepository sizesRepository;

    @Override
    public Sizes createSizes(Sizes Sizes) {
        return sizesRepository.save(Sizes);
    }

    @Override
    public Sizes getSizesById(Long SizesId) {
        Optional<Sizes> optionalSizes = sizesRepository.findById(SizesId);
        return optionalSizes.get();
    }

    @Override
    public List<Sizes> getAllSizes() {
        return sizesRepository.findAll();
    }

    @Override
    public Sizes updateSizes(Sizes Sizes) {
        Sizes existingSizes = sizesRepository.findById(Sizes.getId()).get();
        existingSizes.setSizes(Sizes.getSizes());
        existingSizes.setIsHome(Sizes.getIsHome());

        Sizes updateSizes = sizesRepository.save(existingSizes);
        return updateSizes;
    }

    @Override
    public void deleteSizes(Long SizesId) {
        sizesRepository.deleteById(SizesId);
    }


}
