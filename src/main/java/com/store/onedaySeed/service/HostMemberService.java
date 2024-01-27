package com.store.onedaySeed.service;

import com.store.onedaySeed.entity.Host;
import com.store.onedaySeed.repository.HostMemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
@RequiredArgsConstructor
public class HostMemberService{

    private final HostMemberRepository hostMemberRepository;

    //유효성 검증후 저장
    public Host saveMember(Host host){

        validateDuplicateHost(host);

        return hostMemberRepository.save(host);
    }

    //가입된 판매자인지 확인(유효성 검증)
    public void validateDuplicateHost(Host host){
        Host findHost = hostMemberRepository.findByHostNum(host.getHostNum());
        if(findHost != null){
            throw new IllegalArgumentException("이미 가입된 회원입니다.");
        }
    }

}
