package com.nguyenngoctrinh.backend.service;

import java.util.List;

import com.nguyenngoctrinh.backend.entity.OrderDetail;

public interface OrderDetailService {
    public OrderDetail getOrderDetailById(Long orderdetailId);
    public OrderDetail updateOrderDetail(OrderDetail orderdetail);
    public void deleteOrderDetail(Long orderdetailId);
    public List<OrderDetail> getAllOrderDetails();
    public List<OrderDetail> createOrderDetails(List<OrderDetail> orderDetails);
    List<OrderDetail> getOrderDetailItemsByOrderId(Long orderId);

}