package com.store.onedaySeed.util;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import lombok.extern.log4j.Log4j2;

import javax.crypto.SecretKey;
import java.time.ZonedDateTime;
import java.util.Date;
import java.util.Map;

@Log4j2
public class JWTUtil {

    private static String key = "123456789123456789123456789123456789"; //p.326 토큰 검증

    public static String generateToken(Map<String,Object> valueMap, int min){
        SecretKey key = null;

        try{
            key = Keys.hmacShaKeyFor(JWTUtil.key.getBytes("UTF-8"));
        }catch (Exception e){
            throw new RuntimeException(e.getMessage());
        }

        String jwtStr = Jwts.builder()
                .setHeader(Map.of("typ","JWT"))
                .setClaims(valueMap)
                .setIssuedAt(Date.from(ZonedDateTime.now().toInstant()))
                .setExpiration(Date.from(ZonedDateTime.now().plusMinutes(min).toInstant()))
                .signWith(key)
                .compact();

        return jwtStr;
    }

    public static Map<String,Object> validateToken(String token){
        Map<String, Object> claim = null;
        try{
            SecretKey key = Keys.hmacShaKeyFor(JWTUtil.key.getBytes("UTF-8"));

            claim = Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token) //파싱 및 검증, 실패시 에러
                    .getBody();
        }catch(MalformedJwtException malformedJwtException){
            throw new JwtException("MalFormed");
        }catch(ExpiredJwtException expiredJwtException){
            throw new JwtException("Expired");
        }catch(InvalidClaimException invalidClaimException){
            throw new JwtException("Invalid");
        }catch(JwtException jwtException){
            throw new JwtException("JWTError");
        }catch(Exception e){
            throw new JwtException("Error");
        }
        return claim;

    }
}
