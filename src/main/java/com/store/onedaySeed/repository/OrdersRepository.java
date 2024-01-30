package com.store.onedaySeed.repository;

import com.store.onedaySeed.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import org.springframework.data.domain.Pageable;
import java.util.List;

// OrderRepository => OrdersRepository로 통합
public interface OrdersRepository extends JpaRepository<Orders, Long> {
    //현재 로그인한 사용자의 주문 정보를 조건에 맞춰서 조회
//    @Query("select o from Orders o where o.user.userId =:id order by o.orderDate desc")
//    List<Orders> findOrders(@Param("userId")String id, Pageable pageable);//Pageable pageable



    //현재 아이디로 로그인한 사용자의 주문 갯수 조회
//    @Query("select count(o) from  Orders o where o.user.userId =:userId")
//    Long countOrder(@Param("userId")String userId);
}