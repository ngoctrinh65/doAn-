package com.nguyenngoctrinh.backend.controller;

import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nguyenngoctrinh.backend.entity.CartItem;
import com.nguyenngoctrinh.backend.entity.OrderDetail;

import com.nguyenngoctrinh.backend.service.OrderDetailService;

@RestController
@AllArgsConstructor
@RequestMapping("api/orderdetails")
@CrossOrigin(origins = "*", exposedHeaders = "Content-Range    ")

public class OrderDetailController {
    private OrderDetailService OrderDetailService;

    @PostMapping
    public ResponseEntity<List<OrderDetail>> createOrderDetails(@RequestBody List<OrderDetail> orderDetails) {
        List<OrderDetail> savedOrderDetails = OrderDetailService.createOrderDetails(orderDetails);
        return new ResponseEntity<>(savedOrderDetails, HttpStatus.CREATED);
    }

    // Get OrderDetail by id REST API
    // http://localhost:8080/api/OrderDetails/1
    @GetMapping("{id}")
    public ResponseEntity<OrderDetail> getOrderDetailById(@PathVariable("id") Long OrderDetailId) {
        OrderDetail OrderDetail = OrderDetailService.getOrderDetailById(OrderDetailId);
        return new ResponseEntity<>(OrderDetail, HttpStatus.OK);
    }

    // Get All OrderDetails REST API
    // http://localhost:8080/api/OrderDetails
    @GetMapping
    public ResponseEntity<List<OrderDetail>> getAllOrderDetails() {
        List<OrderDetail> OrderDetails = OrderDetailService.getAllOrderDetails();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "item 0-" + OrderDetails.size() + "/" + OrderDetails.size());
        return ResponseEntity.ok().headers(headers).body(OrderDetails);
    }

    // Update OrderDetail REST API
    @PutMapping("{id}")
    // http://localhost:8080/api/OrderDetails/1
    public ResponseEntity<OrderDetail> updateOrderDetail(@PathVariable("id") Long OrderDetailId,
            @RequestBody OrderDetail OrderDetail) {
        OrderDetail.setId(OrderDetailId);
        OrderDetail updatedOrderDetail = OrderDetailService.updateOrderDetail(OrderDetail);
        return new ResponseEntity<>(updatedOrderDetail, HttpStatus.OK);
    }

    // Delete OrderDetail REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteOrderDetail(@PathVariable("id") Long OrderDetailId) {
        OrderDetailService.deleteOrderDetail(OrderDetailId);
        return new ResponseEntity<>("OrderDetail successfully deleted", HttpStatus.OK);
    }

   @GetMapping("/orderId")
public ResponseEntity<List<OrderDetail>> getOrderDetailItems(@RequestParam(value = "orderId", required = false) Long orderId) {
    List<OrderDetail> orderDetail = new ArrayList<>(); // Khởi tạo biến orderDetail

    if (orderId != null) {
        orderDetail = OrderDetailService.getOrderDetailItemsByOrderId(orderId);
    }

    if (orderDetail.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    HttpHeaders headers = new HttpHeaders();
    headers.add("Content-Range", "items 0-" + orderDetail.size() + "/" + orderDetail.size());
    return ResponseEntity.ok().headers(headers).body(orderDetail);
}

}