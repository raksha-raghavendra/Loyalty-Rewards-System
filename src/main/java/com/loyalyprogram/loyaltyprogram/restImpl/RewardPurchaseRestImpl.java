package com.loyalyprogram.loyaltyprogram.restImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.loyalyprogram.loyaltyprogram.initializer.RewardPurchaseRequest;
import com.loyalyprogram.loyaltyprogram.rest.RewardPurchaseRest;
import com.loyalyprogram.loyaltyprogram.service.RewardPurchaseService;


@RestController
public class RewardPurchaseRestImpl implements RewardPurchaseRest{

    @Autowired
    private RewardPurchaseService rewardPurchaseService;

    @Override
    public ResponseEntity<?> purchaseReward(@RequestBody RewardPurchaseRequest request) {
        try {
            rewardPurchaseService.createPurchase(request.getRewardId(), request.getUserId());
            return ResponseEntity.ok("{\"message\": \"Purchase successful\"}");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("{\"error\": \"" + e.getMessage() + "\"}");
        }
    }
    

}
