package com.store.onedaySeed.dto;

import com.querydsl.core.annotations.QueryProjection;
import com.store.onedaySeed.constant.LessonStatus;
import com.store.onedaySeed.entity.Lesson;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.modelmapper.ModelMapper;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class LessonDto {

    private Long lessonId;
    private String lessonName;
    private String lessonCategory;
    private String lessonSchedule;
    private Long price;
    private Integer lessonLimited;
    private LessonStatus lessonStatus;


    public LessonDto(LessonDto lessonDto) {
        this.lessonName = lessonDto.getLessonName();
        this.lessonCategory = lessonDto.getLessonCategory();
        this.price = lessonDto.getPrice();
        this.lessonSchedule = lessonDto.getLessonSchedule();
        this.lessonLimited = lessonDto.getLessonLimited();
        this.lessonStatus = lessonDto.getLessonStatus();
    }

    ModelMapper modelMapper = new ModelMapper();



    public LessonDto(Lesson lesson) {
        this.lessonName = lesson.getLessonName();
        this.lessonCategory = lesson.getLessonCategory();
        this.price = lesson.getPrice();
        this.lessonSchedule = lesson.getLessonSchedule();
        this.lessonLimited = lesson.getLessonLimited();
        this.lessonStatus = lesson.getLessonStatus();
    }

//    public LessonDto(Long lessonId, String lessonName, Long price, String lessonSchedule) {
//        this.lessonId = lessonId;
//        this.lessonName = lessonName;
//        this.price = price;
//        this.lessonSchedule = lessonSchedule;
//    }

    @QueryProjection
    public LessonDto(Long lessonId, String lessonName, Long price, String lessonSchedule) {
        this.lessonId = lessonId;
        this.lessonName = lessonName;
        this.price = price;
        this.lessonSchedule = lessonSchedule;
    }

    public Lesson createLesson(){
        return modelMapper.map(this, Lesson.class);
    }


//    private Long id;
//    private Long hostNum;
//    private String lessonName;
//    private String lessonCategory;
//    private String lessonSchedule;
//    private Long price;
//    private Integer lessonLimited; //인원수 제한
}
