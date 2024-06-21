package com.nguyenngoctrinh.backend.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import com.nguyenngoctrinh.backend.entity.Cart;
import com.nguyenngoctrinh.backend.entity.CartItem;
import com.nguyenngoctrinh.backend.entity.OrderDetail;
import com.nguyenngoctrinh.backend.entity.Orders;
import com.nguyenngoctrinh.backend.entity.Product;
import com.nguyenngoctrinh.backend.service.OrderDetailService;
import com.nguyenngoctrinh.backend.repository.OrderDetailRepository;
import java.util.List;
import java.util.Optional;
import java.util.ArrayList;

@Service
@AllArgsConstructor
public class OrderDetailServiceImpl implements OrderDetailService {
    private OrderDetailRepository orderdetailRepository;

    @Override
    public List<OrderDetail> createOrderDetails(List<OrderDetail> orderDetails) {
        List<OrderDetail> savedOrderDetails = new ArrayList<>();
        for (OrderDetail orderDetail : orderDetails) {
            Product product = orderDetail.getProduct();
            orderDetail.setProduct(product);
            Orders order = orderDetail.getOrder();
            orderDetail.setOrder(order);
            savedOrderDetails.add(orderdetailRepository.save(orderDetail));
        }
        return savedOrderDetails;
    }

    @Override
    public OrderDetail getOrderDetailById(Long orderdetailId) {
        Optional<OrderDetail> optionalOrderDetail = orderdetailRepository.findById(orderdetailId);
        return optionalOrderDetail.get();
    }

    @Override
    public List<OrderDetail> getAllOrderDetails() {
        return orderdetailRepository.findAll();
    }

    @Override
    public List<OrderDetail> getOrderDetailItemsByOrderId(Long orderId) {
        return orderdetailRepository.findByOrderId(orderId); // Assuming this method exists in your repository
    }

    @Override
    public OrderDetail updateOrderDetail(OrderDetail orderdetail) {
        OrderDetail existingOrderDetail = orderdetailRepository.findById(orderdetail.getId()).get();
        existingOrderDetail.setPrice(orderdetail.getPrice());

        existingOrderDetail.setQuantity(orderdetail.getQuantity());

        existingOrderDetail.setOrder(orderdetail.getOrder());

        existingOrderDetail.setProduct(orderdetail.getProduct());

        OrderDetail updateOrderDetail = orderdetailRepository.save(existingOrderDetail);
        return updateOrderDetail;
    }

    @Override
    public void deleteOrderDetail(Long orderdetailId) {
        orderdetailRepository.deleteById(orderdetailId);
    }

}
