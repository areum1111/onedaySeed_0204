package com.store.onedaySeed.repository.security;

import com.store.onedaySeed.constant.Role;
import com.store.onedaySeed.dto.UserMemberFormDto;
import com.store.onedaySeed.entity.User;
import com.store.onedaySeed.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@Log4j2
@RequiredArgsConstructor
public class CustomUserDetailService implements UserDetailsService {

    private final UserRepository userRepository;



    @Override
        public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {

            User user = userRepository.findByUserId(userId);

            if(user == null)
                throw new UsernameNotFoundException(userId);

            return (UserDetails) User.builder()
                    .userName(user.getUserId())
                    .password(user.getPassword())
                    .build();
        }
}


