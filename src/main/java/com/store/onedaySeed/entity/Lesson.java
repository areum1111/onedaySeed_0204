package com.store.onedaySeed.entity;

import com.store.onedaySeed.constant.LessonStatus;
import exception.OutOfLimitedException;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="lesson")
@Getter
@Setter
@ToString
public class Lesson extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "lesson_id")
    private Long lessonId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "host_num")
    private Host host;

    @Column(nullable = false, name = "lesson_name")
    private String lessonName;

    @Column(nullable = false, name = "lesson_category")
    private String lessonCategory;

    @Column(nullable = false, name = "lesson_schedule")
    private String lessonSchedule;
    //LocalDateTime,Long ?

    @Column(nullable = false, name = "price")
    private Long price;

    @Column(nullable = false, name = "lesson_limited")
    private Integer lessonLimited; //인원수 제한

    @Enumerated(EnumType.STRING)
    private LessonStatus lessonStatus;

//    @Column(nullable = false, name = "lesson_rep_img")
//    private String lessonRepImg;
//
//    @Column(nullable = false, name = "lesson_detail_img")
//    private String lessonDetailImg;

    //재고 감소
    public void removeLimited(int lessonLimited) throws OutOfLimitedException {
        int restLimited = this.lessonLimited-lessonLimited;
        if(restLimited < 0){
            throw new OutOfLimitedException(this.lessonName+" 클래스의 자리가 부족합니다. 현재 남은 인원수 : "+ this.lessonLimited);

        }this.lessonLimited=restLimited;

    }

    //주문시 재고 부족 하면 장바구니에 담기지 않게 하기
    public void removeLimited1(int lessonLimited) throws OutOfLimitedException {
        int restLimited = this.lessonLimited - lessonLimited;
        if(restLimited < 0){
            throw new OutOfLimitedException(this.lessonName+" 클래스의 자리가 부족합니다. 현재 남은 인원수 : "+ this.lessonLimited);
        }
    }


    public void addLimited(int lessonLimited){

        this.lessonLimited += lessonLimited;
    }

    







}
