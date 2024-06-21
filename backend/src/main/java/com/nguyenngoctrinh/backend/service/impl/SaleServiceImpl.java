package com.nguyenngoctrinh.backend.service.impl;

import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nguyenngoctrinh.backend.entity.Sale;
import com.nguyenngoctrinh.backend.service.SaleService;
import com.nguyenngoctrinh.backend.repository.SaleRepository;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class SaleServiceImpl implements SaleService {

    private SaleRepository SaleRepository;

    @Override
    public Sale createSale(Sale Sale) {
        return SaleRepository.save(Sale);
    }

    @Override
    public Sale getSaleById(Long SaleId) {
        Optional<Sale> optionalSale = SaleRepository.findById(SaleId);
        return optionalSale.get();
    }

    @Override
    public List<Sale> getAllSales() {
        return SaleRepository.findAll();
    }

    @Override
    public Sale updateSale(Sale Sale) {
        Sale existingSale = SaleRepository.findById(Sale.getId()).get();
        existingSale.setProduct(Sale.getProduct());
        existingSale.setQuantitySold(Sale.getQuantitySold());
       existingSale.setSaleDate(Sale.getSaleDate());

        Sale updateSale = SaleRepository.save(existingSale);
        return updateSale;
    }

    @Override
    public void deleteSale(Long SaleId) {
        SaleRepository.deleteById(SaleId);
    }

    @Autowired
    private SaleRepository saleRepository;

    @Override
    public List<Sale> getRecentSales() {
        return saleRepository.findAllByOrderBySaleDateDesc();
    }


}
