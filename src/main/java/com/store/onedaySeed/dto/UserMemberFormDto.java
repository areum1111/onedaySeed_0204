package com.store.onedaySeed.dto;

import com.store.onedaySeed.constant.Role;
import com.store.onedaySeed.entity.User;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;


@Getter
@Setter
public class UserMemberFormDto {

    private String userId;

    private String userName;

    private String userPhoneNum;

    private String userPassword;

    private Role role;

    public UserMemberFormDto() {

    }

    public UserMemberFormDto(String userId, String userName, String userPhoneNum, String userPassword, Role role) {
        this.userId = userId;
        this.userName = userName;
        this.userPhoneNum = userPhoneNum;
        this.userPassword = userPassword;
        this.role = role;
    }

    //Map 생성,jwt 문자열 생성시 필요 p.310
    public Map<String,Object> getClaims(){

        Map<String,Object> dataMap = new HashMap<>();

        dataMap.put("userId",userId);
        dataMap.put("userPassword",userPassword);
        dataMap.put("userName",userName);
        dataMap.put("userPhoneNum",userPhoneNum);
        dataMap.put("role",role);

        return dataMap;
    }

}
