package com.store.onedaySeed.dto;

import com.store.onedaySeed.entity.Lesson;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.modelmapper.ModelMapper;

@Getter @Setter
public class LessonDto {

    private Long lessonId;
    private String lessonName;
    private String lessonCategory;
    private String lessonSchedule;
    private Long price;
    private Long lessonLimited;
    private String lessonStatus;

    public LessonDto(LessonDto lessonDto) {
        this.lessonName = lessonDto.getLessonName();
        this.lessonCategory = lessonDto.getLessonCategory();
        this.price = lessonDto.getPrice();
        this.lessonSchedule = lessonDto.getLessonSchedule();
        this.lessonLimited = lessonDto.getLessonLimited();
        this.lessonStatus = lessonDto.getLessonStatus();
    }

    ModelMapper modelMapper = new ModelMapper();
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
