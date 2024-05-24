package com.loyalyprogram.loyaltyprogram.dao;

import com.loyalyprogram.loyaltyprogram.POJO.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PurchaseRepository extends JpaRepository<Purchase, Integer> {
}
    