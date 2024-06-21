package com.nguyenngoctrinh.backend.controller;
import java.util.List;
import lombok.AllArgsConstructor;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.nguyenngoctrinh.backend.entity.Gallery;
import com.nguyenngoctrinh.backend.service.GalleryService;

@RestController
@AllArgsConstructor
@RequestMapping("api/galleries")
@CrossOrigin(origins = "*", exposedHeaders= "Content-Range    ")

public class GalleryController {
    private GalleryService GalleryService;
    //Create Gallery REST API
    @PostMapping
    public ResponseEntity<Gallery> createGallery(@RequestBody Gallery Gallery){
        Gallery savedGallery = GalleryService.createGallery(Gallery);
        return new ResponseEntity<>(savedGallery,HttpStatus.CREATED);
    }

    //Get Gallery by id REST API 
    //http://localhost:8080/api/Gallerys/1
    @GetMapping("{id}")
    public ResponseEntity<Gallery> getGalleryById(@PathVariable("id")Long GalleryId){
        Gallery Gallery = GalleryService.getGalleryById(GalleryId);
        return new ResponseEntity<>(Gallery,HttpStatus.OK);
    }

    //Get All Gallerys REST API 
    //http://localhost:8080/api/Gallerys
    @GetMapping
    public ResponseEntity<List<Gallery>> getAllGallerys(){
        List<Gallery>Gallerys = GalleryService.getAllGalleries();
      HttpHeaders headers = new HttpHeaders();
    headers.add("Content-Range", "item 0-"+ Gallerys.size()+"/"+Gallerys.size());
    return ResponseEntity.ok().headers(headers).body(Gallerys);
    }

    //Update Gallery REST API
    @PutMapping("{id}")
    //http://localhost:8080/api/Gallerys/1
    public ResponseEntity<Gallery>updateGallery(@PathVariable("id") Long GalleryId,
    @RequestBody Gallery Gallery){
        Gallery.setId(GalleryId);
        Gallery updatedGallery = GalleryService.updateGallery(Gallery);
        return new ResponseEntity<>(updatedGallery,HttpStatus.OK);
    }
    //Delete Gallery REST API 
    @DeleteMapping("{id}")
    public ResponseEntity<String>deleteGallery(@PathVariable("id") Long GalleryId){
        GalleryService.deleteGallery(GalleryId);
        return new ResponseEntity<>("Gallery successfully deleted",HttpStatus.OK);
    }

    @GetMapping("/galleries/{note}")
    public ResponseEntity<List<Gallery>> getGalleriesByNote(@PathVariable("note") String note) {
        List<Gallery> galleries = GalleryService.getGalleriesByNote(note);
        return new ResponseEntity<>(galleries, HttpStatus.OK);
    }
}