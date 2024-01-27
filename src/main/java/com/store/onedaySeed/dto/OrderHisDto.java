package com.store.onedaySeed.dto;

import com.store.onedaySeed.constant.OrderStatus;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class OrderHisDto {

    private Long orderId;
    private LocalDateTime orderDate;
    private OrderStatus orderStatus; //ORDER or CANCEL

    public OrderHisDto(Long orderId, LocalDateTime orderDate, OrderStatus orderStatus) {
        this.orderId = orderId;
        this.orderDate = orderDate;
        this.orderStatus = orderStatus;
    }


    private List<OrderItemDto> orderItemDtoList = new ArrayList<>();

    public void addOrderItemDto(OrderItemDto orderItemDto){
        orderItemDtoList.add(orderItemDto);
    }

}
