package com.store.onedaySeed.controller;


import com.store.onedaySeed.constant.LessonStatus;
import com.store.onedaySeed.dto.LessonDto;
import com.store.onedaySeed.entity.Lesson;
import com.store.onedaySeed.service.LessonService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.NoHandlerFoundException;

import java.io.Console;
import java.io.File;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping(value = "/host")
@RequiredArgsConstructor
public class LessonController {

    private final LessonService lessonService;


    //호스트로 로그인 시 등록한 클래스들 전부 보이는 페이지
//    @GetMapping(value = "/lesson/main")
//    public List<LessonDto> getAllLessons(){
//        List<LessonDto> lessons = lessonService.getAllLesson();
//
//        return lessons;
//    }

//    @DeleteMapping(value = "/lesson/{lessonId}")
//    public @ResponseBody ResponseEntity deleteLesson(@PathVariable("lessonId") Long lessonId, Model model){
//
//    }

    //클래스 등록페이지(메인 페이지에서 등록하기 누르면 여기로 이동)
    @PostMapping(value = "/lesson/new")
    public ResponseEntity<Long> createLesson(@RequestBody LessonDto lessonDto) {

        return ResponseEntity.ok(lessonService.saveLesson(lessonDto));
    }

    @GetMapping(value = {"/lesson/list", "/lesson/main"})
    public List<Lesson> getAllSellLesson(){
        return lessonService.getAllLessonss();
    }

    //클래스 구매 상세 페이지
    @GetMapping(value = "/lesson/detail/{lessonId}")
    public LessonDto lessonDetail (@PathVariable("lessonId") Long lessonId){
        return lessonService.getLessonDetail(lessonId);
    }




//    @PostMapping(value = "new")
//    public ResponseEntity<Lesson> createLesson(@RequestPart("lessonRepImg") MultipartFile lessonRepImg,
//                                               @RequestPart("lessonDetailImg") MultipartFile lessonDetailImg,
//                                               @RequestPart("lessonName") String lessonName,
//                                               @RequestPart("lessonCategory") String lessonCategory,
//                                               @RequestPart("price") Long price,
//                                               @RequestPart("lessonLimited") Integer lessonLimited,
//                                               @RequestPart("lessonSchedule") String lessonSchedule,
//                                               @RequestPart("lessonStatus") String lessonStatus) {
//        Lesson lesson = new Lesson();
//        lesson.setLessonName(lessonName);
//        lesson.setLessonCategory(lessonCategory);
//        lesson.setPrice(price);
//        lesson.setLessonLimited(lessonLimited);
//        lesson.setLessonSchedule(lessonSchedule);
//        lesson.setLessonStatus(LessonStatus.valueOf(lessonStatus));
//
//        // 파일 저장 경로 설정 (경로는 알맞게 변경)
//        String repImgPath = ".../images/repImg/";
//        String detailImgPath = ".../images/detailImg/";
//
//        // 파일 저장 경로에 디렉토리가 없다면 생성
//        File repImgDirectory = new File(repImgPath);
//        File detailImgDirectory = new File(detailImgPath);
//
//        if (!repImgDirectory.exists()) {
//            repImgDirectory.mkdirs();
//        }
//
//        if (!detailImgDirectory.exists()) {
//            detailImgDirectory.mkdirs();
//        }
//
//        // 파일 저장할 경로와 이름 설정
//        String saveRepImg = repImgPath + lessonRepImg.getOriginalFilename();
//        String saveDetailImg = detailImgPath + lessonDetailImg.getOriginalFilename();
//
//        // 파일 저장
//        try {
//            lessonRepImg.transferTo(new File(saveRepImg));
//            lessonDetailImg.transferTo(new File(saveDetailImg));
//        } catch (IOException e) {
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//        }
//
//        // 저장된 파일 이름을 엔터티에 설정
//        lesson.setLessonRepImg(lessonRepImg.getOriginalFilename());
//        lesson.setLessonDetailImg(lessonDetailImg.getOriginalFilename());
//
//        Lesson savedLesson = lessonService.saveLesson(lesson);
//
//        return ResponseEntity.ok(savedLesson);
//    }
}
