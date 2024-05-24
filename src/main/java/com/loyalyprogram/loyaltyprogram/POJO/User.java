package com.loyalyprogram.loyaltyprogram.POJO;

import java.io.Serializable;
import java.util.List;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import jakarta.persistence.*;
import lombok.Data;

@NamedQuery(name="User.findByEmailId", query = "select u from User u where u.email=:email")
@NamedQuery(name="User.findById", query = "select u from User u where u.id=:id")

@Data
@Entity
@DynamicInsert
@DynamicUpdate
@Table(name = "user")
public class User implements Serializable{

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    private String name;
    
    @Column(name = "contactNumber")
    private String contactNumber;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "currentPoints")
    private int currentPoints; 

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<RewardPurchase> purchases;

    public List<RewardPurchase> getPurchases() {
        return purchases;
    }

    public void setPurchases(List<RewardPurchase> purchases) {
        this.purchases = purchases;
    }

}