package com.nguyenngoctrinh.backend.controller;

import java.util.List;
import lombok.AllArgsConstructor;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nguyenngoctrinh.backend.entity.Cart;
import com.nguyenngoctrinh.backend.entity.Orders;
import com.nguyenngoctrinh.backend.service.CartService;
import com.nguyenngoctrinh.backend.service.OrdersService;

@RestController
@AllArgsConstructor
@RequestMapping("api/orders")
@CrossOrigin(origins = "*", exposedHeaders = "Content-Range    ")

public class OrdersController {
    private OrdersService OrdersService;

    // Create Orders REST API
    @PostMapping
    public ResponseEntity<Orders> createOrders(@RequestBody Orders Orders) {
        Orders savedOrders = OrdersService.createOrders(Orders);
        return new ResponseEntity<>(savedOrders, HttpStatus.CREATED);
    }

    // Get Orders by id REST API
    // http://localhost:8080/api/Orderss/1
    @GetMapping("{id}")
    public ResponseEntity<Orders> getOrdersById(@PathVariable("id") Long OrdersId) {
        Orders Orders = OrdersService.getOrdersById(OrdersId);
        return new ResponseEntity<>(Orders, HttpStatus.OK);
    }

    // Get All Orderss REST API
    // http://localhost:8080/api/Orderss
    @GetMapping
    public ResponseEntity<List<Orders>> getAllOrderss() {
        List<Orders> Orders = OrdersService.getAllOrders();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "item 0-" + Orders.size() + "/" + Orders.size());
        return ResponseEntity.ok().headers(headers).body(Orders);
    }

    @GetMapping("/user")
    public ResponseEntity<List<Orders>> getOrdersByUserId(@RequestParam("userId") Long userId) {
        List<Orders> orders = OrdersService.getOrdersByUserId(userId);
        if (orders.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Handle empty orders list
        }
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "items 0-" + (orders.size() - 1) + "/" + orders.size());
        return ResponseEntity.ok().headers(headers).body(orders);
    }

    // Update Orders REST API
    @PutMapping("{id}")
    // http://localhost:8080/api/Orderss/1
    public ResponseEntity<Orders> updateOrders(@PathVariable("id") Long OrdersId,
            @RequestBody Orders Orders) {
        Orders.setId(OrdersId);
        Orders updatedOrders = OrdersService.updateOrders(Orders);
        return new ResponseEntity<>(updatedOrders, HttpStatus.OK);
    }

    // Delete Orders REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteOrders(@PathVariable("id") Long OrdersId) {
        OrdersService.deleteOrders(OrdersId);
        return new ResponseEntity<>("Orders successfully deleted", HttpStatus.OK);
    }

}