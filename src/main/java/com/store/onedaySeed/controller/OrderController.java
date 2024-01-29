package com.store.onedaySeed.controller;

import com.store.onedaySeed.dto.OrderDto;
import com.store.onedaySeed.repository.OrdersRepository;
import com.store.onedaySeed.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;
    
    // 구매내역 조회하기 (로그인 정보가 없어서 일단 Principal 제외)
    // 썸네일 이미지 가져오는 것도 필요
    @GetMapping("/api/orders")
    public List<OrderDto> orderList() {
        List<OrderDto> orderDtoList = orderService.getOrderList("hong");
        System.out.println("Order DTO List: " + orderDtoList);
        return orderDtoList;
    }

    // 구매 취소
    @PostMapping("/api/orders/{orderId}")
    public ResponseEntity<?> cancelOrder(@PathVariable Long orderId) {
        try {
            orderService.cancelOrder(orderId);
            return ResponseEntity.ok("주문이 취소되었습니다.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("취소 중 오류가 발생했습니다.");
        }
    }
}