package com.store.onedaySeed.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderItemDto {

    private String lessonName;
    private int count;
    private Long orderPrice;
    private String imgUrl;

    public OrderItemDto(String lessonName, int count, Long orderPrice, String imgUrl) {
        this.lessonName = lessonName;
        this.count = count;
        this.orderPrice = orderPrice;
        this.imgUrl = imgUrl;
    }
}
