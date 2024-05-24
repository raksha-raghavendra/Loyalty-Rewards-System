package com.loyalyprogram.loyaltyprogram.dao;

import com.loyalyprogram.loyaltyprogram.POJO.Purchase;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PurchaseDao extends CrudRepository<Purchase, Integer> {
}
