package com.store.onedaySeed.repository;

import com.store.onedaySeed.entity.Lesson;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

@Transactional
public interface LessonRepository extends JpaRepository<Lesson, Long> {
    //판매자로 로그인하면 등록된 클래스를 전부 보이도록 설정
    List<Lesson> findAllByLessonId(Long id);
}