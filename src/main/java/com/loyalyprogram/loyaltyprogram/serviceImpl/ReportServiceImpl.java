package com.loyalyprogram.loyaltyprogram.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loyalyprogram.loyaltyprogram.dao.PurchaseDao;
import com.loyalyprogram.loyaltyprogram.dao.UserDao;
import com.loyalyprogram.loyaltyprogram.service.ReportService;

import java.util.HashMap;
import java.util.Map;

@Service
public class ReportServiceImpl implements ReportService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private PurchaseDao purchaseDao;

    @Override
    public Map<String, Object> getUserReport(int userId) {
        Map<String, Object> reportData = new HashMap<>();
        Integer currentPoints = userDao.findById(userId).get().getCurrentPoints();
        Integer totalPointsRedeemed = purchaseDao.findTotalPointsByUserId(userId);

        reportData.put("currentPoints", currentPoints);
        reportData.put("totalPointsRedeemed", totalPointsRedeemed);
        return reportData;
    }
}
