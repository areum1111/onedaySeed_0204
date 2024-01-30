package com.store.onedaySeed.service;

import com.store.onedaySeed.dto.LessonDto;
//import com.store.onedaySeed.dto.LessonRegisterDto;
import com.store.onedaySeed.entity.Lesson;
//import com.store.onedaySeed.repository.LessonImgRepository;
import com.store.onedaySeed.repository.LessonRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class LessonService {

    private final LessonRepository lessonRepository;

//    public Lesson saveLesson(Lesson lesson){
//
//        return lessonRepository.save(lesson);
//    }

    public Long saveLesson(LessonDto lessonDto){
        Lesson lesson = lessonDto.createLesson();
        lessonRepository.save(lesson);
        System.out.println(lesson.getLessonName());
        System.out.println(lesson.getLessonCategory());
        System.out.println(lesson.getLessonId());
        System.out.println(lesson.getLessonSchedule());
        System.out.println(lessonDto.getLessonId());
        return lesson.getLessonId();
    }
    public List<LessonDto> getAllLesson() {
        List<Lesson> lessons = lessonRepository.findAll();
        List<LessonDto> lessonDtos = new ArrayList<>();

        for (Lesson lesson : lessons) {
            lessonDtos.add(convertToDto(lesson));
        }
        for(int i= 0; i<lessonDtos.size(); i++){
            System.out.println(lessonDtos);
        }

        return lessonDtos;
    }

    private LessonDto convertToDto(Lesson lesson) {
        return new LessonDto(
                lesson.getLessonId(),
                lesson.getLessonName(),
                lesson.getPrice(),
                lesson.getLessonSchedule()
        );
    }

    public List<Lesson> getAllLessonss() {
        return lessonRepository.findAll();
    }

    public Lesson getLessonById(Long lessonId){
        return  lessonRepository.findById(lessonId)
                .orElseThrow(EntityNotFoundException::new);
    }

//    public List<LessonDto> getAllLesson() {
//        return lessonRepository.findAll().stream()
//                .map(this::convertToDto)
//                .toList();
//    }
//
//    private LessonDto convertToDto(Lesson lesson) {
//        return new LessonDto(
//                lesson.getLessonId(),
//                lesson.getLessonName(),
//                lesson.getPrice(),
//                lesson.getLessonSchedule()
//        );
//    }



    public void deleteLesson(Long lessonId){
        Lesson lesson = lessonRepository.findById(lessonId)
                .orElseThrow(EntityNotFoundException::new);
        lessonRepository.delete(lesson);
    }
}
