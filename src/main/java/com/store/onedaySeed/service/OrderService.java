//package com.store.onedaySeed.service;
//
//
//import com.store.onedaySeed.dto.OrderDto;
//import com.store.onedaySeed.dto.OrderHisDto;
//import com.store.onedaySeed.entity.Lesson;
//import com.store.onedaySeed.entity.OrderItem;
//import com.store.onedaySeed.entity.Orders;
//import com.store.onedaySeed.entity.User;
//import com.store.onedaySeed.repository.LessonRepository;
//import com.store.onedaySeed.repository.OrdersRepository;
//import com.store.onedaySeed.repository.UserRepository;
//import jakarta.persistence.EntityNotFoundException;
//import lombok.RequiredArgsConstructor;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Transactional
//@Service
//@RequiredArgsConstructor
//public class OrderService {
//
//    private final LessonRepository lessonRepository;
//    private final UserRepository userRepository;
//    private final OrdersRepository ordersRepository;
////    private final ItemImgRepository itemImgRepository;
//
//
//    public Long order(OrderDto orderDto, String userId) {
//        Lesson lesson = LessonRepository.findById(orderDto.getLessonId())
//                .orElseThrow(EntityNotFoundException::new);
//
//        User user = userRepository.findByUserId(userId);
//        List<OrderItem> orderItemList = new ArrayList<>();
//        OrderItem orderItem = OrderItem.createOrderItem(lesson, orderDto.getCount());
//        orderItemList.add(orderItem);
//
//        Orders order = Orders.createOrder(user, orderItemList);
//        ordersRepository.save(order);
//
//        return order.getOrderId();
//    }
//
//    // 주문 리스트를 순회하면서 구매 이력 페이지에 전달항 Dto 생성
//    //주문 목록 조회
//    @Transactional(readOnly = true)
//    public Page<OrderHisDto> getOrderList(String userId, Pageable pageable) {
//        List<Orders> orders = ordersRepository.findOrders(userId, pageable);
//        Long totalCount = ordersRepository.countOrder(userId);
//        List<OrderHisDto> orderHistDtos = new ArrayList<>();
//
//        for (Orders order : orders) {
//            OrderHisDto orderHisDto = new OrderHisDto(order);
//            List<OrderItem> orderItems = order.getOrderItems();
//            for (OrderItem orderItem : orderItems) {
//                ItemImg itemImg = itemImgRepository.findByItemIdAndRepImgYn(orderItem.getLesson().getLessonId(), "Y");
//                OrderItemDto orderItemDto = new OrderItemDto(orderItem, itemImg.getImgUrl());
//                orderHistDto.addOrderItemDto(orderItemDto);
//            }
//            OrderHisDto.add(OrderHisDto);
//        }
//        return new PageImpl<OrderHisDto>(orderHistDtos, pageable, totalCount);
//
//    }
//
//    //주문 취소 권한
//    public boolean validateOrder(Long orderId, String userId) {
//        User curUser = userRepository.findByUserId(userId);
//        Orders orders = ordersRepository.findById(orderId)
//                .orElseThrow(EntityNotFoundException::new);
//        User savedUser = orders.getUser();
//
//        if (!StringUtils.equals(curUser.getUserId(), savedUser.getUserId())) {
//            return false;
//        }
//        return true;
//
//    }
//
//    //주문 취소 상태로 변경하면 변경 감지 기능에 의해서 트랜젝션이 끝날때 업데이트 쿼리가 실행
//    public void cancelOrder(Long orderId) {
//        Orders order = ordersRepository.findById(orderId)
//                .orElseThrow(EntityNotFoundException::new);
//        order.cancelOrder();
//    }
//
//    //장바구니에서 전달 받아 주문 생성
//    public Long orders(List<OrderDto> orderDtoList, String userId){
//        User user = userRepository.findByUserId(userId);
//        List<OrderItem> orderItemList = new ArrayList<>();
//        for(OrderDto orderDto: orderDtoList){
//            Lesson lesson = LessonRepository.findById(orderDto.getLessonId())
//                    .orElseThrow(EntityNotFoundException::new);
//            OrderItem orderItem = OrderItem.createOrderItem(lesson,orderDto.getCount());
//            orderItemList.add(orderItem);
//        }
//        Orders order = Orders.createOrder(user,orderItemList);
//        ordersRepository.save(order);
//
//        return order.getOrderId();
//    }
//
//
//
//
//
//}