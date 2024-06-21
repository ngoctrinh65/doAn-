package com.nguyenngoctrinh.backend.controller;

import java.util.List;
import lombok.AllArgsConstructor;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.nguyenngoctrinh.backend.entity.Lines;
import com.nguyenngoctrinh.backend.service.LinesService;

@RestController
@AllArgsConstructor
@RequestMapping("api/lines")
@CrossOrigin(origins = "*", exposedHeaders = "Content-Range   ")

public class LinesController {
    private LinesService linesService;

    // Create Lines REST API
    @PostMapping
    public ResponseEntity<Lines> createLines(@RequestBody Lines Lines) {
        Lines savedLines = linesService.createLines(Lines);
        return new ResponseEntity<>(savedLines, HttpStatus.CREATED);
    }

    // Get Lines by id REST API
    // http://localhost:8080/api/Lines/1
    @GetMapping("{id}")
    public ResponseEntity<Lines> getLinesById(@PathVariable("id") Long LineId) {
        Lines Lines = linesService.getLinesById(LineId);
        return new ResponseEntity<>(Lines, HttpStatus.OK);
    }

    // Get All Liness REST API
    // http://localhost:8080/api/Lines
    @GetMapping
    public ResponseEntity<List<Lines>> getAllLines(
        @RequestParam(defaultValue = "0") Integer page,
        @RequestParam(defaultValue = "20") Integer size,
        @RequestParam(required = false) Long categoryId
    ) 
    {
        Pageable pageable = PageRequest.of(page, size);
        Page<Lines> lines;
        if (categoryId != null) {
            lines = linesService.getLinesByCategoryId(categoryId, pageable);
            
            } 
            else {
    
                lines = linesService.getAllLines(pageable);
    
            }
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "items " + pageable.getOffset() + "-" + (pageable.getOffset() + lines.getSize()) +
        "/" + lines.getTotalElements());
        return ResponseEntity.ok().headers(headers).body(lines.getContent());
    }

    
    // Update Lines REST API
    @PutMapping("{id}")
    // http://localhost:8080/api/Lines/1
    public ResponseEntity<Lines> updateLines(@PathVariable("id") Long LineId,
            @RequestBody Lines Lines) {
        Lines.setId(LineId);
        Lines updatedLines = linesService.updateLines(Lines);
        return new ResponseEntity<>(updatedLines, HttpStatus.OK);
    }

    // Delete Lines REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteLines(@PathVariable("id") Long LineId) {
        linesService.deleteLines(LineId);
        return new ResponseEntity<>("Lines successfully deleted", HttpStatus.OK);
    }

   
}
