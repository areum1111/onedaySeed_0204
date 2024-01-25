package com.store.onedaySeed.service;

import com.store.onedaySeed.entity.User;
import com.store.onedaySeed.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
@RequiredArgsConstructor
@Log4j2
public class UserMemberService{

    // UserMemberRepository => UserRepository로 통합
    
    private final UserRepository userRepository;
    public User saveMember(User user){

        validateDuplicateUser(user);

        return userRepository.save(user);
    }

    //가입된 회원인지 확인(유효성 검증)
    public void validateDuplicateUser(User user){
        User findUser = userRepository.findByUserId(user.getUserId());
        if(findUser != null){
            throw new IllegalArgumentException("이미 가입된 회원입니다.");
        }


    }




}
