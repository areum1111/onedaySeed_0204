package com.store.onedaySeed.entity;

import com.store.onedaySeed.constant.LessonStatus;
import exception.OutOfLimitedException;
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
public class Lesson extends BaseEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "lesson_id")
    private Long lessonId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "host_num")
    private Host host;

    @Column(nullable = false, name ="lesson_name")
    private String lessonName;

    @Column(nullable = false,  name ="lesson_category")
    private String lessonCategory;

    @Column(nullable = false , name="lesson_schedule")
    private String lessonSchedule;
    //LocalDateTime,Long ?

    @Column(nullable = false, name ="fee")
    private Long price;

    @Column(nullable = false , name ="lesson_limited")
    private Integer lessonLimited; //인원수 제한

    @Enumerated(EnumType.STRING)
    private LessonStatus lessonStatus;

    //재고 감소
    public void removeLimited(int lessonLimited) {
        int restLimited = this.lessonLimited-lessonLimited;
        if(restLimited < 0){
            throw new OutOfLimitedException(this.lessonName+" 클래스의 자리가 부족합니다. 현재 남은 인원수 : "+ this.lessonLimited);

        }
        this.lessonLimited=restLimited;
        
        // 재고 수량 0이면 품절 상태
        if (restLimited == 0) {
            this.lessonStatus = LessonStatus.SOLD_OUT;
        }
    }

    //주문시 재고 부족 하면 장바구니에 담기지 않게 하기
    public void removeLimited1(int lessonLimited) throws OutOfLimitedException {
        int restLimited = this.lessonLimited - lessonLimited;
        if(restLimited < 0){
            throw new OutOfLimitedException(this.lessonName+" 클래스의 자리가 부족합니다. 현재 남은 인원수 : "+ this.lessonLimited);
        }
    }


    // 주문 취소시 상품 재고 증가
    public void addLimited(int lessonLimited){
        this.lessonLimited += lessonLimited;
    }

}
