package com.store.onedaySeed.dto;

import lombok.Getter;
import lombok.Setter;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotEmpty;

@Getter
@Setter
public class HostMemberFormDto {

    private String hostNum;

    private String hostName;

    private String phoneNum;

    private String password;
}
