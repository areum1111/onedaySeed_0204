package com.store.onedaySeed.dto;

import com.store.onedaySeed.constant.OrderStatus;
import com.store.onedaySeed.entity.Orders;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class OrderHisDto {

    private Long orderId;
    private LocalDateTime orderDate;
    private OrderStatus orderStatus; //ORDER or CANCEL

    public OrderHisDto(Orders orders) {
        this.orderId = orders.getOrderId();
        this.orderDate = orders.getOrderDate();
        this.orderStatus = orders.getOrderStatus();
    }


    private List<OrderItemDto> orderItemDtoList = new ArrayList<>();

    public void addOrderItemDto(OrderItemDto orderItemDto){
        orderItemDtoList.add(orderItemDto);
    }

}
