//package com.store.onedaySeed.repository.security.filter;
//
//import com.google.gson.Gson;
//import com.store.onedaySeed.constant.Role;
//import com.store.onedaySeed.dto.UserMemberFormDto;
//import com.store.onedaySeed.entity.User;
//import com.store.onedaySeed.util.JWTUtil;
//
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import lombok.extern.log4j.Log4j2;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import javax.crypto.SecretKey;
//import java.io.IOException;
//import java.io.PrintWriter;
//import java.util.Collections;
//import java.util.List;
//import java.util.Map;
//
//@Log4j2
//public class JWTCheckFilter extends OncePerRequestFilter {
//
//    @Override
//    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
//
//        // Preflight요청은 체크하지 않음
//        if (request.getMethod().equals("OPTIONS")) {
//            return true;
//        }
//
//        String path = request.getRequestURI();
//
//        log.info("check uri....." + path);
//
//        // api/user/의 경로 호출은 체크 하지 않는다.
//        if (path.startsWith("/api/user/")) {
//            return true;
//        }
//
//        // 이미지 조회 경로는 체크 하지 않는다.
//        if (path.startsWith("/api/lessons/view/")) {
//            return true;
//        }
//
//        return false;
//    }
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
//            throws ServletException, IOException {
//
//        log.info("----------JWTCheckFilter----------");
//
//        String authHeaderStr = request.getHeader("Authorization");
//
//        try {
//            if (authHeaderStr != null && authHeaderStr.startsWith("Bearer ")) {
//                String accessToken = authHeaderStr.substring(7);
//                Map<String, Object> claims = JWTUtil.validateToken(accessToken);
//
//                log.info("JWT claims : " + claims);
//
//                String userId = (String) claims.get("userId");
//                String userPassword = (String) claims.get("userPassword");
//                String userName = (String) claims.get("userName");
//                String userPhoneNum = (String) claims.get("userPhoneNum");
//                Role role = (Role) claims.get("role");
//
//                UserMemberFormDto userMemberFormDto = new UserMemberFormDto(userId, userPassword, userName, userPhoneNum,
//                        role);
//
//                log.info("--------------------------------------------------*");
//                log.info(userMemberFormDto);
//
//                String roleName = userMemberFormDto.getRole().toString(); // 예를 들어, "ROLE_USER"
//
//                GrantedAuthority userRole = new SimpleGrantedAuthority(roleName);
//
//// 권한을 리스트로 만들어서 전달
//                List<GrantedAuthority> authorities = Collections.singletonList(userRole);
//
//                UsernamePasswordAuthenticationToken authenticationToken =
//                        new UsernamePasswordAuthenticationToken(userMemberFormDto, userPassword, authorities);
//
//
//                SecurityContextHolder.getContext().setAuthentication(authenticationToken);
//
//                filterChain.doFilter(request, response);
//            } else {
//                // authHeaderStr이 null이거나 "Bearer "로 시작하지 않을 때의 처리
//                // 예를 들어, 로그인하지 않은 사용자에게 접근 권한이 없음을 알릴 수 있음
//                // 또는 필요에 따라 다른 처리를 수행할 수 있음
//                log.error("Invalid Authorization header");
//                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");
//            }
//        } catch (Exception e) {
//            log.error("JWT CHECK ERROR...............");
//            log.error(e.getMessage());
//
//            Gson gson = new Gson();
//            String msg = gson.toJson(Map.of("error", "ERROR_ACCESS_TOKEN"));
//
//            response.setContentType("application/json");
//            PrintWriter printwriter = response.getWriter();
//            printwriter.println(msg);
//            printwriter.close();
//        }
//    }
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
//            throws ServletException, IOException {
//
//        log.info("----------JWTCheckFilter----------");
//
//        String authHeaderStr = request.getHeader("Authorization");
//
//        try {
//            // Barer accesstoken...
//            String accessToken = authHeaderStr.substring(7);
//            Map<String, Object> claims = JWTUtil.validateToken(accessToken);
//
//            log.info("JWT claims : " + claims);
//
//            // filterChain.doFilter(request,response);
//
//            String userId = (String) claims.get("userId");
//            String userPassword = (String) claims.get("userPassword");
//            String userName = (String) claims.get("userName");
//            String userPhoneNum = (String) claims.get("userPhoneNum");
//            Role role = (Role) claims.get("role");
//
//            UserMemberFormDto userMemberFormDto = new UserMemberFormDto(userId, userPassword, userName, userPhoneNum,
//                    role);
//
//            log.info("--------------------------------------------------*");
//            log.info(userMemberFormDto);
//            // log.info(userMemberFormDto.getAuthorities());
//
//            UsernamePasswordAuthenticationToken authenticationToken =
//                    // new UsernamePasswordAuthenticationToken(userMemberFormDto,
//                    // userPassword,userMemberFormDto.getAuthorities());
//                    new UsernamePasswordAuthenticationToken(userMemberFormDto, userPassword);
//
//            SecurityContextHolder.getContext().setAuthentication(authenticationToken);
//
//            filterChain.doFilter(request, response);
//
//        } catch (Exception e) {
//            log.error("JWT CHECK ERROR...............");
//            log.error(e.getMessage());
//
//            Gson gson = new Gson();
//            String msg = gson.toJson(Map.of("error", "ERROR_ACCESS_TOKEN"));
//
//            response.setContentType("application/json");
//            PrintWriter printwriter = response.getWriter();
//            printwriter.println(msg);
//            printwriter.close();
//
//        }
//
//        // filterChain.doFilter(request,response); //통과
//    }
//
//}
