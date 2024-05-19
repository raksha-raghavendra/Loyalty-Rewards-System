package com.loyalyprogram.loyaltyprogram.service;

import java.util.Map;

import org.springframework.http.ResponseEntity;

public interface RewardService {

    ResponseEntity<String> displayRewards(Map<String, String> requestMap);
}
