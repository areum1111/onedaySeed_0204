package com.store.onedaySeed.dto;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class UserMemberFormDto {

    private String userId;

    private String userName;

    private String phoneNum;

    private String password;

//    public void UserMemberFormLogin(String userId, String password) {
//        this.userId = userId;
//        this.password = password;
//    }

    //    private Role role;

//    public UserMemberFormDto(String userId, String userName, String userPhoneNum, String userPassword) {
//        this.userId = userId;
//        this.userName = userName;
//        this.userPhoneNum = userPhoneNum;
//        this.userPassword = userPassword;
//    }

//    //Map 생성,jwt 문자열 생성시 필요 p.310
//    public Map<String,Object> getClaims(){
//
//        Map<String,Object> dataMap = new HashMap<>();
//
//        dataMap.put("userId",userId);
//        dataMap.put("userPassword",userPassword);
//        dataMap.put("userName",userName);
//        dataMap.put("userPhoneNum",userPhoneNum);
//        dataMap.put("role",role);
//
//        return dataMap;
//    }

}
