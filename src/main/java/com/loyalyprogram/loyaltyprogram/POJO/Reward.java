package com.loyalyprogram.loyaltyprogram.POJO;


public class Reward {
    
    private String category;
    private String name;
    private String desc;
    private int pointValue;
    public Reward(String category, String name, String desc, int pointValue) {
        this.category = category;
        this.name = name;
        this.desc = desc;
        this.pointValue = pointValue;
    }
    
}
