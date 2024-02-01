package com.store.onedaySeed.dto;

import com.store.onedaySeed.constant.LessonStatus;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SearchDto {

    private String searchDateType;
    private LessonStatus searchSellStatus;
    private String searchBy;
    private String searchQuery="";

}
