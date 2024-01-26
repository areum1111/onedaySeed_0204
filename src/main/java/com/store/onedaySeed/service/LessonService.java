package com.store.onedaySeed.service;

import com.store.onedaySeed.dto.LessonDto;
//import com.store.onedaySeed.dto.LessonRegisterDto;
import com.store.onedaySeed.entity.Lesson;
//import com.store.onedaySeed.repository.LessonImgRepository;
import com.store.onedaySeed.repository.LessonRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@Transactional
@RequiredArgsConstructor
public class LessonService {

    private final LessonRepository lessonRepository;

    public Lesson saveLesson(Lesson lesson){

        return lessonRepository.save(lesson);
    }


    public Lesson findLesson(Long lessonId){
        return lessonRepository.findById(lessonId)
                .orElseThrow(NullPointerException::new);
    }

}
