package com.loyalyprogram.loyaltyprogram.restImpl;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.loyalyprogram.loyaltyprogram.constants.LoyaltyConstants;
import com.loyalyprogram.loyaltyprogram.rest.UserRest;
import com.loyalyprogram.loyaltyprogram.service.UserService;
import com.loyalyprogram.loyaltyprogram.utils.LoyaltyUtils;

import lombok.extern.slf4j.Slf4j;
import com.loyalyprogram.loyaltyprogram.service.UserService;
import com.loyalyprogram.loyaltyprogram.utils.LoyaltyUtils;

import lombok.extern.slf4j.Slf4j;


@Slf4j
@RestController
public class UserRestImpl implements UserRest{

    @Autowired
    UserService userService;
    @Override
    public ResponseEntity<String> signUp(Map<String, String> requestMap) {
        
        // throw new UnsupportedOperationException("Unimplemented method 'signUp'");

        try {
            return userService.signUp(requestMap);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return LoyaltyUtils.getResponseEntity(LoyaltyConstants.SOMETHING_WENT_WRONG ,HttpStatus.INTERNAL_SERVER_ERROR);
    } 

    @Override
    public ResponseEntity<String> login(@RequestBody Map<String, String> requestMap) {
        log.info("Inside login {}", requestMap);
        try {
            String email = requestMap.get("email");
            String password = requestMap.get("password");
            
            if (email != null && password != null) {
                return userService.login(requestMap);
            } else {
                return LoyaltyUtils.getResponseEntity(LoyaltyConstants.INVALID_DATA, HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return LoyaltyUtils.getResponseEntity(LoyaltyConstants.SOMETHING_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}