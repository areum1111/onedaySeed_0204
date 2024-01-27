package com.store.onedaySeed.dto;

import lombok.Getter;
import lombok.Setter;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotEmpty;

@Getter
@Setter
public class HostMemberFormDto {

    @NotEmpty(message = "사업자번호를 입력해주세요")
    private String hostNum;

    @NotEmpty(message = "상호명을 입력해주세요")
    private String hostName;

    @NotEmpty(message = "전화번호를 입력해주세요")
    private Long hostPhoneNum;

    @NotEmpty(message = "비밀번호를 입력해주세요")
    private String hostPassword;
}
