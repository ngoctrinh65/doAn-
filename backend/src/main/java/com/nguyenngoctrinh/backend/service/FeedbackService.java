package com.nguyenngoctrinh.backend.service;

import java.util.List;
import com.nguyenngoctrinh.backend.entity.Feedback;

public interface FeedbackService {
    public  Feedback createFeedback(Feedback feedback);
    public  Feedback getFeedbackById(Long feedbackId);
    public  Feedback updateFeedback( Feedback feedback);
    public  void deleteFeedback(Long feedbackId);
    public  List<Feedback> getAllFeedbacks();
}



    

