package com.nguyenngoctrinh.backend.controller;
import java.util.List;
import lombok.AllArgsConstructor;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.nguyenngoctrinh.backend.entity.Feedback;
import com.nguyenngoctrinh.backend.service.FeedbackService;

@RestController
@AllArgsConstructor
@RequestMapping("api/feedbacks")
@CrossOrigin(origins = "*", exposedHeaders= "Content-Range    ")

public class FeedbackController {
    private FeedbackService FeedbackService;
    //Create Feedback REST API
    @PostMapping
    public ResponseEntity<Feedback> createFeedback(@RequestBody Feedback Feedback){
        Feedback savedFeedback = FeedbackService.createFeedback(Feedback);
        return new ResponseEntity<>(savedFeedback,HttpStatus.CREATED);
    }

    //Get Feedback by id REST API 
    //http://localhost:8080/api/Feedbacks/1
    @GetMapping("{id}")
    public ResponseEntity<Feedback> getFeedbackById(@PathVariable("id")Long FeedbackId){
        Feedback Feedback = FeedbackService.getFeedbackById(FeedbackId);
        return new ResponseEntity<>(Feedback,HttpStatus.OK);
    }

    //Get All Feedbacks REST API 
    //http://localhost:8080/api/Feedbacks
    @GetMapping
    public ResponseEntity<List<Feedback>> getAllFeedbacks(){
        List<Feedback>Feedbacks = FeedbackService.getAllFeedbacks();
      HttpHeaders headers = new HttpHeaders();
    headers.add("Content-Range", "item 0-"+ Feedbacks.size()+"/"+Feedbacks.size());
    return ResponseEntity.ok().headers(headers).body(Feedbacks);
    }

    //Update Feedback REST API
    @PutMapping("{id}")
    //http://localhost:8080/api/Feedbacks/1
    public ResponseEntity<Feedback>updateFeedback(@PathVariable("id") Long FeedbackId,
    @RequestBody Feedback Feedback){
        Feedback.setId(FeedbackId);
        Feedback updatedFeedback = FeedbackService.updateFeedback(Feedback);
        return new ResponseEntity<>(updatedFeedback,HttpStatus.OK);
    }
    //Delete Feedback REST API 
    @DeleteMapping("{id}")
    public ResponseEntity<String>deleteFeedback(@PathVariable("id") Long FeedbackId){
        FeedbackService.deleteFeedback(FeedbackId);
        return new ResponseEntity<>("Feedback successfully deleted",HttpStatus.OK);
    }
}