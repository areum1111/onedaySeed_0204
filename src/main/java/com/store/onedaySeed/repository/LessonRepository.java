package com.store.onedaySeed.repository;

import com.store.onedaySeed.entity.Lesson;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

@Transactional
public interface LessonRepository extends JpaRepository<Lesson, Long> {

}