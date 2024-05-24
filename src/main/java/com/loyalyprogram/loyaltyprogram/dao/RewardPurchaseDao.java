package com.loyalyprogram.loyaltyprogram.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.loyalyprogram.loyaltyprogram.POJO.RewardPurchase;


public interface RewardPurchaseDao extends JpaRepository<RewardPurchase, Integer>{

    RewardPurchase findById(int id);

}
