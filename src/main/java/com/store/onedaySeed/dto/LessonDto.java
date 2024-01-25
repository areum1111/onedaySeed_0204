package com.store.onedaySeed.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class LessonDto {

    private Long lessonId;
    private String lessonName;
    private String lessonCategory;
    private String lessonSchedule;
    private Long price;
    private String lessonDetailInfo;
    private Integer lessonLimited;

    private Integer lessonStatus;

//    private Long id;
//    private Long hostNum;
//    private String lessonName;
//    private String lessonCategory;
//    private String lessonSchedule;
//    private Long price;
//    private Integer lessonLimited; //인원수 제한
}
