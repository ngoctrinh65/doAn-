package com.nguyenngoctrinh.backend.service;

import java.util.List;
import com.nguyenngoctrinh.backend.entity.Orders;

public interface OrdersService {
    public  Orders createOrders(Orders orders);
    public  Orders getOrdersById(Long ordersId);
    public  Orders updateOrders( Orders orders);
    public  void deleteOrders(Long ordersId);
    public  List<Orders> getAllOrders();
   List<Orders> getOrdersByUserId(Long userId); // Add this method
} 



    

