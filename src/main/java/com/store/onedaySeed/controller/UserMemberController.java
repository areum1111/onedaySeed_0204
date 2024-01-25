package com.store.onedaySeed.controller;

import com.store.onedaySeed.dto.UserMemberFormDto;
import com.store.onedaySeed.entity.User;
import com.store.onedaySeed.service.UserMemberService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
        //("/user" )
@RequiredArgsConstructor
@Log4j2
// UserController => UserMemberController로 변경
public class UserMemberController {

    private final UserMemberService userMemberService;
    private final PasswordEncoder passwordEncoder;

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



    @PostMapping(value = "/new")
    private String userMemberForm(@Valid UserMemberFormDto userMemberFormDto, BindingResult bindingResult, Model model) {

        if (bindingResult.hasErrors()) {
            return "";//유저회원가입폼
        }

        try {
            User user = User.createUser(userMemberFormDto, passwordEncoder);
            userMemberService.saveMember(user);
        } catch (IllegalStateException e) {
            model.addAttribute("errorMessage", e.getMessage());
            return "";//유저회원가입폼
        }

        return "redirect:/";
    }

    @GetMapping(value = "/user/login")
    private  String loginUserMember(){

        return "redirect:/"; //유저회원가입폼
    }

    @GetMapping(value = "/login/error")
    private  String loginError(Model model){
        model.addAttribute("loginError","아이디와 비밀번호를 확인해주세요");

        return "";// 유저로그인 페이지
    }

//
//      @PreAuthorize("hasAnyRole('Role_USER','Role_HOST')") //임시 권한 설정(ROLE USER, HOST)
//      @GetMapping("/list")
//      public PageRespnseDTO<ProductDTO> list(PageRequestDTO pageRequestDTO){
//          log.info("LIST ::: "+pageRequestDTO);
//
//          return productService.getList(pageRequestDTO);
//
//      }


}







