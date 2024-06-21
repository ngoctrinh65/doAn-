package com.nguyenngoctrinh.backend.controller;

import java.util.List;
import lombok.AllArgsConstructor;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.nguyenngoctrinh.backend.entity.Sizes;
import com.nguyenngoctrinh.backend.service.SizesService;

@RestController
@AllArgsConstructor
@RequestMapping("api/sizes")
@CrossOrigin(origins = "*", exposedHeaders = "Content-Range   ")

public class SizesController {
    private SizesService SizesService;

    // Create Sizes REST API
    @PostMapping
    public ResponseEntity<Sizes> createSizes(@RequestBody Sizes Sizes) {
        Sizes savedSizes = SizesService.createSizes(Sizes);
        return new ResponseEntity<>(savedSizes, HttpStatus.CREATED);
    }

    // Get Sizes by id REST API
    // http://localhost:8080/api/Sizes/1
    @GetMapping("{id}")
    public ResponseEntity<Sizes> getSizesById(@PathVariable("id") Long SizesId) {
        Sizes Sizes = SizesService.getSizesById(SizesId);
        return new ResponseEntity<>(Sizes, HttpStatus.OK);
    }

    // Get All Sizess REST API
    // http://localhost:8080/api/Sizes
    @GetMapping
    public ResponseEntity<List<Sizes>> getAllSizes() {
        List<Sizes> Sizes = SizesService.getAllSizes();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "item 0-" + Sizes.size() + "/" + Sizes.size());
        return ResponseEntity.ok().headers(headers).body(Sizes);
    }

    // Update Sizes REST API
    @PutMapping("{id}")
    // http://localhost:8080/api/Sizes/1
    public ResponseEntity<Sizes> updateSizes(@PathVariable("id") Long SizesId,
            @RequestBody Sizes Sizes) {
        Sizes.setId(SizesId);
        Sizes updatedSizes = SizesService.updateSizes(Sizes);
        return new ResponseEntity<>(updatedSizes, HttpStatus.OK);
    }

    // Delete Sizes REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteSizes(@PathVariable("id") Long SizesId) {
        SizesService.deleteSizes(SizesId);
        return new ResponseEntity<>("Sizes successfully deleted", HttpStatus.OK);
    }
}
