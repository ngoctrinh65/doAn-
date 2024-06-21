package com.nguyenngoctrinh.backend.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import com.nguyenngoctrinh.backend.entity.Cart;
import com.nguyenngoctrinh.backend.entity.Orders;
import com.nguyenngoctrinh.backend.entity.User;
import com.nguyenngoctrinh.backend.service.OrdersService;
import com.nguyenngoctrinh.backend.repository.OrdersRepository;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class OrdersServiceImpl implements OrdersService {
    private OrdersRepository ordersRepository;

    @Override
    public Orders createOrders(Orders orders) {
        User user = orders.getUser();
        orders.setUser(user);
        return ordersRepository.save(orders);
    }

    @Override
    public Orders getOrdersById(Long ordersId) {
        Optional<Orders> optionalOrders = ordersRepository.findById(ordersId);
        return optionalOrders.get();
    }

    @Override
    public List<Orders> getAllOrders() {
        return ordersRepository.findAll();
    }

    @Override
    public Orders updateOrders(Orders orders) {
        Orders existingOrders = ordersRepository.findById(orders.getId()).get();
        existingOrders.setAddress(orders.getAddress());

        existingOrders.setEmail(orders.getEmail());

        existingOrders.setFullname(orders.getFullname());
        existingOrders.setFullname(orders.getFullname());
        existingOrders.setNote(orders.getNote());
        existingOrders.setOrder_date(orders.getOrder_date());
        existingOrders.setPhone_number(orders.getPhone_number());
        existingOrders.setStatus(orders.getStatus());
        existingOrders.setTotal_money(orders.getTotal_money());
        existingOrders.setUser(orders.getUser());
        existingOrders.setOrderdetail(orders.getOrderdetail());

        Orders updateOrders = ordersRepository.save(existingOrders);
        return updateOrders;
    }

    @Override
    public void deleteOrders(Long ordersId) {
        ordersRepository.deleteById(ordersId);
    }
    @Override
    public List<Orders> getOrdersByUserId(Long userId) {
        return ordersRepository.findByUserId(userId);
    }
}
