package com.store.onedaySeed.entity;

import com.store.onedaySeed.constant.OrderStatus;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

//주문서
@Entity
@Table(name="orders")
@Getter
@Setter
@ToString
public class Orders extends BaseEntity {

    @Id
    @Column(name = "order_id")
    private Long orderId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

//    @OneToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "payment_id")
//    private Payment payment;

    @Column(nullable = false , name = "order_date")
    private LocalDateTime orderDate;

    @Enumerated(EnumType.STRING)
    @Column(name = "order_status") //주문 상태
    private OrderStatus orderStatus; //ORDER or CANCEL

    //양방향 매핑 (일대다의 관계) 외래키를 가지고 있어야 주인 테이블인데 필요에 의해 mappedBy 속성을 이용해 일대다의 관계로 가져왔다.
    //하나의 주문(order)이 여러개의 주문 상품(order_item)을 가져오는 상태
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<OrderItem> orderItems = new ArrayList<>();

    public void addOrderItem(OrderItem orderItem){
        orderItems.add(orderItem);
        orderItem.setOrder(this);
    }

    public static Orders createOrder(User user, List<OrderItem> orderItemList) {
        Orders order = new Orders();
        order.setUser(user);

        for (OrderItem orderItem : orderItemList) {
            order.addOrderItem(orderItem);
        }
        order.setOrderStatus(OrderStatus.ORDER);
        order.setOrderDate(LocalDateTime.now());
        return order;
    }

    public int getTotalPrice(){
        int totalPrice =0;
        for(OrderItem orderItem :orderItems){
            totalPrice += (int) orderItem.getTotalPrice();
        }
        return totalPrice;
    }

    //주문 취소
    public void cancelOrder(){
        this.orderStatus = OrderStatus.CANCEL;
        for(OrderItem orderItem: orderItems){
            orderItem.cancel();
        }
    }
}
