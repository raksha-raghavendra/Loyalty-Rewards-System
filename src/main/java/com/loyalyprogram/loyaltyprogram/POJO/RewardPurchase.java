package com.loyalyprogram.loyaltyprogram.POJO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.NamedQuery;
import jakarta.persistence.Table;
import lombok.Data;

@NamedQuery(name="RewardPurchase.findById", query = "select p from RewardPurchase p where p.id=:id")
@Entity
@Data
@Table(name = "purchase")
public class RewardPurchase {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id; 
    
    @ManyToOne
    @JoinColumn(name = "user_id") //tells JPA to create a column "user_id" in the Purchase table
    private User user;

    @Column(name = "pointsEarned")
    private int pointsEarned;

    public void setReward(RewardPurchase reward) {
        this.setReward(reward);
    }

    public int getPointValue() {
        return this.getPointsEarned();
        
    }

}
