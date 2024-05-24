package com.loyalyprogram.loyaltyprogram.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import com.loyalyprogram.loyaltyprogram.initializer.RewardPurchaseRequest;


@RequestMapping("/rewardpurchase")
public interface RewardPurchaseRest {

    @PutMapping("/purchase")
    public ResponseEntity<?> purchaseReward(@RequestBody RewardPurchaseRequest request);
}
