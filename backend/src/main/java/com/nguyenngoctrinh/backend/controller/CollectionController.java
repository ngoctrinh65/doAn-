// package com.nguyenngoctrinh.backend.controller;

// import java.util.List;
// import lombok.AllArgsConstructor;

// import org.springframework.http.HttpHeaders;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;
// import com.nguyenngoctrinh.backend.entity.Collection;
// // import com.nguyenngoctrinh.backend.service.CollectionService;

// @RestController
// @AllArgsConstructor
// @RequestMapping("api/collections")
// @CrossOrigin(origins = "*", exposedHeaders = "Content-Range    ")

// public class CollectionController {
//     // private CollectionService CollectionService;

//     // // Create Collection REST API
//     // @PostMapping
//     // public ResponseEntity<Collection> createCollection(@RequestBody Collection Collection) {
//     //     Collection savedCollection = CollectionService.createCollection(Collection);
//     //     return new ResponseEntity<>(savedCollection, HttpStatus.CREATED);
//     // }

//     // // Get Collection by id REST API
//     // // http://localhost:8080/api/Collections/1
//     // @GetMapping("{id}")
//     // public ResponseEntity<Collection> getCollectionById(@PathVariable("id") Long CollectionId) {
//     //     Collection Collection = CollectionService.getCollectionById(CollectionId);
//     //     return new ResponseEntity<>(Collection, HttpStatus.OK);
//     // }

//     // // Get All Collections REST API
//     // // http://localhost:8080/api/Collections
//     // @GetMapping
//     // public ResponseEntity<List<Collection>> getAllCategories() {
//     //     List<Collection> Collections = CollectionService.getAllCategories();
//     //     HttpHeaders headers = new HttpHeaders();
//     //     headers.add("Content-Range", "item 0-" + Collections.size() + "/" + Collections.size());
//     //     return ResponseEntity.ok().headers(headers).body(Collections);
//     // }

//     // // Update Collection REST API
//     // @PutMapping("{id}")
//     // // http://localhost:8080/api/Collections/1
//     // public ResponseEntity<Collection> updateCollection(@PathVariable("id") Long CollectionId,
//     //         @RequestBody Collection Collection) {
//     //     Collection.setId(CollectionId);
//     //     Collection updatedCollection = CollectionService.updateCollection(Collection);
//     //     return new ResponseEntity<>(updatedCollection, HttpStatus.OK);
//     // }

//     // // Delete Collection REST API
//     // @DeleteMapping("{id}")
//     // public ResponseEntity<String> deleteCollection(@PathVariable("id") Long CollectionId) {
//     //     CollectionService.deleteCollection(CollectionId);
//     //     return new ResponseEntity<>("Collection successfully deleted", HttpStatus.OK);
//     // }
// }
