package com.store.onedaySeed.controller;

import com.store.onedaySeed.dto.UserDto;
import com.store.onedaySeed.dto.UserLoginDto;
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
    private final PasswordEncoder passwordEncoder;


    @GetMapping(value = "/api/userNew")
    @ResponseBody
    private String memberForm(Model model){

        model.addAttribute("userMemberFormDto",new UserMemberFormDto());

        return "memberFormGet";
    }


    @PostMapping("/api/userNew")
    public ResponseEntity<?> userNew(@RequestBody @Valid UserMemberFormDto userMemberFormDto,BindingResult bindingResult) {

        if(bindingResult.hasErrors()){ // 오류가 발생하였을 경우, 클라이언트에게 오류 메시지 전송
            Map<String, Object> errors = new HashMap<>();
            // 에러 메시지와 함께 alert 메시지 추가
            errors.put("alertMessage", "변경사항 저장에 실패했습니다.");
            errors.put("errors", bindingResult.getAllErrors());

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
        }

        try {
            User user = User.createUser(userMemberFormDto,passwordEncoder);
            userMemberService.saveMember(user);
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

    @GetMapping("/api/userLogin")
    @ResponseBody
    public String loginPage()
    {
        return "login";
    }



    @PostMapping("/api/userLogin")
    public ResponseEntity<?> loginUserPost(@RequestBody @Valid UserLoginDto userLoginDto,BindingResult bindingResult) {

        if(bindingResult.hasErrors()){ // 오류가 발생하였을 경우, 클라이언트에게 오류 메시지 전송
            Map<String, Object> errors = new HashMap<>();
            // 에러 메시지와 함께 alert 메시지 추가
            errors.put("alertMessage", "변경사항 저장에 실패했습니다.");
            errors.put("errors", bindingResult.getAllErrors());

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
        }

        try {
            String userId = userLoginDto.getUserId();
            User user = userMemberService.findOne(userId);

            if (user == null) {
                return ResponseEntity.badRequest().body("아이디가 없습니다.");
            }

            // 비밀번호를 검증한다
            if (!passwordEncoder.matches(userLoginDto.getPassword(), user.getPassword())) {
                return ResponseEntity.badRequest().body("비밀번호가 일치하지 않습니다.");
            }

            // 로그인 성공시, 클라이언트에게 성공 메시지 전송
            Map<String, String> successResponse = new HashMap<>();
            successResponse.put("successMessage", "로그인 성공");
            successResponse.put("alertMessage", "로그인 성공");

            return ResponseEntity.ok(successResponse);

        } catch (Exception e) {
            // 에러 메시지와 함께 alert 메시지 추가
            Map<String, String> errors = new HashMap<>();
            errors.put("alertMessage", "변경사항 저장에 실패했습니다.");
            errors.put("errorMessage", e.getMessage());

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
        }
    }
//    @PostMapping("/api/userLogin")
//    public String loginUser(@RequestBody UserLoginDto userLoginDto) {
//
//        String userId = userLoginDto.getUserId();
//        String password = userLoginDto.getPassword();
//
//        User user = userMemberService.findOne(userId);
//
//        if (user == null) {
//
//            return "아이디가 없습니다.";
//        }
//        if (!passwordEncoder.matches(password, user.getPassword())) {
//            return "비밀번호가 일치하지 않습니다.";}
//
//        return "로그인성공";
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




//   @PostMapping("/api/userLogin")
//   public ResponseEntity<?> loginUser(@RequestBody UserMemberFormDto userMemberFormDto) {
//       // userLoginRequest 객체는 클라이언트로부터 전달받은 아이디와 비밀번호를 담고 있습니다.
//
//       // 여기에 데이터베이스에서 해당 아이디와 비밀번호를 확인하는 로직을 구현합니다.
//       // 아래는 가상의 메서드로 예시를 나타냅니다. 실제로는 데이터베이스와 연동하여 확인해야 합니다.
//       boolean isValidUser = checkUserCredentials(userMemberFormDto.getUserId(), userMemberFormDto.getPassword());
//
//       if (isValidUser) {
//           // 로그인 성공 시
//           return ResponseEntity.ok().body("로그인 성공!");
//       } else {
//           // 로그인 실패 시
//           return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("아이디 또는 비밀번호가 일치하지 않습니다.");
//       }
//   }
//
//    // 가상의 메서드로 실제로는 데이터베이스에서 확인해야 합니다.
//    private boolean checkUserCredentials(String userId, String password) {
//        // 여기에 데이터베이스에서 해당 아이디와 비밀번호를 확인하는 로직을 작성합니다.
//        // 실제로는 데이터베이스와 연동하여 확인해야 합니다.
//        // 아래는 간단한 예시로 항상 로그인 성공으로 가정합니다.
//        return true;
//    }


//    @PostMapping("/api/userLogin")
//    public ResponseEntity<?> loginUser(@RequestBody UserMemberFormDto userMemberFormDto) {
//        // userLoginRequest 객체는 클라이언트로부터 전달받은 아이디와 비밀번호를 담고 있습니다.
//
//        // 여기에 데이터베이스에서 해당 아이디와 비밀번호를 확인하는 로직을 구현합니다.
//        // 아래는 가상의 메서드로 예시를 나타냅니다. 실제로는 데이터베이스와 연동하여 확인해야 합니다.
//      userMemberService.loadUserByUsername(params)
//
//        if (isValidUser) {
//            // 로그인 성공 시
//            return ResponseEntity.ok().body("로그인 성공!");
//        } else {
//            // 로그인 실패 시
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("아이디 또는 비밀번호가 일치하지 않습니다.");
//        }
//    }

    }









