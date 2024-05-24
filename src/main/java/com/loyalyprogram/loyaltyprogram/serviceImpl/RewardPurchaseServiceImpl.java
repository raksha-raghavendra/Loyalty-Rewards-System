package com.loyalyprogram.loyaltyprogram.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loyalyprogram.loyaltyprogram.POJO.RewardPurchase;
import com.loyalyprogram.loyaltyprogram.POJO.User;
import com.loyalyprogram.loyaltyprogram.dao.RewardPurchaseDao;
import com.loyalyprogram.loyaltyprogram.dao.UserDao;
import com.loyalyprogram.loyaltyprogram.service.RewardPurchaseService;

@Service
public class RewardPurchaseServiceImpl implements RewardPurchaseService {

    @Autowired
    private RewardPurchaseDao rewardPurchaseDao;

    @Autowired
    private UserDao userDao;

    @Override
    public void createPurchase(int rewardId, int userId) {
        System.out.println(userId);
        User user = userDao.findById(userId);
        RewardPurchase reward = rewardPurchaseDao.findById(rewardId);

        // Assuming the User class has a method to check if the user has enough points
        // and deduct them
        if (user.getCurrentPoints() >= reward.getPointsEarned()) {
            user.setCurrentPoints(user.getCurrentPoints() - reward.getPointValue());
            userDao.save(user);

            RewardPurchase purchase = new RewardPurchase();
            purchase.setUser(user);
            purchase.setReward(reward);
            ;
            rewardPurchaseDao.save(purchase);
        } else {
            throw new RuntimeException("Not enough points to redeem this reward");
        }
    }
}
// @Override
// public RewardPurchase createPurchase(RewardPurchase purchase) {
// // Get the logged-in user's email
// String userEmail = ((UserDetails)
// SecurityConfig.getContext().getAuthentication().getPrincipal()).getUsername();

// // Fetch user by email
// User user = userService.getUserByEmail(userEmail);

// // Update user's points
// userService.updateUserPoints(user.getId(), purchase.getPointsEarned());

// // Save purchase
// purchase.setUser(user);
// return rewardPurchaseDao.save(purchase);
// }
