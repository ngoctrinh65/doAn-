package com.nguyenngoctrinh.backend.controller;
import java.util.List;
import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nguyenngoctrinh.backend.entity.Sale;
import com.nguyenngoctrinh.backend.service.SaleService;

@RestController
@AllArgsConstructor
@RequestMapping("api/sales")
@CrossOrigin(origins ="*", exposedHeaders= "Content-Range    ")

public class SaleController {
    private SaleService SaleService;
    //Create Sale REST API
    @PostMapping
    public ResponseEntity<Sale> createSale(@RequestBody Sale Sale){
        Sale savedSale = SaleService.createSale(Sale);
        return new ResponseEntity<>(savedSale,HttpStatus.CREATED);
    }

    //Get Sale by id REST API 
    //http://localhost:8080/api/Sales/1
    @GetMapping("{id}")
    public ResponseEntity<Sale> getSaleById(@PathVariable("id")Long SaleId){
        Sale Sale = SaleService.getSaleById(SaleId);
        return new ResponseEntity<>(Sale,HttpStatus.OK);
    }

    //Get All Sales REST API 
    //http://localhost:8080/api/Sales
    @GetMapping
    public ResponseEntity<List<Sale>> getAllSales(){
        List<Sale>Sales = SaleService.getAllSales();
        HttpHeaders headers = new HttpHeaders();
    headers.add("Content-Range", "item 0-"+ Sales.size()+"/"+Sales.size());
    return ResponseEntity.ok().headers(headers).body(Sales);
    }

    //Update Sale REST API
    @PutMapping("{id}")
    //http://localhost:8080/api/Sales/1
    public ResponseEntity<Sale>updateSale(@PathVariable("id") Long SaleId,
    @RequestBody Sale Sale){
        Sale.setId(SaleId);
        Sale updatedSale = SaleService.updateSale(Sale);
        return new ResponseEntity<>(updatedSale,HttpStatus.OK);
    }
    //Delete Sale REST API 
    @DeleteMapping("{id}")
    public ResponseEntity<String>deleteSale(@PathVariable("id") Long SaleId){
        SaleService.deleteSale(SaleId);
        return new ResponseEntity<>("Sale successfully deleted",HttpStatus.OK);
    }


 


    @Autowired
    private SaleService saleService;

    @GetMapping("/recent")
    public ResponseEntity<List<Sale>> getRecentSales() {
        return ResponseEntity.ok(saleService.getRecentSales());
    }

}