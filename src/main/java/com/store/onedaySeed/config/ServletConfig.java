package com.store.onedaySeed.config;

import com.store.onedaySeed.controller.formatter.LocalDateFormatter;
import org.springframework.context.annotation.Configuration;
import org.springframework.format.FormatterRegistry;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class ServletConfig implements WebMvcConfigurer {
    //LocalDateFormatter 클래스의 LocalDate 객체를 문자열로 변환하고 그 반대로 변환
    //컨트롤러에서 LocalDate 타입의 데이터를 문자열로 전달하거나 반대로 받을 때 자동으로 변환
    @Override
    public void addFormatters(FormatterRegistry registry){
        registry.addFormatter(new LocalDateFormatter());
    }


    //p.123
    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("HEAD","GET","POST","PUT","DELETE","OPTIONS")
                .maxAge(300)
                .allowedHeaders("Authorization","Cache-Control","Content-Type");
    }


}
