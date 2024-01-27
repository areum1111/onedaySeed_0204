package com.store.onedaySeed.controller;

import com.store.onedaySeed.dto.UserDto;
import com.store.onedaySeed.dto.UserMemberFormDto;
import com.store.onedaySeed.entity.User;
import com.store.onedaySeed.service.UserMemberService;
import com.store.onedaySeed.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping
@RequiredArgsConstructor
@Log4j2
public class UserMemberController {

    private final UserMemberService userMemberService;

    @GetMapping("/api/userNew")
    @ResponseBody
    public String userNew() {

        return "userNew";
    }


    @PostMapping("/api/userNew")
    public ResponseEntity<?> userNew(@RequestBody @Valid UserMemberFormDto userMemberFormDto, BindingResult bindingResult) {

        if(bindingResult.hasErrors()){ // 오류가 발생하였을 경우, 클라이언트에게 오류 메시지 전송
            Map<String, Object> errors = new HashMap<>();
            // 에러 메시지와 함께 alert 메시지 추가
            errors.put("alertMessage", "변경사항 저장에 실패했습니다.");
            errors.put("errors", bindingResult.getAllErrors());

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
        }

        try {
            userMemberService.createUser(userMemberFormDto);
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

//    @GetMapping(value = "/new")
//    private String userMemberForm(Model model){
//        model.addAttribute("userMemberForm",new UserMemberFormDto());
//
//        return "";//유저회원가입폼
//    }

//    @GetMapping(value = "/new")
//    private String userMemberForm(Model model){
//        UserMemberFormDto userForm = new UserMemberFormDto();
//
//        return new userForm;//유저회원가입폼
//    }

//
//
//    @PostMapping(value = "/new")
//    private String userMemberForm(@Valid UserMemberFormDto userMemberFormDto, BindingResult bindingResult, Model model) {
//
//        if (bindingResult.hasErrors()) {
//            return "";//유저회원가입폼
//        }
//
//        try {
//            User user = User.createUser(userMemberFormDto, passwordEncoder);
//            userMemberService.saveMember(user);
//        } catch (IllegalStateException e) {
//            model.addAttribute("errorMessage", e.getMessage());
//            return "";//유저회원가입폼
//        }
//
//        return "redirect:/";
//    }
//
//    @GetMapping(value = "/user/login")
//    private  String loginUserMember(){
//
//        return "redirect:/"; //유저회원가입폼
//    }
//
//    @GetMapping(value = "/login/error")
//    private  String loginError(Model model){
//        model.addAttribute("loginError","아이디와 비밀번호를 확인해주세요");
//
//        return "";// 유저로그인 페이지
//    }

//
//      @PreAuthorize("hasAnyRole('Role_USER','Role_HOST')") //임시 권한 설정(ROLE USER, HOST)
//      @GetMapping("/list")
//      public PageRespnseDTO<ProductDTO> list(PageRequestDTO pageRequestDTO){
//          log.info("LIST ::: "+pageRequestDTO);
//
//          return productService.getList(pageRequestDTO);
//
//      }


    @GetMapping("/api/userLogin")
    public String loginPage()
    {
        return "login";
    }


//    @PostMapping("/api/userLogin")
}







