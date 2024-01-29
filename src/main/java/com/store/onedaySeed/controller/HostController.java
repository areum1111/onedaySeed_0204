package com.store.onedaySeed.controller;

import com.store.onedaySeed.dto.HostDto;
import com.store.onedaySeed.dto.UserDto;
import com.store.onedaySeed.entity.Host;
import com.store.onedaySeed.entity.User;
import com.store.onedaySeed.service.HostService;
import com.store.onedaySeed.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@Validated
public class HostController {
        private final HostService hostService;

        // 호스트 상세 조회(프로필)
//    @GetMapping("/api/user/{userId}")
//    public UserDto userDetail(@PathVariable("userId") String userId) {
//        User user = userService.findOne(userId);
//        UserDto userDto = new UserDto(user);
//
//        return userDto;
//    }
    
        @GetMapping("/api/host")
        public HostDto hostDetail() {
            Host host = hostService.findOne("12345");
            HostDto hostDto = new HostDto(host);

            return hostDto;
        }

        // 호스트 정보 수정
        @PostMapping("/api/host")
        public ResponseEntity<?> hostUpdate(@RequestBody @Valid HostDto hostDto, BindingResult bindingResult) {

            if(bindingResult.hasErrors()){ // 오류가 발생하였을 경우, 클라이언트에게 오류 메시지 전송
                Map<String, Object> errors = new HashMap<>();
                // 에러 메시지와 함께 alert 메시지 추가
                errors.put("alertMessage", "변경사항 저장에 실패했습니다.");
                errors.put("errors", bindingResult.getAllErrors());

                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
            }

            try {
                hostService.updateHost(hostDto);
                // 수정 성공시, 클라이언트에게 성공 메시지 전송
                Map<String, String> successResponse = new HashMap<>();
                successResponse.put("successMessage", "새로운 정보가 저장되었습니다.");
                successResponse.put("alertMessage", "새로운 정보가 저장되었습니다.");

                return ResponseEntity.ok(successResponse);

            } catch (Exception e){
                Map<String, String> errors = new HashMap<>();
                // 에러 메시지와 함께 alert 메시지 추가
                errors.put("alertMessage", "변경사항 저장에 실패했습니다.");
                errors.put("errorMessage", e.getMessage());

                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
            }
        }
    }
