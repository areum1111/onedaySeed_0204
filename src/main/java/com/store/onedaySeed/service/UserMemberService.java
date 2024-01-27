package com.store.onedaySeed.service;

import com.store.onedaySeed.dto.UserMemberFormDto;
import com.store.onedaySeed.entity.User;
import com.store.onedaySeed.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
@RequiredArgsConstructor
@Log4j2
public class UserMemberService
//        implements UserDetailsService
{

    // UserMemberRepository => UserRepository로 통합
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    public User saveMember(User user){

        validateDuplicateUser(user);

        return userRepository.save(user);
    }

    public void createUser(UserMemberFormDto userMemberFormDto){
        User user = new User();
        user.setUserId(userMemberFormDto.getUserId());
        user.setUserName(userMemberFormDto.getUserName());
        user.setPhoneNum(userMemberFormDto.getUserPhoneNum());
        String password = passwordEncoder.encode(userMemberFormDto.getUserPassword());
        user.setPassword(password);

        saveMember(user);
    }
    //가입된 회원인지 확인(유효성 검증)
    public void validateDuplicateUser(User user){
        User findUser = userRepository.findByUserId(user.getUserId());
        if(findUser != null){
            throw new IllegalArgumentException("이미 가입된 회원입니다.");
        }
    }

//    @Override
//    public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
//
//        User user = userRepository.findByUserId(userId);
//
//        if(user == null)
//            throw new UsernameNotFoundException(userId);
//
//        return (UserDetails) User.builder()
//                .userName(user.getUserId())
//                .password(user.getPassword())
//                .build();
//
//    }




}
